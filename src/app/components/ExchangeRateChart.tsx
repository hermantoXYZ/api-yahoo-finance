'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface HistoricalDataPoint {
  date: string;
  price: number;
  open: number;
  high: number;
  low: number;
  volume: number;
}

interface KursData {
  symbol: string;
  currentPrice: number;
  previousClose: number;
  change: string;
  changePercent: string;
  timestamp: string;
  range: string;
  interval: string;
  historicalData: HistoricalDataPoint[];
}

export default function ExchangeRateChart() {
  const [kursData, setKursData] = useState<KursData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [range, setRange] = useState('1mo');
  const [interval, setInterval] = useState('1d');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/kurs?range=${range}&interval=${interval}`);
        setKursData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rate data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [range, interval]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Handle range change
  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRange(e.target.value);
  };

  // Handle interval change
  const handleIntervalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInterval(e.target.value);
  };

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-64 text-red-500">{error}</div>;
  if (!kursData) return <div className="flex justify-center items-center h-64">No data available</div>;

  return (
    <div className="bg-[#313131] p-4 border border-white/20 rounded-lg shadow mb-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 border border-white/20 rounded-lg backdrop-blur-md bg-white/10">
          <h2 className="text-lg font-semibold">Current Price</h2>
          <p className="text-3xl font-bold">{kursData.currentPrice?.toLocaleString() || '-'} IDR</p>
        </div>
        <div className="p-4 border border-white/20 rounded-lg backdrop-blur-md bg-white/10">
          <h2 className="text-lg font-semibold">Change</h2>
          <p className={`text-3xl font-bold ${parseFloat(kursData.change) < 0 ? 'text-red-500' : 'text-green-500'}`}>
            {kursData.change} ({kursData.changePercent})
          </p>
        </div>
        <div className="p-4 border border-white/20 rounded-lg backdrop-blur-md bg-white/10">
          <h2 className="text-lg font-semibold">Previous Close</h2>
          <p className="text-3xl font-bold">{kursData.previousClose?.toLocaleString() || '-'} IDR</p>
        </div>
      </div>
      
      <div className="mb-4 flex flex-wrap gap-4">
        <div>
          <label htmlFor="range" className="block text-sm font-medium text-gray-200 mb-1">Time Range:</label>
          <select
            id="range"
            value={range}
            onChange={handleRangeChange}
            className="border rounded p-2 text-gray-300 bg-[#262626]"
          >
            <option value="1d">1 Day</option>
            <option value="5d">5 Days</option>
            <option value="1mo">1 Month</option>
            <option value="3mo">3 Months</option>
            <option value="6mo">6 Months</option>
            <option value="1y">1 Year</option>
            <option value="2y">2 Years</option>
            <option value="5y">5 Years</option>
            <option value="max">Max</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="interval" className="block text-sm font-medium text-gray-200 mb-1">Interval:</label>
          <select
            id="interval"
            value={interval}
            onChange={handleIntervalChange}
            className="border rounded p-2 text-gray-300 bg-[#262626]"
          >
            <option value="1m">1 Minute</option>
            <option value="5m">5 Minutes</option>
            <option value="15m">15 Minutes</option>
            <option value="30m">30 Minutes</option>
            <option value="60m">60 Minutes</option>
            <option value="1d">1 Day</option>
            <option value="1wk">1 Week</option>
            <option value="1mo">1 Month</option>
          </select>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={kursData.historicalData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={formatDate}
              minTickGap={30}
            />
            <YAxis 
              domain={['auto', 'auto']}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString() + ' IDR', 'Price']}
              labelFormatter={(label) => formatDate(label)}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              name="Close Price"
            />
            <Line
              type="monotone"
              dataKey="high"
              stroke="#82ca9d"
              name="High"
            />
            <Line
              type="monotone"
              dataKey="low"
              stroke="#ff7300"
              name="Low"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
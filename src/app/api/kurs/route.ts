import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  try {
    // Get the range parameter from the query string (default to 1y if not provided)
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || '1y';
    const interval = searchParams.get('interval') || '1d';
    
    // Valid ranges: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
    // Valid intervals: 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo
    
    // Yahoo Finance API endpoint for USD/IDR exchange rate with historical data
    const response = await axios.get(
      'https://query1.finance.yahoo.com/v8/finance/chart/USDIDR=X',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        params: {
          range: range,
          interval: interval
        }
      }
    );

    // Extract the relevant data from the response
    const data = response.data;
    const meta = data.chart.result[0].meta;
    const timestamps = data.chart.result[0].timestamp;
    const quotes = data.chart.result[0].indicators.quote[0];
    
    // Get the latest price
    const latestPrice = meta.regularMarketPrice;
    const previousClose = meta.previousClose;
    const change = latestPrice - previousClose;
    const changePercent = (change / previousClose) * 100;

    // Create historical data points
    const historicalData = [];
    for (let i = 0; i < timestamps.length; i++) {
      if (quotes.close[i] !== null) {
        historicalData.push({
          date: new Date(timestamps[i] * 1000).toISOString(),
          price: quotes.close[i],
          open: quotes.open[i],
          high: quotes.high[i],
          low: quotes.low[i],
          volume: quotes.volume[i]
        });
      }
    }

    // Format the response
    const result = {
      symbol: 'USD/IDR',
      currentPrice: latestPrice,
      previousClose: previousClose,
      change: change.toFixed(2),
      changePercent: changePercent.toFixed(2) + '%',
      timestamp: new Date(meta.regularMarketTime * 1000).toISOString(),
      range: range,
      interval: interval,
      historicalData: historicalData
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching USD/IDR exchange rate:', error);
    return NextResponse.json(
      { error: 'Failed to fetch exchange rate data' },
      { status: 500 }
    );
  }
}
'use client';

export default function StocksPage() 
{
  return (
    <div className="min-h-screen p-8">    
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">API Usage</h2>
        <div className="bg-gray-50 p-4 rounded">
          <p className="font-medium">Available Endpoints:</p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><code className="bg-gray-200 px-1 rounded">/api/stock/search?query=keyword</code> - Search for Indonesian stocks</li>
            <li><code className="bg-gray-200 px-1 rounded">/api/stock/quote?symbol=BBCA.JK</code> - Get current stock data</li>
            <li><code className="bg-gray-200 px-1 rounded">/api/stock/history?symbol=BBCA.JK&period=1y&interval=1d</code> - Get historical data</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
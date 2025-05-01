
export default function Home() {
      return (
        <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
            <h1 className="text-3xl font-bold mb-4">📈 Stock History API Documentation</h1>
            <p className="mb-4">
              This API fetches historical stock data from Yahoo Finance. You can query data using query
              parameters.
            </p>
    
            <h2 className="text-xl font-semibold mb-2">🔗 Endpoint</h2>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
              <code>/api/stock-history</code>
            </pre>
    
            <h2 className="text-xl font-semibold mb-2">📝 Query Parameters</h2>
            <table className="w-full text-sm border border-gray-200 mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-2 text-left">Parameter</th>
                  <th className="border px-3 py-2 text-left">Required</th>
                  <th className="border px-3 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">symbol</td>
                  <td className="border px-3 py-2">✅</td>
                  <td className="border px-3 py-2">Stock symbol (e.g., AAPL, TSLA)</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">period1</td>
                  <td className="border px-3 py-2">optional</td>
                  <td className="border px-3 py-2">Start date (YYYY-MM-DD)</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">period2</td>
                  <td className="border px-3 py-2">optional</td>
                  <td className="border px-3 py-2">End date (YYYY-MM-DD, defaults to today)</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">interval</td>
                  <td className="border px-3 py-2">optional</td>
                  <td className="border px-3 py-2">Data interval (1d, 1wk, 1mo), default is 1d</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">limit</td>
                  <td className="border px-3 py-2">optional</td>
                  <td className="border px-3 py-2">Limit number of results</td>
                </tr>
              </tbody>
            </table>
    
            <h2 className="text-xl font-semibold mb-2">🚀 Example Request</h2>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
              <code>
                {`GET /api/stock-history?symbol=AAPL&period1=2023-01-01&period2=2023-04-01&interval=1d&limit=10`}
              </code>
            </pre>
    
            <h2 className="text-xl font-semibold mb-2">💻 Example Client-side Fetch</h2>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>
                {`const fetchStockData = async () => {
      const res = await fetch('/api/stock-history?symbol=AAPL&period1=2023-01-01&period2=2023-04-01&interval=1d&limit=5');
      const data = await res.json();
      console.log(data);
    };`}
              </code>
            </pre>
    
            <p className="text-xs text-gray-500 mt-4">
              This API uses <a href="https://www.npmjs.com/package/yahoo-finance2" className="underline" target="_blank">yahoo-finance2</a> under the hood.
            </p>
          </div>
          <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6">
  <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
    <h1 className="text-3xl font-bold mb-4">📊 Stock Quote API Documentation</h1>
    <p className="mb-4">
      This API fetches real-time stock quote data from Yahoo Finance. You can query the current quote
      using query parameters.
    </p>

    <h2 className="text-xl font-semibold mb-2">🔗 Endpoint</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
      <code>/api/stock/quote</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">📝 Query Parameters</h2>
    <table className="w-full text-sm border border-gray-200 mb-6">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-3 py-2 text-left">Parameter</th>
          <th className="border px-3 py-2 text-left">Required</th>
          <th className="border px-3 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-3 py-2">symbol</td>
          <td className="border px-3 py-2">✅</td>
          <td className="border px-3 py-2">Stock symbol (e.g., BBRI.JK, AAPL, TSLA)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-xl font-semibold mb-2">🚀 Example Request</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
      <code>GET /api/stock/quote?symbol=BBRI.JK</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">💻 Example Client-side Fetch</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
      <code>{`const fetchQuote = async () => {
  const res = await fetch('/api/stock/quote?symbol=BBRI.JK');
  const data = await res.json();
  console.log(data);
};`}</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">📦 Example Response</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
      <code>{`{
  "symbol": "BBRI.JK",
  "regularMarketPrice": 3850,
  "regularMarketChange": 0,
  "regularMarketChangePercent": 0,
  "regularMarketVolume": 226832200,
  "regularMarketOpen": 3810,
  "marketCap": 579998624776192,
  "shortName": "Bank Rakyat Indonesia (Persero)",
  "longName": "PT Bank Rakyat Indonesia (Persero) Tbk",
  "currency": "IDR",
  "regularMarketTime": "2025-04-30T09:14:53.000Z",
  "firstTradeDateMilliseconds": "2003-11-10T02:00:00.000Z",
  "trailingAnnualDividendYield": 0.089194804,
  "trailingAnnualDividendRate": 343.4,
  "trailingPE": 9.65251,
  "forwardPE": 8.746223,
  "fiftyTwoWeekHigh": 5575,
  "fiftyTwoWeekLow": 3360,
  "priceToBook": 1.8963267,
  "epsTrailingTwelveMonths": 398.86,
  "epsForward": 440.19,
  "epsCurrentYear": 385.72382,
  "priceEpsCurrentYear": 9.981235,
  "sharesOutstanding": 150648995840,
  "previousClose": 3850,
  "dayHigh": 3850,
  "dayLow": 3770,
  "averageDailyVolume3Month": 322963767,
  "averageDailyVolume10Day": 205188250,
  "bookValue": 2030.241,
  "customPriceAlertConfidence": "LOW",
  "fiftyTwoWeekHighChangePercent": -0.30941704,
  "fiftyTwoWeekHighChange": -1725,
  "fiftyTwoWeekLowChangePercent": 0.14583333,
  "fiftyTwoWeekLowChange": 490,
  "ask": 3850,
  "bid": 3840
}`}</code>
    </pre>

    <p className="text-xs text-gray-500 mt-4">
      This API uses <a href="https://www.npmjs.com/package/yahoo-finance2" className="underline" target="_blank">yahoo-finance2</a> under the hood.
    </p>
  </div>
</div>
<div className="min-h-screen bg-gray-50 text-gray-800 py-2 px-6">
  <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
    <h1 className="text-3xl font-bold mb-4">🔍 Stock Search API Documentation</h1>
    <p className="mb-4">
      This API searches for stock information based on the provided query (e.g., symbol or company name).
    </p>

    <h2 className="text-xl font-semibold mb-2">🔗 Endpoint</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
      <code>/api/stock/search</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">📝 Query Parameters</h2>
    <table className="w-full text-sm border border-gray-200 mb-6">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-3 py-2 text-left">Parameter</th>
          <th className="border px-3 py-2 text-left">Required</th>
          <th className="border px-3 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-3 py-2">query</td>
          <td className="border px-3 py-2">✅</td>
          <td className="border px-3 py-2">Stock symbol or company name (e.g., BBRI.JK, Bank Rakyat Indonesia)</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-xl font-semibold mb-2">🚀 Example Request</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
      <code>GET /api/stock/search?query=BBRI.JK</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">💻 Example Client-side Fetch</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
      <code>{`const fetchStockSearch = async () => {
  const res = await fetch('/api/stock/search?query=BBRI.JK');
  const data = await res.json();
  console.log(data);
};`}</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">📦 Example Response</h2>
    <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
      <code>{`[
  {
    "exchange": "JKT",
    "shortname": "Bank Rakyat Indonesia (Persero)",
    "quoteType": "EQUITY",
    "symbol": "BBRI.JK",
    "index": "quotes",
    "score": 10026000,
    "typeDisp": "Equity",
    "longname": "PT Bank Rakyat Indonesia (Persero) Tbk",
    "exchDisp": "Jakarta",
    "sector": "Financial Services",
    "sectorDisp": "Financial Services",
    "industry": "Banks—Regional",
    "industryDisp": "Banks—Regional",
    "isYahooFinance": true
  }
]`}</code>
    </pre>

    <h2 className="text-xl font-semibold mb-2">📋 Response Field Descriptions</h2>
    <table className="w-full text-sm border border-gray-200 mb-6">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-3 py-2 text-left">Field</th>
          <th className="border px-3 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-3 py-2">exchange</td>
          <td className="border px-3 py-2">Stock exchange where the stock is listed (e.g., JKT for Jakarta Stock Exchange)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">shortname</td>
          <td className="border px-3 py-2">Short name of the company (e.g., Bank Rakyat Indonesia)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">quoteType</td>
          <td className="border px-3 py-2">Type of quote (e.g., EQUITY for stocks)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">symbol</td>
          <td className="border px-3 py-2">Stock symbol (e.g., BBRI.JK)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">longname</td>
          <td className="border px-3 py-2">Full name of the company (e.g., PT Bank Rakyat Indonesia (Persero) Tbk)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">sector</td>
          <td className="border px-3 py-2">Sector the company belongs to (e.g., Financial Services)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">industry</td>
          <td className="border px-3 py-2">Industry the company belongs to (e.g., Banks—Regional)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">exchDisp</td>
          <td className="border px-3 py-2">Display name of the exchange (e.g., Jakarta)</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">isYahooFinance</td>
          <td className="border px-3 py-2">Indicates if the stock data is provided by Yahoo Finance</td>
        </tr>
      </tbody>
    </table>

    <p className="text-xs text-gray-500 mt-4">
      This API uses <a href="https://www.npmjs.com/package/yahoo-finance2" className="underline" target="_blank">yahoo-finance2</a> under the hood.
    </p>
  </div>
</div>

        </div>
      );
    }
    


import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ExchangeRateChart = dynamic(
  () => import('./components/ExchangeRateChart'),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 mt-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Yahoo Finance API Documentation</h1>
          <p className="text-xl mb-8">
            A powerful API for accessing real-time stock data, historical prices, and market information
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#docs" className="bg-[#262626] hover:bg-blue-700 px-6 py-3 rounded-4xl font-medium">
              Documentation
            </a>
            <a href="https://github.com/hermantoXYZ/api-yahoo-finance" 
               target="_blank" 
               className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-4xl font-medium text-center">
              GitHub
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/sparkles.png')] bg-repeat"></div>
        </div>
      </div>

 {/* USD/IDR Exchange Rate Chart */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">⚡ USD/IDR Exchange Rate</h2>
        <ExchangeRateChart />
      </div>


      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real-time Data Card */}
          <div className="bg-[#313131] rounded-xl p-8 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚡</span>
              <h2 className="text-2xl font-bold">Real-time Data</h2>
            </div>
            <p className="text-gray-300">
              Access live stock quotes and market data with millisecond precision
            </p>
          </div>

          {/* Historical Data Card */}
          <div className="bg-[#313131] rounded-xl p-8 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">📈</span>
              <h2 className="text-2xl font-bold">Historical Data</h2>
            </div>
            <p className="text-gray-300">
              Get detailed historical price data with customizable date ranges
            </p>
          </div>

          {/* Search Functionality Card */}
          <div className="bg-[#313131] rounded-xl p-8 shadow-lg border border-white/20">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🔍</span>
              <h2 className="text-2xl font-bold">Smart Search</h2>
            </div>
            <p className="text-gray-300">
              Find stocks by symbol or company name across global markets
            </p>
          </div>
        </div>
      </div>
      

      {/* Main Documentation Content */}
      <div className="max-w-7xl mx-auto mb-10 px-6" id="docs">
        {/* Your existing documentation content here */}
        <div className="grid grid-cols-1 gap-8">
          {/* Stock History API Section */}
          <div className="bg-[#313131] rounded-xl p-8 shadow-lg border border-white/20" id="history">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stock History API</h2>
              <p className="mb-4">
                This API endpoint fetches historical stock data from Yahoo Finance.
              </p>
              <h3 className="text-xl font-semibold mb-2">Endpoint</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>/api/stock/history</code>
              </pre>
              <h3 className="text-xl font-semibold mb-2">Query Parameters</h3>
              <table className="w-full text-sm border border-gray-700 mb-6">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="border px-3 py-2 text-left">Parameter</th>
                    <th className="border px-3 py-2 text-left">Required</th>
                    <th className="border px-3 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">symbol</td>
                    <td className="border px-3 py-2">✅</td>
                    <td className="border px-3 py-2">Stock symbol (e.g., BBRI.JK, TSLA)</td>
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
              <h3 className="text-xl font-semibold mb-2">Example Request</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>
                  {`GET /api/stock/history?symbol=AAPL&period1=2023-01-01&period2=2023-04-01&interval=1d&limit=10`}
                </code>
              </pre>
              <h3 className="text-xl font-semibold mb-2">Example Response</h3>
              <pre className="bg-[#262626] rounded-lg p-4 overflow-x-auto text-sm">
                <code>{`[
  {
    "date": "2023-01-01",
    "open": 150.0,
    "high": 155.0,
    "low": 149.0,
    "close": 154.0,
    "volume": 1000000,
    "adjClose": 154.0
  },
  ...
]`}</code>
              </pre>
              <p className="text-xs text-gray-500 mt-4">
                This API uses <a href="https://www.npmjs.com/package/yahoo-finance2" 
                               className="underline" 
                               target="_blank">yahoo-finance2</a> under the hood.
              </p>
            </div>
          </div>

          {/* Stock Quote API Section */}
         {/* Stock Quote API Section */}
         <div className="bg-[#313131] rounded-xl p-8 shadow-lg border border-white/20" id="quote">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stock Quote API</h2>
              <p className="mb-4">
                This API endpoint fetches real-time stock quote data from Yahoo Finance.
              </p>
              <h3 className="text-xl font-semibold mb-2">Endpoint</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>/api/stock/quote</code>
              </pre>
              <h3 className="text-xl font-semibold mb-2">Query Parameters</h3>
              <table className="w-full text-sm border border-gray-700 mb-6">
                <thead>
                  <tr className="bg-gray-700">
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
              <h3 className="text-xl font-semibold mb-2">Example Request</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>
                  {`GET /api/stock/quote?symbol=BBRI.JK`}
                </code>
              </pre>
              <h3 className="text-xl font-semibold mb-2">Example Response</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm">
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
                This API uses <a href="https://www.npmjs.com/package/yahoo-finance2" 
                               className="underline" 
                               target="_blank">yahoo-finance2</a> under the hood.
              </p>
            </div>
          </div>

          {/* Stock Search API Section */}
       {/* Stock Search API Section */}
       <div className="bg-[#313131] rounded-xl p-8 shadow-lg border border-white/20" id="search">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold mb-4">Stock Search API</h2>
              <p className="mb-4">
                This API endpoint searches for stock information based on the provided query.
              </p>
              <h3 className="text-xl font-semibold mb-2">Endpoint</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>/api/stock/search</code>
              </pre>
              <h3 className="text-xl font-semibold mb-2">Query Parameters</h3>
              <table className="w-full text-sm border border-gray-700 mb-6">
                <thead>
                  <tr className="bg-gray-700">
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
              <h3 className="text-xl font-semibold mb-2">🚀 Example Request</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm mb-4">
                <code>
                  {`GET /api/stock/search?query=BBRI.JK`}
                </code>
              </pre>
              <h3 className="text-xl font-semibold mb-2">Example Response</h3>
              <pre className="bg-[#262626] border border-white/10 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{`[
  {
    "symbol": "BBRI.JK",
    "exchDisp": "Jakarta",
    "exchange": "JKT",
    "shortname": "Bank Rakyat Indonesia (Persero)",
    "longname": "PT Bank Rakyat Indonesia (Persero) Tbk",
    "typeDisp": "Equity",
    "quoteType": "EQUITY",
    "score": 10026000
  },
  ...
]`}</code>
              </pre>
              <p className="text-xs text-gray-500 mt-4">
                This API uses <a href="https://www.npmjs.com/package/yahoo-finance2" 
                               className="underline" 
                               target="_blank">yahoo-finance2</a> under the hood.
              </p>
            </div>
          </div>
        </div>
      </div>

<Footer/>
    </div>
  );
}
    


import { NextRequest, NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

// Add interface for the quote object
interface YahooQuote {
    symbol: string;
    exchDisp?: string;
    exchange?: string;
    shortname?: string;
    longname?: string;
    typeDisp?: string;
    quoteType?: string;
    score?: number;
}

interface SearchResponse {
    count: number;
    quotes: YahooQuote[];
    totalTime: number;
    timeTakenForQuotes: number;
    timeTakenForNews: number;
    timeTakenForNav: number;
    timeTakenForLists: number;
    timeTakenForResearchReports: number;
}


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  
  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }
  
  try {
    const results = (await yahooFinance.search(query)) as unknown as SearchResponse;
    const filteredResults = results.quotes.filter(quote =>
      quote.symbol.endsWith('.JK') ||
      quote.exchDisp === 'Jakarta' ||
      quote.exchange === 'JKT'
    );

    if (filteredResults.length === 0) {
      return NextResponse.json({
        message: 'No stocks found for your search query',
        results: []
      });
    }

    return NextResponse.json(filteredResults);
  } catch (error) {
    console.error('Error in stock search API:', error);
    return NextResponse.json(
      { error: 'Failed to search stocks' },
      { status: 500 }
    );
  }
}
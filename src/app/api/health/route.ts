import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const isHealthy: boolean = true;

  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');
  console.log('id', id); // show in console

  if (isHealthy) {
    // Return a 200 OK response if the application is healthy
    return new Response(JSON.stringify({ status: 'Ok' }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } else {
    // Return a different status code if the application is not healthy
    return new Response(JSON.stringify({ status: 'Error' }), {
      status: 500,
    });
  }
}

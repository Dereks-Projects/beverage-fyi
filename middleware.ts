import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Geo data is only available on Vercel deployment
  // @ts-expect-error - geo is available at runtime on Vercel
  const country = request.geo?.country || ''

  const blockedCountries = ['CN', 'RU']

  if (blockedCountries.includes(country)) {
    return new NextResponse('Access Restricted', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
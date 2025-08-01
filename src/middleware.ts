import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // For demo purposes, allow all admin access
  // In production, this would check for proper authentication
  
  const { pathname } = request.nextUrl
  
  // Allow all admin routes for demo
  if (pathname.startsWith('/admin')) {
    // For demo mode, we'll allow access without authentication
    // This is only for demonstration purposes
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

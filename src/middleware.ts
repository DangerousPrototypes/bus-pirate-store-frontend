import { NextRequest, NextResponse } from "next/server"

// Middleware to handle region selection and onboarding status
export async function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"], // Adjust the matcher as needed
}

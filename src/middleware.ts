import { NextRequest, NextResponse } from "next/server"

// Middleware to handle region selection and onboarding status
export async function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const checkoutStep = searchParams.get("step")
  const cartId = searchParams.get("cart_id")

  let redirectUrl = request.nextUrl.href

  let response = NextResponse.next()

  if (cartId && !checkoutStep) {
    redirectUrl = `${redirectUrl}&step=address`
    response = NextResponse.redirect(`${redirectUrl}`, 307)
    response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"], // Adjust the matcher as needed
}

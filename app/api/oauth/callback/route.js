import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const accountTokens = searchParams.getAll('token1')

  if (!accountTokens.length) {
    return NextResponse.redirect(new URL('/?oauth=cancelled', request.url))
  }

  // IMPORTANT: Deriv OAuth sends account credentials to this callback.
  // Replace this placeholder with a server-side encrypted session store.
  // Never persist raw tokens in browser localStorage or source code.
  return NextResponse.redirect(new URL('/?oauth=pending_secure_storage', request.url))
}

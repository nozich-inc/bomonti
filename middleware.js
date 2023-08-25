import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;
const user = ['account', 'checkout', 'orders', 'profile', 'settings'];
const visitor = ['', 'login', 'register', 'forgot-password'];
const auth = user.concat(visitor);

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const page = path.split('/')[1];

  if (!auth.includes(page)) {
    return NextResponse.next();
  }

  const session = await getToken({ req, secret });

  if (session && visitor.includes(page)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!session && user.includes(page)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

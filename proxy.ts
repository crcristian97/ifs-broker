import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(es|en)/:path*",
    // All pathnames except API, Next internals, static files, and non-localized routes
    "/((?!api|_next|_vercel|qr|slice-simulator|.*\\..*).*)",
  ],
}

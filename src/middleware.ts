import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: ['/', '/sign-in(.*)', '/sign-up(.*)'],
  ignoredRoutes: ['/api/webhooks'],
  afterAuth(auth, req) {
    const { userId, isPublicRoute } = auth;
    console.log('Auth state:', { userId, isPublicRoute, url: req.url });

    // If signed in and on root, redirect to home
    if (userId && req.nextUrl.pathname === '/') {
      const homeUrl = new URL('/home', req.url);
      console.log('Redirecting to:', homeUrl.toString());
      return Response.redirect(homeUrl);
    }

    // If not signed in and trying to access protected routes
    if (!userId && !isPublicRoute) {
      const signInUrl = new URL('/', req.url);
      console.log('Redirecting to:', signInUrl.toString());
      return Response.redirect(signInUrl);
    }
  },
});

export const config = {
  matcher: [
    // Skip all static files, webhooks, and Next.js internals
    '/((?!api/webhooks|_next/static|_next/image|favicon.ico).*)',
  ],
};

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks/(.*)',
  // '/(.*)',
]);

export default clerkMiddleware(
  (auth, request) => {
    const authResult = auth();
    const { userId } = authResult;
    if (!isPublicRoute(request)) {
      console.log('HELLO');
      authResult.protect();
    }
  },
  // { debug: true },
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    // '/(api|trpc)(.*)',
  ],
};

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
    const { userId } = auth();
    // console.log('🚀 ~ SignUpModal ~ userId:', userId);
    // console.log('isPublicRoute(request)', !isPublicRoute(request));
    // if (!isPublicRoute(request)) {
    //   auth().protect();
    // }
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

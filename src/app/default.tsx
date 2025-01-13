'use client';
import { useAuth } from '@clerk/nextjs';
import RootPage from './page';
import HomePage from './home/page';

export default function Default() {
  const { isLoaded, isSignedIn } = useAuth();

  if (isLoaded && !isSignedIn) {
    return <RootPage />;
  }

  if (isLoaded && isSignedIn) {
    return <HomePage />;
  }

  return null;
}

// export default Page;

'use client';

import { SignInModal } from '@/components/Modals/SignInModal';
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Page() {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      window.location.href = '/home';
    }
  }, [isLoaded, isSignedIn]);

  return <SignInModal />;
}

'use client';
import { SignUpModal } from '@/components/Modals/SignUpModal';
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Page() {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      window.location.href = '/home';
    }
  }, [isLoaded, isSignedIn]);

  return <SignUpModal />;
}

'use client';
import { useClerk } from '@clerk/nextjs';

export const Header = () => {
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };
  return (
    <header className="flex justify-end items-end">
      <button onClick={handleSignOut}>Sign out</button>
    </header>
  );
};

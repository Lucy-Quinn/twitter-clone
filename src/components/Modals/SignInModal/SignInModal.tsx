import { SignIn } from '@clerk/nextjs';
import React from 'react';

export const SignInModal = () => {
  return (
    <dialog className="left-0 top-0 w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
      <SignIn />
    </dialog>
  );
};

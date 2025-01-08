import { DialogWrapper } from '@/components/DialogWrapper';
import { SignIn } from '@clerk/nextjs';
import React from 'react';

export const SignInModal = () => {
  return (
    <DialogWrapper>
      <SignIn />
    </DialogWrapper>
  );
};

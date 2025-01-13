import { DialogWrapper } from '@/components/DialogWrapper';
import { TweetAction } from '@/components/Tweet/TweetActions/TweetAction';
import { SignIn } from '@clerk/nextjs';
import React from 'react';

export const SignInModal = () => {
  const handleClose = () => {
    window.location.href = '/';
  };
  return (
    <DialogWrapper>
      <div className="relative">
        <div className="absolute right-0 top-0 translate-x-[calc(100%-32px)] -translate-y-[-10px] z-10">
          <TweetAction
            name="Close"
            onClick={handleClose}
            color="fontGrey"
            showTooltip={false}
          />
        </div>
        <SignIn />
      </div>
    </DialogWrapper>
  );
};

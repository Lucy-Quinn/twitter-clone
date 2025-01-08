import { DialogWrapper } from '@/components/DialogWrapper';
import { SignUp } from '@clerk/nextjs';

export const SignUpModal = () => {
  return (
    <DialogWrapper>
      <SignUp />
    </DialogWrapper>
  );
};

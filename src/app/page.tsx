'use client';
import { Logo } from '@/components/icons';
import { useRouter } from 'next/navigation';

export default function RootHome() {
  const router = useRouter();
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = (event.target as HTMLButtonElement).id.toLowerCase();
    router.push(buttonId === 'sign-up' ? '/sign-up' : '/sign-in');
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="min-w-[45vw] flex justify-center">
        <Logo className="w-100 h-100" />
      </div>
      <div className="min-w-[45vw] flex justify-center">
        <div>
          <h1 className="py-12">Happening now</h1>
          <h2 className="py-8">Join today.</h2>
          <button
            id="sign-up"
            className="h-10 bg-twitterBlue button w-[266px]"
            onClick={handleOnClick}
          >
            Create account
          </button>
          <p className="w-[266px] text-xs mt-2">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
          <p className="text-lg font-bold mt-10">Already have an account?</p>
          <button
            id="sign-in"
            className="h-10 button w-[266px] bg-[#fff] !text-twitterBlue border border-borderGrey mt-5" //create a reusable button component
            onClick={handleOnClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

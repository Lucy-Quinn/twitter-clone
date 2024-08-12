'use client';
//@ts-ignore
import { useRouter } from 'next/navigation';

export default function RootHome() {
  const router = useRouter();
  const handleOnClick = () => {
    router.push('/home');
  };

  return (
    <>
      <button className="w-20 h-20 bg-twitterBlue" onClick={handleOnClick}>
        Go to homepage
      </button>
    </>
  );
}

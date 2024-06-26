'use client';
import { ReplyModal } from '@/components/Modals';
import { useRouter } from 'next/navigation';
import { Tweet } from '../components';

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

      <ReplyModal />
    </>
  );
}

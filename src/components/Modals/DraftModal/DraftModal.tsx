'use client';

import { TweetAction } from '@/components/Tweet/TweetActions/TweetAction';
import { useRouter } from 'next/navigation';

export const DraftModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <div className="w-8">
      <dialog className="left-0 top-0 w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
        <div className="fixed max-w-[600px] md:min-w-[600px] bg-[#fff] h-full w-full p-4 md:h-auto lg:m-8 md:rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <TweetAction name="BackArrow" onClick={handleClose} />
              <p>Drafts</p>
            </div>
            <button className="button mr-4 bg-[#0F1419] py-2 px-4 rounded-full">
              Edits
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

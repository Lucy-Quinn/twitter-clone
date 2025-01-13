'use client';
import { DialogWrapper } from '@/components/DialogWrapper';
import { TweetAction } from '@/components/Tweet/TweetActions/TweetAction';
import { useRouter } from 'next/navigation';

export const ScheduleModal = () => {
  const router = useRouter();

  const handleScheduleData = () => {
    //add date to DB directly from here OR context?
  };

  const handleClose = () => {
    router.back();
  };
  return (
    <DialogWrapper>
      <div className="fixed min-w-[600px] bg-[#fff] h-full p-4 md:h-auto lg:m-8 md:rounded-2xl">
        <div className="flex items-center">
          <TweetAction
            name="Close"
            classes={{ container: 'min-w-14' }}
            onClick={handleClose}
          />
          <p className="font-bold text-xl grow">Schedule</p>
          <button
            className="button bg-[#0F1419] py-2 px-4 rounded-full"
            onClick={handleScheduleData}
          >
            Confirm
          </button>
        </div>
      </div>
    </DialogWrapper>
  );
};

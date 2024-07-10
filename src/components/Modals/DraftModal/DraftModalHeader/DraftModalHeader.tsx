import { TweetAction } from '@/components/Tweet/TweetActions/TweetAction';
import { useRouter } from 'next/navigation';

type DraftModalHeaderProps = {
  isSelected: boolean;
};
export const DraftModalHeader = ({ isSelected }: DraftModalHeaderProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-6 min-h-[53px]">
        <TweetAction name="BackArrow" onClick={handleClose} />
        <p className="text-[17px] font-bold">Drafts</p>
      </div>
      {isSelected && (
        <button className="button bg-[#0F1419] py-2 px-4 rounded-full">
          Edit
        </button>
      )}
    </div>
  );
};

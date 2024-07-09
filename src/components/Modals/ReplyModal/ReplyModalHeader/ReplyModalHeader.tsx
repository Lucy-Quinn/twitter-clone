import { TweetAction } from '@/components/Tweet/TweetActions/TweetAction';
import { DeviceType } from '@/hooks/useDeviceType';
import { useRouter } from 'next/navigation';

type ReplyModalHeaderProps = {
  onReply: React.MouseEventHandler<HTMLButtonElement>;
  isButtonDisabled: boolean;
  deviceType: DeviceType;
};

export const ReplyModalHeader = ({
  onReply,
  isButtonDisabled,
  deviceType,
}: ReplyModalHeaderProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center h-[53px]">
      {deviceType === DeviceType.desktop ? (
        <>
          <TweetAction name="Close" onClick={handleClose} color="fontGrey" />
          <button className="transparent-button mr-8">Drafts</button>
        </>
      ) : (
        <>
          <TweetAction name="BackArrow" onClick={handleClose} />
          <div className="flex gap-3 [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
            <button className="transparent-button">Drafts</button>
            <button
              className="button my-[10px]"
              onClick={onReply}
              disabled={isButtonDisabled}
            >
              Reply
            </button>
          </div>
        </>
      )}
    </div>
  );
};

import { TweetAction } from '@/components/Tweet/TweetActions/TweetAction';
import { DeviceType } from '@/hooks/useDeviceType';
//@ts-ignore
import { useRouter } from 'next/navigation';

type ReplyModalHeaderProps = {
  onMessageSubmit: React.MouseEventHandler<HTMLButtonElement>;
  isButtonDisabled: boolean;
  deviceType: DeviceType;
};

export const ReplyModalHeader = ({
  onMessageSubmit,
  isButtonDisabled,
  deviceType,
}: ReplyModalHeaderProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="flex justify-between items-center">
      {deviceType === DeviceType.mobile ? (
        <>
          <TweetAction name="BackArrow" onClick={handleClose} />
          <div className="flex gap-3 [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
            <button className="transparent-button" onClick={onMessageSubmit}>
              Drafts
            </button>
            <button
              className="button bg-twitterBlue my-[10px]"
              onClick={onMessageSubmit}
              disabled={isButtonDisabled}
            >
              Reply
            </button>
          </div>
        </>
      ) : (
        <>
          <TweetAction name="Close" onClick={handleClose} color="fontGrey" />
          <button
            className="transparent-button lg:hover:bg-twitterBlue lg:hover:bg-opacity-15 lg:py-2 lg:px-4 lg:hover:rounded-full"
            onClick={onMessageSubmit}
          >
            Drafts
          </button>
        </>
      )}
    </div>
  );
};

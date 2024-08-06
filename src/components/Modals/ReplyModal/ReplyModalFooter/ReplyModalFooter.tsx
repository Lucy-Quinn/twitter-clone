import { DeviceType } from '@/hooks/useDeviceType';

type ReplyModalFooterProps = {
  onMessageSubmit: React.MouseEventHandler<HTMLButtonElement>;
  isButtonDisabled: boolean;
  deviceType: DeviceType;
};

export const ReplyModalFooter = ({
  onMessageSubmit,
  isButtonDisabled,
  deviceType,
}: ReplyModalFooterProps) => {
  return (
    <div className="flex justify-between items-center [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
      <div>reply actions</div>
      {deviceType !== DeviceType.mobile && (
        <button
          className="button bg-twitterBlue my-[10px]"
          onClick={onMessageSubmit}
          disabled={isButtonDisabled}
        >
          Reply
        </button>
      )}
    </div>
  );
};

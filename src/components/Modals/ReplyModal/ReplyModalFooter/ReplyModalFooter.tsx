import { DeviceType } from '@/hooks/useDeviceType';

type ReplyModalFooterProps = {
  onMessageSubmit: React.MouseEventHandler<HTMLButtonElement>;
  isReplyButtonDisabled: boolean;
  deviceType: DeviceType;
};

export const ReplyModalFooter = ({
  onMessageSubmit,
  isReplyButtonDisabled,
  deviceType,
}: ReplyModalFooterProps) => {
  return (
    <div className="flex justify-between items-center [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
      <div>
        <span>Schedule post</span>
      </div>
      {deviceType !== DeviceType.mobile && (
        <button
          className="button bg-twitterBlue my-[10px]"
          onClick={onMessageSubmit}
          disabled={isReplyButtonDisabled}
        >
          Reply
        </button>
      )}
    </div>
  );
};

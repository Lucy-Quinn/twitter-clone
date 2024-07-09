import { DeviceType } from '@/hooks/useDeviceType';

type ReplyModalFooterProps = {
  onReply: React.MouseEventHandler<HTMLButtonElement>;
  isButtonDisabled: boolean;
  deviceType: DeviceType;
};

export const ReplyModalFooter = ({
  onReply,
  isButtonDisabled,
  deviceType,
}: ReplyModalFooterProps) => {
  return (
    <div className="flex justify-between items-center [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
      <div>reply actions</div>
      {deviceType !== DeviceType.mobile && (
        <button
          className="button my-[10px]"
          onClick={onReply}
          disabled={isButtonDisabled}
        >
          Reply
        </button>
      )}
    </div>
  );
};

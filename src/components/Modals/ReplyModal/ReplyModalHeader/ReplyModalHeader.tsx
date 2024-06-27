import { useRouter } from 'next/navigation';

type ReplyModalHeaderProps = {
  onReply: React.MouseEventHandler<HTMLButtonElement>;
  isButtonDisabled: boolean;
};

export const ReplyModalHeader = ({
  onReply,
  isButtonDisabled,
}: ReplyModalHeaderProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="flex justify-between h-[53px]">
      <button onClick={handleClose}>X</button>
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
    </div>
  );
};

import { useRouter } from 'next/navigation';

export const ReplyModalHeader = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <div className="flex justify-between h-[53px]">
      <button onClick={handleClose}>X</button>
      <div className="flex gap-3 [&>*]:px-4 [&>*]:text-sm [&>*]:min-h-8">
        <button className="transparent-button">Drafts</button>
        <button className="button my-[10px]">Reply</button>
      </div>
    </div>
  );
};

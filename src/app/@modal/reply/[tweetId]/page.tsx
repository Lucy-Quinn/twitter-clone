import { ReplyModal } from '@/components/Modals';

export default function ReplyM({ params }: { params: { tweetId: string } }) {
  const id = Number(params.tweetId);
  return <ReplyModal {...{ id }} />;
}

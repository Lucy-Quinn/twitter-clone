import { ReplyModal } from '@/components/Modals';

export default function ReplyM({ params }: { params: { tweetId: string } }) {
  const tweetId = Number(params.tweetId);
  return <ReplyModal {...{ tweetId }} />;
}

'use client';
import { ReplyModal } from '@/components/Modals';
import { usePathname } from 'next/navigation';

export default function ReplyM({ params }: { params: { tweetId: string } }) {
  const { tweetId: id } = params;
  const pathname = usePathname();

  return pathname === `/reply/${id}` && <ReplyModal {...{ id }} />;
}

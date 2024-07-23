import { Comment as CommentIcon } from '@/components/icons';
import { UnsentPostData } from 'types';

type UnsentPostProps = Pick<
  UnsentPostData,
  'unsentPostId' | 'originalTweetUsername' | 'content'
>;

export const UnsentPost = ({
  unsentPostId,
  originalTweetUsername,
  content,
}: UnsentPostProps) => {
  return (
    <div
      key={unsentPostId}
      className="border-b border-fontGrey border-opacity-10 p-4"
    >
      <div className="flex items-center gap-2 text-[13px]">
        <CommentIcon className="w-4 h-4 text-[#536471]" />
        <div className="text-[#536471] font-bold">
          Replying to @{originalTweetUsername}
        </div>
      </div>
      <div className="mt-1 font-fontBlack">{content}</div>
    </div>
  );
};

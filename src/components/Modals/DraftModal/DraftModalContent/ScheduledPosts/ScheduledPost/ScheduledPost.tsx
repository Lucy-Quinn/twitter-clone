import { CalendarIcon, Comment as CommentIcon } from '@/components/icons';
import { type ScheduledPostData } from '@/types/tweet';

type ScheduledPostProps = Pick<
  ScheduledPostData,
  'scheduledPostId' | 'scheduledDate' | 'originalTweetUsername' | 'content'
>;
export const ScheduledPost = ({
  scheduledDate,
  originalTweetUsername,
  content,
}: ScheduledPostProps) => {
  return (
    <div className="border-b border-fontGrey border-opacity-10 p-4">
      <div className="flex items-center gap-2 text-[13px]">
        <CalendarIcon className="w-4 h-4 text-[#536471]" />
        <p>Will send on: {scheduledDate}</p>
      </div>
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

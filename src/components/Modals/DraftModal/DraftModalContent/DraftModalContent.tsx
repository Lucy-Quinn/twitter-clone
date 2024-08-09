import { DraftType } from '@/types/tweet';
import { ScheduledPosts } from './ScheduledPosts';
import { UnsentPosts } from './UnsentPosts';

type DraftModalContentProps = {
  isUnsentSelected: DraftType;
};
export const DraftModalContent = ({
  isUnsentSelected,
}: DraftModalContentProps) => {
  const userId = '3';

  return (
    <div className="border-t border-b border-fontGrey border-opacity-10">
      {isUnsentSelected === DraftType.UNSENT ? (
        <UnsentPosts {...{ userId }} />
      ) : (
        <ScheduledPosts {...{ userId }} />
      )}
    </div>
  );
};

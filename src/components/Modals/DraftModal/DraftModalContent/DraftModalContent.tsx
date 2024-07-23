import { TabType } from '../DraftModal';
import { ScheduledPosts } from './ScheduledPosts';
import { UnsentPosts } from './UnsentPosts';

type DraftModalContentProps = {
  isUnsentSelected: TabType;
};
export const DraftModalContent = ({
  isUnsentSelected,
}: DraftModalContentProps) => {
  const userId = '1';

  return (
    <div className="border-t border-b border-fontGrey border-opacity-10">
      {isUnsentSelected === 'unsentPost' ? (
        <UnsentPosts {...{ userId }} />
      ) : (
        <ScheduledPosts {...{ userId }} />
      )}
    </div>
  );
};

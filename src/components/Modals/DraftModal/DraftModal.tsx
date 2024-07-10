'use client';

import { useState } from 'react';
import { DraftModalHeader } from './DraftModalHeader';
import { DraftModalTab } from './DraftModalTab';
import { Comment } from '@/components/icons';

export enum TabType {
  unsentPost = 'unsentPost',
  scheduled = 'scheduled',
}

export const DraftModal = () => {
  const [isUnsentSelected, setIsUnsentSelected] = useState(TabType.unsentPost);

  const handleTabs = (title: TabType) => {
    if (title !== isUnsentSelected) {
      setIsUnsentSelected(title);
    }
  };

  return (
    <div className="w-8">
      <dialog className="left-0 top-0 w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
        <div className="fixed max-w-[600px] md:min-w-[600px] bg-[#fff] h-full w-full md:h-auto lg:m-8 md:rounded-2xl">
          <DraftModalHeader
            isSelected={isUnsentSelected === TabType.unsentPost}
          />
          <div className="flex items-center justify-around pr-4 pl-4 [&>div]: [&>div>p]:pb-4">
            <DraftModalTab
              handleTab={handleTabs}
              isSelected={isUnsentSelected === TabType.unsentPost}
              title={TabType.unsentPost}
            />
            <DraftModalTab
              handleTab={handleTabs}
              isSelected={isUnsentSelected === TabType.scheduled}
              title={TabType.scheduled}
            />
          </div>
          <div className="border-t border-b border-fontGrey border-opacity-10">
            <div className="p-4">
              <div className="flex items-center gap-2 text-[13px]">
                <div>
                  <Comment className="w-4 h-4 text-[#536471]" />
                </div>
                <div className="text-[#536471] font-bold">
                  Replying to @Lucyqbcn
                </div>
              </div>
              <div className="mt-1 font-fontBlack">
                Keep at it! Practise a little bit each day!
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

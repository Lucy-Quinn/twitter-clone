'use client';

import { useState } from 'react';
import { DraftModalHeader } from './DraftModalHeader';
import { DraftModalContent } from './DraftModalContent';
import { DraftModalTab } from './DraftModalTab';
import { DraftType } from '@/types/tweet';

// export enum DraftType {
//   unsentPost = 'unsentPost',
//   scheduled = 'scheduled',
// }

export const DraftModal = () => {
  const [isUnsentSelected, setIsUnsentSelected] = useState(DraftType.UNSENT);

  const handleTabs = (title: DraftType) => {
    if (title !== isUnsentSelected) {
      setIsUnsentSelected(title);
    }
  };

  return (
    <div className="w-8">
      <dialog className="left-0 top-0 w-full h-full bg-[black] bg-opacity-40 z-50 overflow-auto flex justify-center items-center">
        <div className="fixed max-w-[600px] min-h-[615px] md:min-w-[600px] bg-[#fff] h-full w-full md:h-auto lg:m-8 md:rounded-2xl">
          <DraftModalHeader
            isSelected={isUnsentSelected === DraftType.UNSENT}
          />
          <div className="flex items-center justify-around pr-4 pl-4 [&>div]: [&>div>p]:pb-4">
            <DraftModalTab
              handleTab={handleTabs}
              isSelected={isUnsentSelected === DraftType.UNSENT}
              title={DraftType.UNSENT}
            />
            <DraftModalTab
              handleTab={handleTabs}
              isSelected={isUnsentSelected === DraftType.SCHEDULED}
              title={DraftType.SCHEDULED}
            />
          </div>
          <DraftModalContent {...{ isUnsentSelected }} />
        </div>
      </dialog>
    </div>
  );
};

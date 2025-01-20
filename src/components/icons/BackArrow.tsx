import { SVGProps } from 'react';

export const BackArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer"
      {...props}
    >
      <g>
        <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
      </g>
    </svg>
  );
};

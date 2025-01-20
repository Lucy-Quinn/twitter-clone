import { SVGProps } from 'react';

export const ThreeDots = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-5 h-5 text-gray-500 hover:text-gray-700"
      {...props}
    >
      <g>
        <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
      </g>
    </svg>
  );
};

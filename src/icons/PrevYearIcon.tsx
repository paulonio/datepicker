import React, { FC, SVGProps } from 'react';

const PrevYearIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="10"
      height="10"
      viewBox="0 0 9 15"
      {...props}
    >
      <path d="M0 7.2L7.2 14.4L8.32 13.2L2.4 7.2L8.32 1.2L7.2 0L0 7.2Z" />
    </svg>
  );
};

export default PrevYearIcon;

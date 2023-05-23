import React, { FC, SVGProps } from 'react';

const NextYearIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M1.12 0L0 1.2L5.92 7.2L0 13.2L1.12 14.4L8.32 7.2L1.12 0Z" />
    </svg>
  );
};

export default NextYearIcon;

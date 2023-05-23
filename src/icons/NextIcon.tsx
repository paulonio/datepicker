import React, { FC, SVGProps } from 'react';

const NextIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      role="img"
      focusable="false"
      fill="currentColor"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M4.27337 4.5L3.33337 5.44L6.38671 8.5L3.33337 11.56L4.27337 12.5L8.27337 8.5L4.27337 4.5Z" />
      <path d="M8.66668 4.5L7.72668 5.44L10.78 8.5L7.72668 11.56L8.66668 12.5L12.6667 8.5L8.66668 4.5Z" />
    </svg>
  );
};

export default NextIcon;

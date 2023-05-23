import React, { FC, SVGProps } from 'react';

const PrevIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M11.7266 12.5L12.6666 11.56L9.61329 8.5L12.6666 5.44L11.7266 4.5L7.72663 8.5L11.7266 12.5Z" />
      <path d="M7.33332 12.5L8.27332 11.56L5.21998 8.5L8.27331 5.44L7.33331 4.5L3.33332 8.5L7.33332 12.5Z" />
    </svg>
  );
};

export default PrevIcon;

import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  handler: (value: boolean) => void
) => {
  useEffect(() => {
    const handleOutsideClick: EventListener = (e) => {
      if (e.target && (e.target as HTMLElement).tagName === 'INPUT') {
        return;
      }
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(e.target as Node)) {
        handler(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
};

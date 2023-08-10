import { useRef } from 'react';

const useDebounce = (func: (...args: unknown[]) => void, delay: number):unknown => {
  const timer = useRef(null);

  return (...args: unknown[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      func(...args);
    }, delay)
  };
};

export default useDebounce;
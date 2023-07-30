import { useState } from 'react';

const useDebounce = (func: (...args: unknown[]) => void, delay: number):unknown => {
  const [timer, setTimer] = useState<unknown | null>(null);

  return (...args: unknown[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        func(...args);
      }, delay)
    );
  };
};

export default useDebounce;
import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, duration = 3000, delay = 0) => {
  const element = useRef();
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const handleScroll = useCallback(() => {
    const { current } = element;
    const currentScroll = window.pageYOffset;
    const elementTop =
      window.pageYOffset + current.getBoundingClientRect().top - 800;
    if (currentScroll > elementTop) {
      let currentNumber = start;
      const counter = setInterval(() => {
        currentNumber += 1;
        current.innerHTML = currentNumber;
        if (currentNumber === end) {
          clearInterval(counter);
        }
      }, stepTime);
      window.removeEventListener('scroll', handleScroll);
    }
  }, [end, start, stepTime, element]);

  useEffect(() => {
    if (element.current) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;

import { useRef, useEffect, useCallback } from 'react';

const useScrollClipPath = (direction = 'left', duration = 1, delay = 0) => {
  const element = useRef();

  const handleClipPath = (name) => {
    switch (name) {
      case 'up':
        return 'inset(100% 0 0 0)';
      case 'down':
        return 'inset(0 0 100% 0)';
      case 'left':
        return 'inset(0 100% 0 0)';
      case 'right':
        return 'inset(0 0 0 100%)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'transform, clip-path';
        current.style.transitionDuration = `${duration * 1.5}s, ${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.transform = 'scale(1)';
        current.style.clipPath = 'inset(0 0 0 0)';
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current.parentNode);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      transform: 'scale(1.2)',
      clipPath: handleClipPath(direction),
    },
  };
};

export default useScrollClipPath;

import { useRef, useEffect, useCallback, type CSSProperties, type RefObject } from 'react';

export type ScrollFadeInDirection = 'up' | 'down' | 'left' | 'right';

export interface UseScrollFadeInResult<T extends HTMLElement> {
  ref: RefObject<T>;
  style: CSSProperties;
}

const directionToTransform: Record<ScrollFadeInDirection, string> = {
  up: 'translate3d(0, 50%, 0)',
  down: 'translate3d(0, -50%, 0)',
  left: 'translate3d(50%, 0, 0)',
  right: 'translate3d(-50%, 0, 0)',
};

/**
 * Fades an element in (and slides it from a direction) when it enters the viewport.
 *
 * @param direction Where the element slides in from. Defaults to `'up'`.
 * @param duration  Animation duration in seconds. Defaults to `1`.
 * @param delay     Delay before the animation starts, in seconds. Defaults to `0`.
 * @returns Spread props (`ref`, `style`) — apply to the target element via `<div {...result} />`.
 */
export function useScrollFadeIn<T extends HTMLElement = HTMLDivElement>(
  direction: ScrollFadeInDirection = 'up',
  duration = 1,
  delay = 0,
): UseScrollFadeInResult<T> {
  const element = useRef<T>(null);

  const onScroll = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      const { current } = element;
      if (current && entry?.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration],
  );

  useEffect(() => {
    const target = element.current;
    if (!target) return;
    const observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: directionToTransform[direction] },
  };
}

export default useScrollFadeIn;

import { useRef, useEffect, useCallback, type CSSProperties, type RefObject } from 'react';

export type ScrollClipPathDirection = 'up' | 'down' | 'left' | 'right';

export interface UseScrollClipPathResult<T extends HTMLElement> {
  ref: RefObject<T>;
  style: CSSProperties;
}

const directionToClipPath: Record<ScrollClipPathDirection, string> = {
  up: 'inset(100% 0 0 0)',
  down: 'inset(0 0 100% 0)',
  left: 'inset(0 100% 0 0)',
  right: 'inset(0 0 0 100%)',
};

/**
 * Reveals an element with a directional clip-path animation when its parent enters the viewport.
 *
 * The hook observes the **parent node** of the ref'd element, so it must be wrapped in a container.
 *
 * @param direction Direction the clip-path opens from. Defaults to `'left'`.
 * @param duration  Animation duration in seconds. Defaults to `1`.
 * @param delay     Delay before the animation starts, in seconds. Defaults to `0`.
 * @returns Spread props (`ref`, `style`) — apply to the target element via `<div {...result} />`.
 */
export function useScrollClipPath<T extends HTMLElement = HTMLDivElement>(
  direction: ScrollClipPathDirection = 'left',
  duration = 1,
  delay = 0,
): UseScrollClipPathResult<T> {
  const element = useRef<T>(null);

  const onScroll = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      const { current } = element;
      if (current && entry?.isIntersecting) {
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
    const target = element.current?.parentElement;
    if (!target) return;
    const observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
    observer.observe(target);
    return () => observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      transform: 'scale(1.2)',
      clipPath: directionToClipPath[direction],
    },
  };
}

export default useScrollClipPath;

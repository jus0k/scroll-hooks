import { useRef, useEffect, useCallback, type RefObject } from 'react';

export interface UseScrollCountResult<T extends HTMLElement> {
  ref: RefObject<T>;
}

/**
 * Counts up from `start` to `end` over `duration` seconds when the element enters the viewport.
 *
 * The hook writes the current number into `ref.current.innerText`, so apply it to a
 * text-bearing element (e.g. `<span>`, `<div>`).
 *
 * @param end      Final value the counter reaches. Required.
 * @param start    Starting value. Defaults to `0`.
 * @param duration Total animation length, in seconds. Defaults to `3`.
 * @returns Spread props (`ref`) — apply to the target element via `<span {...result}>0</span>`.
 */
export function useScrollCount<T extends HTMLElement = HTMLSpanElement>(
  end: number,
  start = 0,
  duration = 3,
): UseScrollCountResult<T> {
  const element = useRef<T>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const onScroll = useCallback<IntersectionObserverCallback>(
    ([entry]) => {
      const { current } = element;
      if (!current || !entry?.isIntersecting) return;

      // Edge case: nothing to animate.
      if (end === start) {
        current.innerText = String(end);
        observer.current?.disconnect();
        return;
      }

      const totalSteps = Math.abs(end - start);
      const stepTime = Math.max(1, Math.floor((duration * 1000) / totalSteps));
      const direction = end > start ? 1 : -1;
      let currentNumber = start;

      const counter = window.setInterval(() => {
        currentNumber += direction;
        current.innerText = String(currentNumber);
        if (currentNumber === end) {
          window.clearInterval(counter);
          observer.current?.disconnect();
        }
      }, stepTime);
    },
    [end, start, duration],
  );

  useEffect(() => {
    const target = element.current;
    if (!target) return;
    observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
    observer.current.observe(target);
    return () => observer.current?.disconnect();
  }, [onScroll]);

  return { ref: element };
}

export default useScrollCount;

'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  readonly end: number;
  readonly duration?: number;
  readonly suffix?: string;
  readonly prefix?: string;
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
}: Readonly<CountUpProps>) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const startValue = 0;

          const animate = (currentTime: number) => {
            startTime ??= currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutQuart)
            const easeOut = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOut * (end - startValue) + startValue);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

import { useEffect, useRef, useState } from 'react';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Retorna [ref, visível] — dispara uma única vez quando o elemento entra na tela. */
export function useInView(options = { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

/** Parallax discreto: desloca o elemento em `strength` px conforme o scroll. */
export function useParallax(strength = 30) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      // progresso de -1 (abaixo da tela) a 1 (acima da tela)
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      el.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}

/** Contador animado de 0 até `target` quando `start` for true. */
export function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

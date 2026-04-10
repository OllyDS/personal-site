import type { Action } from 'svelte/action';

/**
 * Fades an element up into view once it enters the viewport.
 * Uses a single shared IntersectionObserver for all reveal targets.
 * Respects `prefers-reduced-motion` and falls back gracefully if
 * IntersectionObserver is unavailable.
 */
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (sharedObserver) return sharedObserver;
  if (!('IntersectionObserver' in window)) return null;

  sharedObserver = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.05, rootMargin: '0px 0px -10px 0px' },
  );
  return sharedObserver;
}

export const reveal: Action<HTMLElement> = (node) => {
  node.classList.add('reveal');

  // Skip animation entirely for users who prefer reduced motion.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    node.classList.add('visible');
    return;
  }

  const observer = getObserver();
  if (!observer) {
    node.classList.add('visible');
    return;
  }

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
};

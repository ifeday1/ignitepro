import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Site-wide scroll animation: top-level sections and the items of any grid
// inside them fade and slide up as they enter the viewport. Elements already
// animated by framer-motion (inline opacity/transform) are left alone.
const STAGGER_MS = 90;

const alreadyAnimated = (el) => /opacity|transform/.test(el.getAttribute('style') || '');

const ScrollReveal = ({ children }) => {
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );

    // Each element animates once, even if React later rewrites its className.
    const seen = new WeakSet();
    const register = (el, delay = 0) => {
      if (seen.has(el) || alreadyAnimated(el)) return;
      seen.add(el);
      el.classList.add('reveal');
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
      observer.observe(el);
    };

    const scan = () => {
      const page = root.firstElementChild;
      if (!page) return;

      const sections = [...root.querySelectorAll('section')].filter(
        (s) => !s.parentElement.closest('section'),
      );
      const blocks = sections.length ? sections : [...page.children];
      blocks.forEach((block) => register(block));

      root.querySelectorAll('.grid').forEach((grid) => {
        [...grid.children].forEach((item, i) =>
          register(item, (i % 4) * STAGGER_MS),
        );
      });
    };

    scan();
    // Pages render some content later (data, images, toggled views).
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return <main ref={rootRef}>{children}</main>;
};

export default ScrollReveal;

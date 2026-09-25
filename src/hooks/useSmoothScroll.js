import { useEffect } from 'react';

// Botones y links de navegación: scroll suave hacia la sección (logo, nav, CTA, footer)
export default function useSmoothScroll() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      const id = link.getAttribute('href');
      const target = id.length > 1 ? document.querySelector(id) : null;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior = reduce ? 'auto' : 'smooth';

      if (target) {
        target.scrollIntoView({ behavior, block: 'start' });
      } else if (id === '#') {
        window.scrollTo({ top: 0, behavior });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

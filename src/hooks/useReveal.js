import { useEffect } from 'react';

// Aparición al hacer scroll: agrega la clase "in" a los elementos con [data-anim]
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-anim]');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

// Marca que hay JS activo para que el CSS oculte los [data-anim] antes de animarlos
document.documentElement.classList.add('js');

// Aparición al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('[data-anim]');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  els.forEach(function (e) { io.observe(e); });
});

// Evita que quede el cursor (caret) parpadeando en una letra al hacer clic.
// La selección arrastrando sigue funcionando; solo se limpia si queda colapsada.
function clearCaret() {
  var sel = window.getSelection();
  if (sel && sel.rangeCount && sel.isCollapsed) sel.removeAllRanges();
}
document.addEventListener('mouseup', clearCaret);
document.addEventListener('touchend', function () { setTimeout(clearCaret, 0); });
document.addEventListener('selectionchange', clearCaret);

// Botones y links de navegación: scroll suave hacia la sección (logo, nav, CTA, footer)
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;

  e.preventDefault();
  var id = link.getAttribute('href');
  var target = id.length > 1 ? document.querySelector(id) : null;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var behavior = reduce ? 'auto' : 'smooth';

  if (target) {
    target.scrollIntoView({ behavior: behavior, block: 'start' });
  } else if (id === '#') {
    window.scrollTo({ top: 0, behavior: behavior });
  }
});

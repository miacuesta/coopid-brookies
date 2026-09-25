import { useEffect } from 'react';

// Evita que quede el cursor (caret) parpadeando en una letra al hacer clic.
// La selección arrastrando sigue funcionando; solo se limpia si queda colapsada.
export default function useClearCaret() {
  useEffect(() => {
    const clearCaret = () => {
      const sel = window.getSelection();
      if (sel && sel.rangeCount && sel.isCollapsed) sel.removeAllRanges();
    };
    const onTouchEnd = () => setTimeout(clearCaret, 0);

    document.addEventListener('mouseup', clearCaret);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('selectionchange', clearCaret);
    return () => {
      document.removeEventListener('mouseup', clearCaret);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('selectionchange', clearCaret);
    };
  }, []);
}

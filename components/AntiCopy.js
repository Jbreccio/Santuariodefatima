import { useEffect } from 'react';

const AntiCopy = () => {
  useEffect(() => {
    // 🔥 BLOQUEIA CLIQUE DIREITO
    const blockRightClick = (e) => {
      e.preventDefault();
      alert('Menu de contexto bloqueado por segurança');
      return false;
    };

    // 🔥 BLOQUEIA SELEÇÃO DE TEXTO
    const blockTextSelection = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    };

    // 🔥 BLOQUEIA COPY/PASTE
    const blockCopyPaste = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        alert('Copiar/colar bloqueado por segurança');
        return false;
      }
    };

    // 🔥 BLOQUEIA DRAG DE IMAGENS
    const blockImageDrag = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // ADICIONA OS EVENT LISTENERS
    document.addEventListener('contextmenu', blockRightClick);
    document.addEventListener('selectstart', blockTextSelection);
    document.addEventListener('copy', blockCopyPaste);
    document.addEventListener('cut', blockCopyPaste);
    document.addEventListener('paste', blockCopyPaste);
    document.addEventListener('dragstart', blockImageDrag);

    return () => {
      // REMOVE OS EVENT LISTENERS
      document.removeEventListener('contextmenu', blockRightClick);
      document.removeEventListener('selectstart', blockTextSelection);
      document.removeEventListener('copy', blockCopyPaste);
      document.removeEventListener('cut', blockCopyPaste);
      document.removeEventListener('paste', blockCopyPaste);
      document.removeEventListener('dragstart', blockImageDrag);
    };
  }, []);

  return null;
};

export default AntiCopy;
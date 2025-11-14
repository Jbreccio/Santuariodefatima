// components/Security.js
import { useEffect } from 'react';

const Security = () => {
  useEffect(() => {
    // Proteções básicas de segurança
    const enableBasicProtections = () => {
      if (typeof window === 'undefined') return;

      // Bloqueio de clique direito
      const blockRightClick = (e) => {
        e.preventDefault();
        return false;
      };

      // Bloqueio de teclas de desenvolvedor
      const blockDevKeys = (e) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.key === 'U')) {
          e.preventDefault();
          return false;
        }
      };

      // Bloqueio de seleção de texto
      const blockTextSelection = (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          return false;
        }
      };

      // Adiciona event listeners
      document.addEventListener('contextmenu', blockRightClick);
      document.addEventListener('keydown', blockDevKeys);
      document.addEventListener('selectstart', blockTextSelection);

      return () => {
        document.removeEventListener('contextmenu', blockRightClick);
        document.removeEventListener('keydown', blockDevKeys);
        document.removeEventListener('selectstart', blockTextSelection);
      };
    };

    const cleanup = enableBasicProtections();
    return cleanup;
  }, []);

  return null; // Componente invisível
};

export default Security;
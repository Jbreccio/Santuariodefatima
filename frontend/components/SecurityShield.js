import { useEffect } from 'react';
import ReactShield from '../utils/reactShield';
import BlinderProtocol from '../utils/blinderProtocol';

const SecurityShield = ({ children }) => {
  useEffect(() => {
    // 🛡️ ATIVA TODAS AS PROTEÇÕES AVANÇADAS
    ReactShield.enableInspectionProtection();
    BlinderProtocol.enableConsoleProtection();
    BlinderProtocol.enableDevToolsDetection();

    // 🛡️ BLOQUEIO DE DEBUGGING
    const debugCheck = setInterval(() => {
      (function() {
        return false;
      }['constructor']('debugger')['call']());
    }, 5000);

    return () => {
      clearInterval(debugCheck);
    };
  }, []);

  return (
    <div data-shield="active" data-version="advanced">
      {children}
    </div>
  );
};

export default SecurityShield;
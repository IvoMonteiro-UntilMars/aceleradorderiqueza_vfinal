import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'desktop';

export function useDeviceType(): DeviceType {
  const getDeviceType = (): DeviceType => {
    // Ajustado para melhor suporte a dispositivos como S24
    const width = window.innerWidth;
    return width <= 820 ? 'mobile' : 'desktop';
  };

  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType);

  useEffect(() => {
    let timeoutId: number;

    const handleResize = () => {
      // Debounce para evitar múltiplas atualizações
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const newType = getDeviceType();
        setDeviceType(prev => prev !== newType ? newType : prev);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return deviceType;
}
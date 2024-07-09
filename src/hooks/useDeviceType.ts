import { useEffect, useState } from 'react';

export enum DeviceType {
  desktop = 'DESKTOP',
  tablet = 'TABLET',
  mobile = 'MOBILE',
}

const getDeviceType = (width: number) => {
  if (width < 640) {
    return DeviceType.mobile;
  } else if (width < 1024) {
    return DeviceType.tablet;
  } else {
    return DeviceType.desktop;
  }
};

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.desktop);

  useEffect(() => {
    const handleResize = () => {
      const currentDeviceType = getDeviceType(window.innerWidth);
      setDeviceType(currentDeviceType);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;

import { useState, useEffect } from 'react';
import debounce from 'debounce';

export default useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: null,
    height: null,
  });

  const updateScreenSize = debounce(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 17);

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return screenSize;
};

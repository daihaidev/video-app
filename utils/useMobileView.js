import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';

const useMobileView = () => {
  const [mobileView, setMobileView] = useState(false);
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    if (windowWidth <= 540) setMobileView(true);
    else setMobileView(false);
  }, [windowWidth, windowHeight]);

  return mobileView;
}

export default useMobileView;

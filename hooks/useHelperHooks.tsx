import React, { useState } from 'react';
import { useEffect } from 'react';

//custom hook for window scroll
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
};

//custom hook for window width
export const useWidthPosition = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const getWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', getWidth);

    getWidth();

    return () => window.removeEventListener('resize', getWidth);
  }, []);
  return windowWidth;
};

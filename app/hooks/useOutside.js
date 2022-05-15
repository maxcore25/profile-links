import { useState, useRef, useEffect } from 'react';

export const useOutside = initialIsVisible => {
  const [isShown, setIsShown] = useState(initialIsVisible);
  const ref = useRef();

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setIsShown(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isShown, setIsShown };
};

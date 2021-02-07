import { useCallback, useEffect, useState } from 'react';

export const useSize = (size: string, { sm, md, lg }) => {
  const [s, setS] = useState(md);

  const setSize = useCallback(() => {
    switch (size) {
      case 'sm':
        setS(sm);
        break;
      case 'lg':
        setS(lg);
        break;
      default:
        setS(md);
    }
  }, [sm, md, lg, setS, size]);

  useEffect(() => {
    setSize();
  }, [setSize]);

  return s;
};

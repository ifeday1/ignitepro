import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

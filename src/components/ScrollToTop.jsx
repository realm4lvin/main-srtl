import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // 1. Disable browser's default scroll restoration on page reload/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Force instant scroll to top on route change or refresh
  useLayoutEffect(() => {
    const scrollToTopNow = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      const rootDiv = document.getElementById('root');
      if (rootDiv) {
        rootDiv.scrollTop = 0;
      }
    };

    // Instant execution
    scrollToTopNow();

    // Fallbacks to handle image load height shifts on Home and About pages
    const timer1 = setTimeout(scrollToTopNow, 10);
    const timer2 = setTimeout(scrollToTopNow, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
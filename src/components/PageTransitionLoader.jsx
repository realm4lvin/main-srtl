import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransitionLoader = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Instantly scroll to the top of the new page
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Start loading
    const startTimer = setTimeout(() => {
      setLoading(true);
      setProgress(25);
    }, 10);

    // 3. Stagger progress across 1.5 seconds (1500ms)
    const timer1 = setTimeout(() => setProgress(60), 350);   // At 0.35s -> 60%
    const timer2 = setTimeout(() => setProgress(88), 850);   // At 0.85s -> 88%
    const timer3 = setTimeout(() => setProgress(100), 1250); // At 1.25s -> 100%

    // 4. Hide loader at 1.5 seconds
    const timer4 = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 1500); // Total duration: 1.5s

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <>
      {/* 🟢 TOP PROGRESS LOADING BAR */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3.5px',
          backgroundColor: '#2b704a',
          width: `${progress}%`,
          zIndex: 99999,
          // CSS width transition balanced for 1.5s timing
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in-out',
          boxShadow: '0 0 12px #2b704a, 0 0 6px #f4c414'
        }}
      />

      {/* ⚪ SUBTLE PAGE FADE OVERLAY */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(2px)',
          zIndex: 99998,
          pointerEvents: 'none',
          transition: 'opacity 0.25s ease-in-out'
        }}
      />
    </>
  );
};

export default PageTransitionLoader;
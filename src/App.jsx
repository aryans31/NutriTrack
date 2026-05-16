import { useEffect, useRef } from 'react';

function App() {
  const hostRef = useRef(null);

  useEffect(() => {
    let active = true;

    const boot = async () => {
      const templateRes = await fetch('/app-template.html');
      const templateHtml = await templateRes.text();
      if (!active || !hostRef.current) return;

      hostRef.current.innerHTML = templateHtml;

      const { default: NutriTrackApp } = await import('../js/app.js');
      if (!active) return;
      window.app = new NutriTrackApp();
    };

    boot();

    return () => {
      active = false;
      if (window.app) {
        delete window.app;
      }
    };
  }, []);

  return <div ref={hostRef} />;
}

export default App;

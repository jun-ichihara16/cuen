import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-wrap"
      style={{
        position: 'fixed',
        right: 'calc(50% - 280px)',
        top: '20%',
        height: '60%',
        width: '1px',
        backgroundColor: 'rgba(0, 104, 117, 0.12)',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${progress}%`,
          backgroundColor: 'var(--cuen-teal, #006875)',
          transition: 'height 0.1s linear',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: `${progress}%`,
          transform: 'translate(-50%, -50%)',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: 'var(--cuen-teal, #006875)',
          transition: 'top 0.1s linear',
        }}
      />
    </div>
  );
}

import { useEffect, useState } from "react";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  // 0: グラデーションのみ (0〜600ms)
  // 1: Cマーク部分が中央にフェードイン (600ms〜)
  // 2: Cが左スライド + UEN出現 (1400ms〜)
  // 3: フェードアウト (2400ms〜)
  // 4: 完了 (3200ms〜)

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 600);
    const t1 = setTimeout(() => setPhase(2), 1400);
    const t2 = setTimeout(() => setPhase(3), 2400);
    const t3 = setTimeout(() => { setPhase(4); onComplete(); }, 3200);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase >= 4) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #006875 0%, #004f5c 25%, #1a7a8a 50%, #C8614A 65%, #005f6e 80%, #006875 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 16s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase >= 3 ? 0 : 1,
        transform: phase >= 3 ? "scale(0.97)" : "scale(1)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        pointerEvents: "none",
      }}
    >
      {/* Grain */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.12,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat", backgroundSize: "128px 128px", mixBlendMode: "overlay",
      }} />

      {/* Logo — 1枚画像 clip-path 方式 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          transform: phase >= 2 ? "translateX(0)" : "translateX(33%)",
          transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <img
          src="/cuen-logo-white.png"
          alt="CUEN"
          style={{
            height: "64px",
            width: "auto",
            display: "block",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.85)",
            clipPath: phase >= 2 ? "inset(0 0 0 0)" : "inset(0 67% 0 0)",
            transition: "opacity 0.6s ease, transform 0.6s ease, clip-path 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}

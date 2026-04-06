import { useEffect, useState } from "react";

const C_LOGO = "/favicon.png";

export default function IntroAnimation() {
  const [phase, setPhase] = useState(0);
  // phase 0: 初期（白画面）
  // phase 1: Cマーク フェードイン (0ms→)
  // phase 2: UEN スライドイン (800ms→)
  // phase 3: 全体フェードアウト (2000ms→)
  // phase 4: 完全非表示 (2800ms→)

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 100);
    const t1 = setTimeout(() => setPhase(2), 800);
    const t2 = setTimeout(() => setPhase(3), 2000);
    const t3 = setTimeout(() => setPhase(4), 2800);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase >= 4) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase >= 3 ? 0 : 1,
        transform: phase >= 3 ? "scale(0.96)" : "scale(1)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Cマーク */}
        <img
          src={C_LOGO}
          alt=""
          style={{
            height: "56px",
            width: "auto",
            display: "block",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.8)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        />

        {/* UEN テキスト */}
        <div
          style={{
            overflow: "hidden",
            width: phase >= 2 ? "180px" : "0px",
            transition: "width 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "52px",
              fontWeight: 700,
              color: "#006875",
              letterSpacing: "0.04em",
              display: "block",
              whiteSpace: "nowrap",
              paddingLeft: "4px",
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateX(0)" : "translateX(24px)",
              transition: "opacity 0.5s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            UEN
          </span>
        </div>
      </div>
    </div>
  );
}

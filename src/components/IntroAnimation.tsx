import { useEffect, useState } from "react";

const C_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/CUEN_C_logo_71e873ae.webp";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"c-in" | "uen-in" | "out" | "done">("c-in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("uen-in"), 600);
    const t2 = setTimeout(() => setPhase("out"), 1800);
    const t3 = setTimeout(() => { setPhase("done"); onComplete(); }, 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #006875, #C8614A, #F5F0E8, #2A2A2A, #006875)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 12s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.7s ease, transform 0.7s ease" : "none",
        transform: phase === "out" ? "scale(0.97)" : "scale(1)",
        pointerEvents: "none",
      }}
    >
      {/* Grain overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.12,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat", backgroundSize: "128px 128px", mixBlendMode: "overlay",
      }} />

      <div style={{ display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}>
        <div style={{
          opacity: phase === "c-in" ? 0 : 1,
          transform: phase === "c-in" ? "scale(0.85)" : "scale(1)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          transitionDelay: "0.05s",
        }}>
          <img src={C_LOGO} alt="" style={{ height: "64px", width: "auto", display: "block" }} />
        </div>

        <div style={{
          overflow: "hidden",
          maxWidth: phase === "uen-in" || phase === "out" ? "280px" : "0px",
          opacity: phase === "uen-in" || phase === "out" ? 1 : 0,
          transition: "max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
        }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "60px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.04em",
            display: "block",
            whiteSpace: "nowrap",
            paddingLeft: "6px",
            transform: phase === "uen-in" || phase === "out" ? "translateX(0)" : "translateX(20px)",
            transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
          }}>
            UEN
          </span>
        </div>
      </div>
    </div>
  );
}

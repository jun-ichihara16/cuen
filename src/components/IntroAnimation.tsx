import { useEffect, useState } from "react";

const C_LOGO = "/favicon.png";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"c-in" | "uen-in" | "out" | "done">("c-in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("uen-in"), 600);
    const t2 = setTimeout(() => setPhase("out"), 1800);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === "done") return null;

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
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.7s ease, transform 0.7s ease" : "none",
        transform: phase === "out" ? "scale(0.97)" : "scale(1)",
        pointerEvents: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
        {/* Cマーク */}
        <div
          style={{
            opacity: phase === "c-in" ? 0 : 1,
            transform: phase === "c-in" ? "scale(0.85)" : "scale(1)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: "0.05s",
          }}
        >
          <img src={C_LOGO} alt="" style={{ height: "56px", width: "auto", display: "block" }} />
        </div>

        {/* UEN テキスト */}
        <div
          style={{
            overflow: "hidden",
            maxWidth: phase === "uen-in" || phase === "out" ? "240px" : "0px",
            opacity: phase === "uen-in" || phase === "out" ? 1 : 0,
            transition: "max-width 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
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
              paddingLeft: "6px",
              transform: phase === "uen-in" || phase === "out" ? "translateX(0)" : "translateX(20px)",
              transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            UEN
          </span>
        </div>
      </div>
    </div>
  );
}

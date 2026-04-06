import { useEffect, useState, useRef } from "react";

const C_LOGO = "/favicon.png";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"idle" | "c-in" | "uen-in" | "out" | "done">("idle");
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Start immediately
    requestAnimationFrame(() => setPhase("c-in"));

    // Phase 1: 600ms — Cマーク表示完了、UENスライドイン開始
    const t1 = setTimeout(() => setPhase("uen-in"), 600);

    // Phase 2: 1800ms — 全体フェードアウト開始
    const t2 = setTimeout(() => setPhase("out"), 1800);

    // Phase 3: 2500ms — 完了
    const t3 = setTimeout(() => {
      setPhase("done");
      onCompleteRef.current();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []); // 空の依存配列 — マウント時に1回だけ実行

  if (phase === "done") return null;

  const showC = phase === "c-in" || phase === "uen-in" || phase === "out";
  const showUEN = phase === "uen-in" || phase === "out";
  const isOut = phase === "out";

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
        opacity: isOut ? 0 : 1,
        transition: isOut ? "opacity 0.7s ease, transform 0.7s ease" : "none",
        transform: isOut ? "scale(0.97)" : "scale(1)",
        pointerEvents: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0px" }}>
        {/* Cマーク — フェードイン */}
        <div
          style={{
            opacity: showC ? 1 : 0,
            transform: showC ? "scale(1)" : "scale(0.85)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <img src={C_LOGO} alt="" style={{ height: "56px", width: "auto", display: "block" }} />
        </div>

        {/* UEN テキスト — 右からスライドイン */}
        <div
          style={{
            overflow: "hidden",
            maxWidth: showUEN ? "240px" : "0px",
            opacity: showUEN ? 1 : 0,
            transition: "max-width 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
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
              transform: showUEN ? "translateX(0)" : "translateX(20px)",
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            UEN
          </span>
        </div>
      </div>
    </div>
  );
}

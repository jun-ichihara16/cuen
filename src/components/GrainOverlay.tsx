export default function GrainOverlay() {
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="grain-cta">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          filter: "url(#grain-cta)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </>
  );
}

export default function SideLabel() {
  return (
    <div
      className="side-label-wrap"
      style={{
        position: 'fixed',
        left: 'calc(50% - 280px)',
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        fontSize: '10px',
        letterSpacing: '0.25em',
        color: 'var(--cuen-teal, #006875)',
        opacity: 0.35,
        fontFamily: "'DM Sans', sans-serif",
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      CUEN — 合同会社
    </div>
  );
}

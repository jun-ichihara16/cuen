export default function SideMotif() {
  return (
    <div
      className="side-motif-wrap"
      style={{
        position: 'fixed',
        right: 'calc(50% - 260px)',
        bottom: '15%',
        pointerEvents: 'none',
        opacity: 0.06,
        zIndex: 50,
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M16 4 L4 4 L4 16" stroke="#006875" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M32 44 L44 44 L44 32" stroke="#006875" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

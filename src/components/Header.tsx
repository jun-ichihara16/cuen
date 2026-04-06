import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const CUEN_LOGO = "/cuen-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navItems = [
    { href: "/about", label: "CUENについて" },
    { href: "/service", label: "サービス" },
    { href: "/company", label: "会社概要" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src={CUEN_LOGO} alt="CUEN" style={{ height: "36px", width: "auto", display: "block" }} />
        </Link>

        <nav style={{ display: "flex", gap: "40px", alignItems: "center" }} className="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link" style={{ color: location === item.href ? "#006875" : "var(--cuen-charcoal)" }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" style={{ background: "var(--cuen-teal)", color: "#ffffff", fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontWeight: 700, fontSize: "13px", padding: "8px 20px", borderRadius: "100px", textDecoration: "none", whiteSpace: "nowrap", transition: "background 0.2s ease" }}>
            無料相談
          </Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", flexDirection: "column", gap: "5px" }} aria-label="メニュー">
          <span style={{ display: "block", width: "22px", height: "1px", background: "var(--cuen-charcoal)", transition: "transform 0.3s ease", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "1px", background: "var(--cuen-charcoal)", transition: "opacity 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "1px", background: "var(--cuen-charcoal)", transition: "transform 0.3s ease", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "24px" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{ display: "block", padding: "14px 0", borderBottom: "1px solid rgba(0,0,0,0.06)", fontSize: "15px", color: location === item.href ? "#006875" : "var(--cuen-charcoal)", textDecoration: "none", letterSpacing: "0.04em" }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        .mobile-nav { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-nav { display: block !important; }
        }
      `}</style>
    </header>
  );
}

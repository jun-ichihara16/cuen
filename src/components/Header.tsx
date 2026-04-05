import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
        borderBottom: scrolled ? "1px solid #E8E6E1" : "1px solid transparent",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        className="cuen-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <img
            src="/cuen-logo.png"
            alt="CUEN"
            style={{
              height: "36px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                color: location === item.href ? "#006875" : "#1A1A1A",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-cuen" style={{ padding: "8px 20px", fontSize: "13px" }}>
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="メニュー"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "#1A1A1A",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "#1A1A1A",
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              background: "#1A1A1A",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-nav"
          style={{
            background: "#ffffff",
            borderTop: "1px solid #E8E6E1",
            padding: "24px",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                padding: "14px 0",
                borderBottom: "1px solid #F0EEEA",
                fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif",
                fontSize: "15px",
                color: location === item.href ? "#006875" : "#1A1A1A",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
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

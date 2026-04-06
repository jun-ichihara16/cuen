import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E8E6E1",
        backgroundColor: "#ffffff",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
    >
      <div className="cuen-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {/* Brand */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <img
                  src="/cuen-logo.png"
                  alt="CUEN"
                  className="footer-logo"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Link>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "13px",
                  color: "#9E9B95",
                  lineHeight: 1.6,
                  maxWidth: "240px",
                }}
              >
                人と人のあいだにある可能性に気づき、
                <br />
                前向きな変化のキッカケを生み出し続ける。
              </p>
            </div>

            {/* Nav */}
            <nav
              style={{
                display: "flex",
                gap: "32px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { href: "/about", label: "About" },
                { href: "/service", label: "Service" },
                { href: "/company", label: "Company" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif",
                    fontSize: "13px",
                    color: "#6B6B6B",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#006875")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B6B")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "#E8E6E1" }} />

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: "#9E9B95",
                letterSpacing: "0.08em",
              }}
            >
              &copy; 2026 CUEN LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .footer-logo { height: 128px; }
        @media (max-width: 768px) {
          .footer-logo { height: 80px; }
        }
      `}</style>
    </footer>
  );
}

import { Link } from "wouter";

const CUEN_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/CUEN_logo_1f6a8884.webp";

export default function Footer() {
  return (
    <footer style={{ padding: "48px 20px", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src={CUEN_LOGO} alt="CUEN" style={{ height: "22px", width: "auto", display: "block" }} />
        </Link>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "300px" }}>
          人と人のあいだにある可能性に気づき、<br />前向きな変化のキッカケを生み出し続ける。
        </p>
        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { href: "/about", label: "About" },
            { href: "/service", label: "Service" },
            { href: "/company", label: "Company" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "10px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
          &copy; 2026 CUEN LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

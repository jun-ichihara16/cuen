import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="content-card">
        <section style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px", textAlign: "center" }}>
          <div>
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "14px", letterSpacing: "0.14em", color: "#006875", textTransform: "uppercase" }}>404</span>
            <h1 style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, margin: "16px 0 24px" }}>Page Not Found</h1>
            <p style={{ fontSize: "15px", color: "#666", marginBottom: "40px" }}>お探しのページは見つかりませんでした。</p>
            <Link href="/" className="btn-cuen">
              <span>ホームに戻る</span>
              <span className="btn-arrow" aria-hidden="true">
                <svg width="16" height="9" viewBox="0 0 18 10" fill="none">
                  <path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

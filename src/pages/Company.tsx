import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";

export default function Company() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const companyInfo = [
    { label: "社名", value: "合同会社CUEN" },
    { label: "英語表記", value: "CUEN LLC" },
    { label: "設立", value: "2024年9月" },
    { label: "代表社員", value: "市原 純" },
    { label: "所在地", value: "東京都目黒区" },
    { label: "事業内容", value: "マーケティング戦略・ブランド戦略の企画及び運営 / SNSプラットフォームの企画及び管理運営 / 企業イベント・展示会・セミナーの企画及び管理運営 / 各種プロジェクトのコンサルティング及び管理運営 / 飲食店・カフェ等の経営" },
  ];

  return (
    <>
      <Header />
      <div className="content-card">

        <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
          <div className="cuen-container">
            <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Company</div>
            <div className="fade-up fade-up-delay-1" style={{ margin: "0 0 24px 0" }}>
              <img
                src="/cuen-logo.png"
                alt="合同会社CUEN"
                style={{ width: "clamp(140px, 28vw, 220px)", height: "auto", display: "block" }}
              />
            </div>
            <p className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8, maxWidth: "520px", margin: 0 }}>人と人のあいだにある可能性に気づき、事業と人との関係性を前進させるキッカケを生み出す会社です。</p>
          </div>
        </section>

        <section style={{ padding: "40px 0 120px" }}>
          <div className="cuen-container">
            <div style={{ maxWidth: "800px" }}>
              <div className="section-label fade-up" style={{ marginBottom: "40px" }}>Company Overview</div>
              <table className="fade-up fade-up-delay-1" style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {companyInfo.map((item, i) => (
                    <tr key={item.label} style={{ borderTop: i === 0 ? "1px solid #E8E6E1" : "none", borderBottom: "1px solid #E8E6E1" }}>
                      <th style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "#9E9B95", textTransform: "uppercase", fontWeight: 400, textAlign: "left", padding: "24px 40px 24px 0", verticalAlign: "top", whiteSpace: "nowrap", width: "100px" }}>{item.label}</th>
                      <td style={{ fontFamily: "'Zen Kaku Gothic New', 'Space Grotesk', sans-serif", fontSize: "15px", color: "var(--cuen-charcoal)", padding: "24px 0", lineHeight: 1.85, verticalAlign: "top" }}>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--cuen-teal)", borderRadius: "24px", margin: "0 16px 60px", padding: "48px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <GrainOverlay />
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(200,97,74,0.25)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(200,97,74,0.15)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 className="fade-up" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 700, lineHeight: 1.4, color: "#fff", margin: "0 0 16px 0", wordBreak: "keep-all" }}>まずは、現状のモヤモヤを<br />お聞かせください。</h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", margin: "0 0 32px 0", lineHeight: 1.7 }}>「何から手をつければいいか分からない」<br />という状態でも構いません。<br />あなたの想いを聞かせていただくところから<br />始めます。</p>
            <a href="/contact" className="fade-up fade-up-delay-2" style={{ display: "inline-block", background: "var(--cuen-terracotta)", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "14px 36px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 16px rgba(200,97,74,0.4)" }}>
              お問い合わせはこちら
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    { label: "事業内容", value: "マーケティング戦略・ブランド戦略の企画及び運営 / SEO・リスティング広告・コンテンツマーケティングの企画及び運営 / SNSプラットフォームの企画及び管理運営 / 企業イベント・展示会・セミナーの企画及び管理運営 / 各種プロジェクトのコンサルティング及び管理運営 / 飲食店・カフェ・物販店舗・宿泊施設等の経営" },
  ];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Header />

      <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <div className="cuen-container">
          <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Company</div>
          <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 32px 0", lineHeight: 1.2 }}>合同会社<span className="cuen-brand">CUEN</span></h1>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "17px", color: "#6B6B6B", lineHeight: 1.9, maxWidth: "520px", margin: 0 }}>東京・目黒区を拠点に、人と人のあいだにある可能性を事業に変える会社です。</p>
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
                    <th style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "#9E9B95", textTransform: "uppercase", fontWeight: 400, textAlign: "left", padding: "24px 40px 24px 0", verticalAlign: "top", whiteSpace: "nowrap", width: "160px" }}>{item.label}</th>
                    <td style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif", fontSize: "15px", color: "#1A1A1A", padding: "24px 0", lineHeight: 1.85, verticalAlign: "top" }}>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "#006875" }}>
        <div className="cuen-container" style={{ textAlign: "center" }}>
          <h2 className="fade-up" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 400, color: "#ffffff", margin: "0 0 24px 0" }}>まず、話しましょう。</h2>
          <p className="fade-up fade-up-delay-1" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", margin: "0 0 40px 0", lineHeight: 1.85 }}>どんな相談でも、想いを聞かせていただくところから始めます。</p>
          <div className="fade-up fade-up-delay-2">
            <Link href="/contact" className="btn-cuen btn-cuen-white">
              <span>お問い合わせ</span>
              <span className="btn-arrow" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 18 10" fill="none"><path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

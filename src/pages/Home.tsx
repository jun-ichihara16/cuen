import { useEffect, useState, useCallback } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroAnimation from "../components/IntroAnimation";
import GrainOverlay from "../components/GrainOverlay";

const CEO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/jun-ichihara_a82a7119.png";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!introComplete) return;
    const heroEls = document.querySelectorAll(".hero-reveal");
    heroEls.forEach((el, i) => { setTimeout(() => el.classList.add("visible"), 200 + i * 160); });
  }, [introComplete]);

  const services = [
    { num: "01", name: "AI KANJI", desc: "幹事の割り勘・PayPay番号収集・支払いリマインドをLINEで全自動化。AIがすべての面倒を引き受けます。", href: "/service" },
    { num: "02", name: "店舗マーケティング・ブランド戦略・運営支援", desc: "飲食店や宿泊施設の集客強化から、ブランド構築、オペレーション改善まで。経営経験を持つマーケターが現場に入り込み、一気通貫で支援します。", href: "/service" },
    { num: "03", name: "イベント・セミナー企画", desc: "企業イベント・展示会・セミナーの企画から運営まで。参加者の体験設計を重視し、ブランド価値を高め、記憶に残るイベントを実現します。", href: "/service" },
    { num: "04", name: "プロジェクトコンサルティング", desc: "新規事業の立ち上げから既存事業のテコ入れまで。戦略を描くだけでなく、チームを巻き込みながらプロジェクトを最後まで推進します。", href: "/service" },
  ];

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <Header />
      <div style={{ opacity: introComplete ? 1 : 0, transition: "opacity 0.5s ease", transitionDelay: "0.1s" }}>
        {/* White Card */}
        <div className="content-card">

          {/* ── Hero ── */}
          <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "72px" }}>
            <div className="cuen-container" style={{ position: "relative", zIndex: 1, paddingTop: "80px", paddingBottom: "120px" }}>
              <div style={{ maxWidth: "640px" }}>
                <h1 className="hero-reveal" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(36px, 8vw, 72px)", fontWeight: 900, color: "var(--cuen-charcoal)", lineHeight: 1.15, margin: "0 0 24px 0", letterSpacing: "-0.02em" }}>
                  つながりを、もっとラクに。<br />もっと楽しく。
                </h1>
                <p className="hero-reveal" style={{ fontFamily: "'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 400, color: "#555555", lineHeight: 1.8, margin: "0 0 40px 0", maxWidth: "480px" }}>
                  人と集まることが好きな人の、めんどくさいをなくします。
                </p>
                <div className="hero-reveal" style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                  <Link href="/service" className="btn-cuen btn-cuen-filled">
                    <span>サービスを見る</span>
                    <span className="btn-arrow" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 18 10" fill="none"><path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  </Link>
                  <Link href="/contact" className="btn-cuen">
                    <span>お問い合わせ</span>
                    <span className="btn-arrow" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 18 10" fill="none"><path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Our Philosophy ── */}
          <section style={{ padding: "120px 0", background: "var(--cuen-offwhite)" }}>
            <div className="cuen-container">
              <div style={{ maxWidth: "720px" }}>
                <div className="section-label fade-up" style={{ marginBottom: "40px" }}>Our Philosophy</div>
                <p className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: "0 0 32px 0" }}>
                  <span className="cuen-brand">CUEN</span>は、人と人のあいだにある可能性に気づき、前向きな変化のキッカケを生み出し続けます。
                </p>
                <p className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "#555", lineHeight: 1.9, margin: "0 0 40px 0" }}>
                  数字や効率だけでは、ビジネスは動かない。私たちは、現場で働く一人ひとりの想いや関係性を紐解き、「なぜ売れないのか」「どうすれば伝わるのか」という本質的な課題を解決します。
                </p>
                <Link href="/about" className="fade-up fade-up-delay-3" style={{ color: "var(--cuen-teal)", fontSize: "14px", letterSpacing: "0.06em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  CUENについて詳しく <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ── Services ── */}
          <section style={{ padding: "120px 0" }}>
            <div className="cuen-container">
              <div className="fade-up" style={{ marginBottom: "64px" }}>
                <div className="section-label" style={{ marginBottom: "24px" }}>Service</div>
                <h2 style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 700, color: "var(--cuen-charcoal)", margin: 0 }}>
                  現場を動かし、事業を前に進める4つの柱。
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "0", borderTop: "1px solid var(--cuen-border)" }}>
                {services.map((service, i) => (
                  <div key={service.num} className={`fade-up fade-up-delay-${i + 1}`} style={{ padding: "40px 32px", borderBottom: "1px solid var(--cuen-border)", borderRight: "1px solid var(--cuen-border)", transition: "background 0.2s ease", cursor: "pointer" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cuen-offwhite)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    onClick={() => window.location.href = service.href}
                  >
                    <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "var(--cuen-teal)", marginBottom: "16px" }}>{service.num}</div>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--cuen-charcoal)", margin: "0 0 12px 0", lineHeight: 1.4 }}>{service.name}</h3>
                    <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.8, margin: 0 }}>{service.desc}</p>
                  </div>
                ))}
              </div>
              <div className="fade-up" style={{ marginTop: "40px" }}>
                <Link href="/service" className="btn-cuen">
                  <span>すべてのサービスを見る</span>
                  <span className="btn-arrow" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 18 10" fill="none"><path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
              </div>
            </div>
          </section>

          {/* ── CEO Message — vertical stack ── */}
          <section style={{ padding: "80px 0" }}>
            <div className="cuen-container">
              <div style={{ width: "100%", aspectRatio: "16/7", overflow: "hidden", marginBottom: "48px" }} className="fade-up">
                <img src={CEO_IMAGE} alt="市原 純" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(10%)" }} />
              </div>
              <div style={{ maxWidth: "640px", margin: "0 auto" }}>
                <div className="section-label fade-up" style={{ marginBottom: "24px" }}>Message</div>
                <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "var(--cuen-charcoal)", margin: "0 0 32px 0", lineHeight: 1.2 }}>
                  現場を知るからこそ、<br />描ける戦略がある。
                </h2>
                <div className="fade-up fade-up-delay-2" style={{ fontSize: "15px", color: "#666", lineHeight: 1.95 }}>
                  <p style={{ margin: "0 0 20px 0" }}>「なぜ売れないのか」「なぜ伝わらないのか」——その問いを起点に、数多くのビジネスの現場で課題の本質を掘り下げてきました。</p>
                  <p style={{ margin: "0 0 20px 0" }}>私自身、飲食・物販・宿泊施設の経営を経験してきました。だからこそ、机上の空論ではなく、現場が実際に動ける戦略を立て、実行から改善まで泥臭く伴走します。</p>
                  <p style={{ margin: "0 0 32px 0" }}>CUENは、クライアントの想いに気づき、前向きな変化のキッカケを生み出し続けるパートナーでありたいと思っています。</p>
                </div>
                <div className="fade-up fade-up-delay-3">
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 600, color: "var(--cuen-charcoal)", margin: "0 0 4px 0" }}>市原 純</p>
                  <p style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "var(--cuen-muted)", margin: 0 }}>代表社員 / 合同会社CUEN</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section style={{ padding: "120px 0", background: "#004550", position: "relative", overflow: "hidden" }}>
            <GrainOverlay />
            <div className="cuen-container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
              <div className="section-label fade-up" style={{ justifyContent: "center", color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
                <span style={{ background: "rgba(255,255,255,0.4)", width: "24px", height: "1px", display: "inline-block" }} />
                Contact
              </div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 700, color: "#ffffff", margin: "0 0 24px 0", lineHeight: 1.4 }}>
                まずは、現状のモヤモヤをお聞かせください。
              </h2>
              <p className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, margin: "0 0 48px 0" }}>
                「何から手をつければいいか分からない」という状態でも構いません。<br />あなたの想いと現場の課題を聞かせていただくところから、始めます。
              </p>
              <div className="fade-up fade-up-delay-3">
                <Link href="/contact" className="btn-cuen btn-cuen-white">
                  <span>無料相談・お問い合わせ</span>
                  <span className="btn-arrow" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 18 10" fill="none"><path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </Link>
              </div>
            </div>
          </section>

        </div>
        {/* End White Card */}
      </div>
      <Footer />
    </>
  );
}

import { useEffect, useState, useCallback } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroAnimation from "../components/IntroAnimation";
import GrainOverlay from "../components/GrainOverlay";



const ILLUST_CONNECT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/illust_sample_connect-j4KFae9uFrdt9C26FsnRU9.webp";

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
    { num: "02", name: "店舗マーケティング・ブランド戦略・運営支援", desc: "飲食店や宿泊施設の集客強化から、ブランド構築、オペレーション改善まで。", href: "/service" },
    { num: "03", name: "イベント・セミナー企画", desc: "企業イベント・展示会・セミナーの企画から運営まで。記憶に残るイベントを実現します。", href: "/service" },
    { num: "04", name: "プロジェクトコンサルティング", desc: "新規事業の立ち上げから既存事業のテコ入れまで。チームを巻き込みながら推進します。", href: "/service" },
  ];

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "28px 24px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
    border: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const cardHover = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
  };
  const cardLeave = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)";
  };

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <Header />
      <div style={{ opacity: introComplete ? 1 : 0, transition: "opacity 0.5s ease", transitionDelay: "0.1s" }}>

        {/* ── Hero（FV）── グラデーション背景はgradient-bgから連続 */}
        <section style={{ paddingTop: "72px", position: "relative" }}>
          <GrainOverlay />

          {/* テキストコンテンツ */}
          <div className="cuen-container" style={{ paddingTop: "80px", paddingBottom: "40px", position: "relative", zIndex: 2 }}>
            <h1 className="hero-reveal" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, color: "#ffffff", lineHeight: 1.3, margin: "0 0 24px 0", letterSpacing: "-0.01em", wordBreak: "keep-all" }}>
              つながりを、もっとラクに。<br />もっと楽しく。
            </h1>
            <p className="hero-reveal" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: "0 0 40px 0", maxWidth: "480px" }}>
              人と集まることが好きな人の、めんどくさいをなくします。
            </p>
            <div className="hero-reveal" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/service" style={{ display: "inline-block", background: "#ffffff", color: "var(--cuen-teal)", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                サービスを見る
              </Link>
              <Link href="/contact" style={{ display: "inline-block", background: "transparent", color: "#ffffff", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.5)" }}>
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* 動画 — 透過・中央揃え */}
          <div className="hero-reveal" style={{ position: "relative", zIndex: 2, padding: "32px 0 40px", display: "flex", justifyContent: "center" }}>
            <div style={{ width: "min(80%, 400px)" }}>
              <video
                autoPlay loop muted playsInline
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  mixBlendMode: "screen",
                }}
              >
                <source src="/cuen-fv-illust.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <div className="content-card" style={{ position: "relative", zIndex: 3 }}>

          {/* ── Our Philosophy ── */}
          <section style={{ paddingTop: "60px", paddingBottom: "100px", background: "var(--cuen-offwhite)" }}>
            <div className="cuen-container">
              <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Our Philosophy</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: "0 0 24px 0", wordBreak: "keep-all" }}>
                <span className="cuen-brand">CUEN</span>は、<br />人と人のあいだにある<br />可能性に気づき、<br />前向きな変化のキッカケを<br />生み出し続けます。
              </h2>
              <p className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#555", lineHeight: 1.8, margin: "0 0 32px 0" }}>
                数字や効率だけでは、ビジネスは動かない。私たちは、現場で働く一人ひとりの想いや関係性を紐解き、「なぜ売れないのか」「どうすれば伝わるのか」という本質的な課題を解決します。
              </p>
              <Link href="/about" className="fade-up fade-up-delay-3" style={{ color: "var(--cuen-teal)", fontSize: "14px", letterSpacing: "0.06em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                CUENについて詳しく <span>&rarr;</span>
              </Link>
            </div>
          </section>

          {/* ── Services ── */}
          <section style={{ padding: "100px 0" }}>
            <div className="cuen-container">
              <div className="fade-up" style={{ marginBottom: "48px" }}>
                <div className="section-label" style={{ marginBottom: "20px" }}>Service</div>
                <h2 style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: 0 }}>
                  現場を動かし、<br />事業を前に進める4つの柱。
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
                {services.map((s, i) => (
                  <div key={s.num} className={`fade-up fade-up-delay-${i + 1}`} style={cardStyle}
                    onMouseEnter={cardHover} onMouseLeave={cardLeave}
                    onClick={() => window.location.href = s.href}
                  >
                    <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "12px", letterSpacing: "0.12em", color: "var(--cuen-teal)", marginBottom: "12px" }}>{s.num}</div>
                    <h3 style={{ fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 600, color: "var(--cuen-charcoal)", margin: "0 0 10px 0", lineHeight: 1.4 }}>{s.name}</h3>
                    <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="fade-up" style={{ marginTop: "32px" }}>
                <Link href="/service" style={{ color: "var(--cuen-teal)", fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  すべてのサービスを見る <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ── CEO Message ── */}
          <section style={{ padding: "40px 0 80px", position: "relative", overflow: "hidden" }}>
            {/* Cロゴ透かし */}
            <img
              src="/favicon.png"
              alt=""
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "80%",
                width: "auto",
                opacity: 0.04,
                pointerEvents: "none",
              }}
            />
            <div className="cuen-container" style={{ position: "relative", zIndex: 1 }}>
              <div className="section-label fade-up" style={{ marginBottom: "20px" }}>Message</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: "0 0 24px 0", wordBreak: "keep-all" }}>
                現場を知るからこそ、<br />描ける戦略がある。
              </h2>
              <div className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8 }}>
                <p style={{ margin: "0 0 16px 0" }}>「なぜ売れないのか」「なぜ伝わらないのか」——その問いを起点に、数多くのビジネスの現場で課題の本質を掘り下げてきました。</p>
                <p style={{ margin: "0 0 16px 0" }}>私自身、飲食店の経営を経験してきました。だからこそ、机上の空論ではなく、現場が実際に動ける戦略を立て、実行から改善まで泥臭く伴走します。</p>
                <p style={{ margin: 0 }}>CUENは、クライアントの想いに気づき、前向きな変化のキッカケを生み出し続けるパートナーでありたいと思っています。</p>
              </div>
              <div className="fade-up fade-up-delay-3" style={{ marginTop: "24px" }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--cuen-charcoal)", margin: "0 0 4px 0" }}>市原 純</p>
                <p style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "12px", letterSpacing: "0.1em", color: "var(--cuen-muted)", margin: 0 }}>代表社員 / 合同会社CUEN</p>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section style={{ background: "var(--cuen-teal)", borderRadius: "24px", margin: "0 16px 60px", padding: "48px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <GrainOverlay />
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(200,97,74,0.25)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(200,97,74,0.15)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <img src={ILLUST_CONNECT} alt="" className="fade-up" style={{ width: "100px", height: "auto", margin: "0 auto 20px", display: "block", borderRadius: "50%", background: "rgba(255,255,255,0.15)", padding: "12px" }} />
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 900, color: "#fff", margin: "0 0 16px 0", lineHeight: 1.4, wordBreak: "keep-all" }}>
                まずは、現状のモヤモヤを<br />お聞かせください。
              </h2>
              <p className="fade-up fade-up-delay-2" style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", margin: "0 0 32px 0", lineHeight: 1.7 }}>
                「何から手をつければいいか分からない」でも構いません。
              </p>
              <a href="/contact" className="fade-up fade-up-delay-3" style={{ display: "inline-block", background: "var(--cuen-terracotta)", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "14px 36px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 16px rgba(200,97,74,0.4)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(200,97,74,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(200,97,74,0.4)"; }}
              >
                お問い合わせはこちら
              </a>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}

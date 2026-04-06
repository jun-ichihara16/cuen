import { useEffect } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveBackground from "../components/WaveBackground";
import IntroAnimation from "../components/IntroAnimation";

const CUEN_LOGO = "/cuen-logo.png";
const CEO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/jun-ichihara_a82a7119.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // ヒーロー要素のスタガーアニメーション — イントロ終了後（2.8秒後）に開始
    const heroEls = document.querySelectorAll(".hero-reveal");
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 2800 + 200 + i * 160);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    { num: "01", name: "AI KANJI", desc: "幹事の割り勘・PayPay番号収集・支払いリマインドをLINEで全自動化。AIがすべての面倒を引き受けます。", href: "/service" },
    { num: "02", name: "店舗マーケティング・ブランド戦略・運営支援", desc: "飲食店や宿泊施設の集客強化から、ブランド構築、オペレーション改善まで。経営経験を持つマーケターが現場に入り込み、一気通貫で支援します。", href: "/service" },
    { num: "03", name: "イベント・セミナー企画", desc: "企業イベント・展示会・セミナーの企画から運営まで。参加者の体験設計を重視し、ブランド価値を高め、記憶に残るイベントを実現します。", href: "/service" },
    { num: "04", name: "プロジェクトコンサルティング", desc: "新規事業の立ち上げから既存事業のテコ入れまで。戦略を描くだけでなく、チームを巻き込みながらプロジェクトを最後まで推進します。", href: "/service" },
  ];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <IntroAnimation />
      <div>
      <Header />

      {/* ── Hero ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "72px",
          background: "#ffffff",
        }}
      >
        <WaveBackground />

        {/* ④ paddingBottom: 120px to avoid SCROLL overlap */}
        <div className="cuen-container" style={{ position: "relative", zIndex: 1, paddingTop: "80px", paddingBottom: "120px" }}>
          <div style={{ maxWidth: "640px" }}>

            {/* ② Hero Logo — filter なし（白背景） */}
            <div className="hero-reveal" style={{ marginBottom: "32px" }}>
              <img
                src={CUEN_LOGO}
                alt="CUEN"
                style={{ width: "clamp(100px, 16vw, 160px)", height: "auto", display: "block" }}
              />
            </div>

            {/* ③ "Consulting & Marketing" label REMOVED */}

            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px, 3.2vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#1A1A1A",
                margin: "0 0 32px 0",
              }}
            >
              <span className="hero-reveal" style={{ display: "block", overflow: "hidden" }}>
                <span style={{ display: "block" }}>現場の想いを、</span>
              </span>
              <span className="hero-reveal" style={{ display: "block", overflow: "hidden" }}>
                <span style={{ display: "block" }}>
                  <span style={{ color: "#006875" }}>動くビジネス</span>に変えていく。
                </span>
              </span>
            </h1>

            <p
              className="hero-reveal"
              style={{
                fontSize: "17px",
                color: "#4A4A4A",
                lineHeight: 1.85,
                margin: "0 0 56px 0",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.06em",
              }}
            >
              マーケティングからプロジェクト推進まで。現場感覚で伴走するパートナー。
            </p>

            <div className="hero-reveal" style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/service" className="btn-cuen btn-cuen-filled">
                <span>サービスを見る</span>
                <span className="btn-arrow" aria-hidden="true">
                  <svg width="16" height="9" viewBox="0 0 18 10" fill="none">
                    <path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="btn-cuen">
                <span>お問い合わせ</span>
                <span className="btn-arrow" aria-hidden="true">
                  <svg width="16" height="9" viewBox="0 0 18 10" fill="none">
                    <path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ④ Scroll indicator — repositioned */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.18em", color: "#C0BDB7", textTransform: "uppercase" }}>Scroll</div>
          <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #C0BDB7, transparent)" }} />
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section style={{ padding: "120px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div style={{ maxWidth: "720px" }}>
            <div className="section-label fade-up" style={{ marginBottom: "40px" }}>Our Philosophy</div>
            <p className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 32px 0" }}>
              <span className="cuen-brand">CUEN</span>は、人と人のあいだにある可能性に気づき、前向きな変化のキッカケを生み出し続けます。
            </p>
            <p className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.9, margin: "0 0 40px 0" }}>
              数字や効率だけでは、ビジネスは動かない。私たちは、現場で働く一人ひとりの想いや関係性を紐解き、「なぜ売れないのか」「どうすれば伝わるのか」という本質的な課題を解決します。
            </p>
            <Link href="/about" className="fade-up fade-up-delay-3" style={{ color: "#006875", fontSize: "14px", letterSpacing: "0.06em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              CUENについて詳しく
              <span style={{ fontSize: "16px" }}>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ padding: "120px 0" }}>
        <div className="cuen-container">
          <div className="fade-up" style={{ marginBottom: "64px" }}>
            <div className="section-label" style={{ marginBottom: "24px" }}>Service</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#1A1A1A", margin: 0 }}>
              現場を動かし、事業を前に進める4つの柱。
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", borderTop: "1px solid #E8E6E1" }}>
            {services.map((service, i) => (
              <div
                key={service.num}
                className={`fade-up fade-up-delay-${i + 1}`}
                style={{ padding: "40px 32px", borderBottom: "1px solid #E8E6E1", borderRight: "1px solid #E8E6E1", transition: "background 0.2s ease", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F7F6F4")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                onClick={() => window.location.href = service.href}
              >
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875", marginBottom: "16px" }}>{service.num}</div>
                <h3 style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif", fontSize: "16px", fontWeight: 500, color: "#1A1A1A", margin: "0 0 12px 0", lineHeight: 1.4 }}>{service.name}</h3>
                <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="fade-up" style={{ marginTop: "40px" }}>
            <Link href="/service" className="btn-cuen">
              <span>すべてのサービスを見る</span>
              <span className="btn-arrow" aria-hidden="true">
                <svg width="16" height="9" viewBox="0 0 18 10" fill="none">
                  <path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ⑤ CEO Message — vertical stack layout */}
      <section style={{ padding: "120px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div style={{ maxWidth: "480px" }}>
            {/* Photo — top */}
            <div className="fade-up" style={{ marginBottom: "48px" }}>
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", width: "100%" }}>
                <img src={CEO_IMAGE} alt="市原 純" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%)" }} />
              </div>
            </div>

            {/* Text — below */}
            <div>
              <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Message</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 32px 0", lineHeight: 1.5 }}>
                現場を知るからこそ、
                <br />
                描ける戦略がある。
              </h2>
              <div className="fade-up fade-up-delay-2" style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.95 }}>
                <p style={{ margin: "0 0 20px 0" }}>「なぜ売れないのか」「なぜ伝わらないのか」——その問いを起点に、数多くのビジネスの現場で課題の本質を掘り下げてきました。</p>
                <p style={{ margin: "0 0 20px 0" }}>私自身、飲食・物販・宿泊施設の経営を経験してきました。だからこそ、机上の空論ではなく、現場が実際に動ける戦略を立て、実行から改善まで泥臭く伴走します。</p>
                <p style={{ margin: "0 0 32px 0" }}>CUENは、クライアントの想いに気づき、前向きな変化のキッカケを生み出し続けるパートナーでありたいと思っています。</p>
              </div>
              <div className="fade-up fade-up-delay-3">
                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px", color: "#1A1A1A", margin: "0 0 4px 0" }}>市原 純</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "#9E9B95", margin: 0 }}>代表社員 / 合同会社CUEN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "120px 0", background: "#006875" }}>
        <div className="cuen-container" style={{ textAlign: "center" }}>
          <div className="section-label fade-up" style={{ justifyContent: "center", color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
            <span style={{ background: "rgba(255,255,255,0.4)", width: "24px", height: "1px", display: "inline-block" }} />
            Contact
          </div>
          <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#ffffff", margin: "0 0 24px 0", lineHeight: 1.4 }}>
            まずは、現状のモヤモヤをお聞かせください。
          </h2>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, margin: "0 0 48px 0" }}>
            「何から手をつければいいか分からない」という状態でも構いません。
            <br />
            あなたの想いと現場の課題を聞かせていただくところから、始めます。
          </p>
          <div className="fade-up fade-up-delay-3">
            <Link href="/contact" className="btn-cuen btn-cuen-white">
              <span>無料相談・お問い合わせ</span>
              <span className="btn-arrow" aria-hidden="true">
                <svg width="16" height="9" viewBox="0 0 18 10" fill="none">
                  <path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}

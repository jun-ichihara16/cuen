import { useEffect } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveBackground from "../components/WaveBackground";

const CEO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/jun-ichihara_a82a7119.png";


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const heroEls = document.querySelectorAll(".hero-reveal");
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 160);
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
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      num: "01",
      name: "AI KANJI",
      desc: "幹事の割り勘・PayPay番号収集・支払いリマインドをLINEで全自動化。AIが、面倒をなくす。",
      href: "/service",

    },
    {
      num: "02",
      name: "店舗マーケティング・ブランド戦略・運営支援",
      desc: "店舗・施設の集客力強化からブランド構築、日常運営の改善まで。現場感覚を持ったマーケターとして一気通貫で支援します。",
      href: "/service",
    },
    {
      num: "03",
      name: "プロジェクトコンサルティング",
      desc: "新規事業の立ち上げから既存事業の改善まで、プロジェクト全体の設計・管理・推進を支援します。",
      href: "/service",
    },
  ];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
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

        <div className="cuen-container" style={{ position: "relative", zIndex: 1, paddingTop: "80px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: "640px" }}>
            <div className="section-label hero-reveal fade-up" style={{ marginBottom: "40px" }}>
              Consulting & Marketing
            </div>

            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px, 3.2vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#1A1A1A",
                margin: "0 0 32px 0",
                letterSpacing: "0em",
              }}
            >
              <span className="hero-reveal" style={{ display: "block", overflow: "hidden" }}>
                <span style={{ display: "block" }}>想いが重なるとき、</span>
              </span>
              <span className="hero-reveal" style={{ display: "block", overflow: "hidden" }}>
                <span style={{ display: "block" }}>
                  <span style={{ color: "#006875" }}>大切にしたい未来</span>が見えてくる。
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
              その先を、共につくる。
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

        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", color: "#9E9B95", textTransform: "uppercase" }}>Scroll</div>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #9E9B95, transparent)" }} />
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section style={{ padding: "120px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div style={{ maxWidth: "720px" }}>
            <div className="section-label fade-up" style={{ marginBottom: "40px" }}>Our Philosophy</div>
            <p className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, lineHeight: 1.6, color: "#1A1A1A", margin: "0 0 32px 0" }}>
              <span className="cuen-brand">CUEN</span>は、人と人のあいだにある可能性を
              ていねいに見つめ、前向きな変化のきっかけをつくる。
            </p>
            <p className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.9, margin: "0 0 40px 0" }}>
              成果や効率だけを追うのではなく、一人ひとりの想いと関係性を起点に、
              ビジネスの本質的な変化を生み出します。
              違いを尊重しながら、関係性の中から前へ進む力を生み出すことが、
              CUENの存在意義です。
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
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "#1A1A1A", margin: 0 }}>
              提供するもの、届けたいもの。
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0", borderTop: "1px solid #E8E6E1" }}>
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

      {/* ── CEO Message ── */}
      <section style={{ padding: "120px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div style={{ display: "grid", gridTemplateColumns: "clamp(200px, 35%, 380px) 1fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }} className="mobile-stack">
            <div className="fade-up">
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4", maxWidth: "360px" }}>
                <img src={CEO_IMAGE} alt="市原 純" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%)" }} />
              </div>
            </div>

            <div>
              <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Message</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 32px 0", lineHeight: 1.5 }}>
                一人ひとりを、
                <br />
                ちゃんと見る。
              </h2>
              <div className="fade-up fade-up-delay-2" style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.95 }}>
                <p style={{ margin: "0 0 20px 0" }}>
                  「なぜ売れないのか」「なぜ伝わらないのか」——
                  その問いを起点に、数多くのビジネスの現場で
                  課題の本質を掘り下げてきました。
                </p>
                <p style={{ margin: "0 0 20px 0" }}>
                  飲食・物販・宿泊施設の経営経験も持ち、
                  現場感覚を持ったマーケターとして、
                  戦略立案から実行・改善まで一気通貫で支援します。
                </p>
                <p style={{ margin: "0 0 32px 0" }}>
                  CUENは、想いが重なるところから
                  大切にしたい未来を一緒につくる会社でありたいと思っています。
                </p>
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
          <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 400, color: "#ffffff", margin: "0 0 24px 0", lineHeight: 1.4 }}>
            まず、話しましょう。
          </h2>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.85, margin: "0 0 48px 0" }}>
            どんな相談でも、まずは気軽にお声がけください。
            <br />
            想いを聞かせていただくところから、始めます。
          </p>
          <div className="fade-up fade-up-delay-3">
            <Link href="/contact" className="btn-cuen btn-cuen-white">
              <span>お問い合わせ</span>
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
  );
}

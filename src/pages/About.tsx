import { useEffect } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CEO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/jun-ichihara_a82a7119.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    { num: "01", title: "人を見る", body: "数字や成果の前に、一人ひとりの想いと文脈を丁寧に理解することから始めます。表面的な課題ではなく、その奥にある本質を見つめます。" },
    { num: "02", title: "重なりから生まれる力", body: "違いを尊重しながら、想いが重なるところに可能性を見出します。調和とは丸く収めることではなく、違いが交わって前へ進む力のことです。" },
    { num: "03", title: "きっかけをつくる", body: "変化のきっかけは、軽い言葉ではありません。未来が動き出す起点として、丁寧に、確かに設計します。" },
    { num: "04", title: "共につくる", body: "提案して終わりではなく、その先を一緒に歩みます。クライアントの成功が、CUENの成功です。" },
  ];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Header />

      {/* ── Page Hero ── */}
      <section style={{ paddingTop: "160px", paddingBottom: "100px", position: "relative", overflow: "hidden" }}>
        <div className="cuen-container" style={{ position: "relative" }}>
          <div className="section-label fade-up" style={{ marginBottom: "32px" }}>About</div>
          <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 24px 0", lineHeight: 1.25, maxWidth: "640px" }}>
            なぜ、<span className="cuen-brand">CUEN</span>は
            <br />
            存在するのか。
          </h1>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "17px", color: "#6B6B6B", lineHeight: 1.9, maxWidth: "520px", margin: 0 }}>
            人と人のあいだにある可能性を見つめ、
            前向きな変化のきっかけをつくるために。
          </p>
        </div>
      </section>

      {/* ── Philosophy — vertical stack ── */}
      <section style={{ padding: "100px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div>
            <div className="fade-up">
              <div className="section-label" style={{ marginBottom: "24px" }}>Philosophy</div>
              <div style={{ width: "40px", height: "1px", background: "#E8E6E1", marginBottom: "40px" }} />
            </div>
            <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 32px 0", lineHeight: 1.4 }}>
              一人ひとりの想いが重なり、
              <br />
              未来が動き出す起点をつくる。
            </h2>
            <div className="fade-up fade-up-delay-2" style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.95 }}>
              <p style={{ margin: "0 0 24px 0" }}>CUENは、ただ成果や効率だけを追うのではなく、「人の想い」「関係性」「調和」「前向きな変化のきっかけ」を大切にする会社です。</p>
              <p style={{ margin: "0 0 24px 0" }}>表層的に"熱い""エモい"ではなく、綺麗事を綺麗事で終わらせず、一人ひとりをちゃんと見つめ、違いを尊重しながら関係性の中から前へ進む力を生み出す。</p>
              <p style={{ margin: 0 }}>それが、CUENの存在意義です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: "100px 0" }}>
        <div className="cuen-container">
          <div className="fade-up" style={{ marginBottom: "64px" }}>
            <div className="section-label" style={{ marginBottom: "24px" }}>Values</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#1A1A1A", margin: 0 }}>
              向き合い方が、すべてを決める。
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", borderTop: "1px solid #E8E6E1", borderLeft: "1px solid #E8E6E1" }}>
            {values.map((v, i) => (
              <div key={v.num} className={`fade-up fade-up-delay-${i + 1}`} style={{ padding: "40px 32px", borderRight: "1px solid #E8E6E1", borderBottom: "1px solid #E8E6E1" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875", marginBottom: "20px" }}>{v.num}</div>
                <h3 style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif", fontSize: "17px", fontWeight: 500, color: "#1A1A1A", margin: "0 0 16px 0" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.85, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO Profile — vertical stack ── */}
      <section style={{ padding: "100px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div>
            <div className="fade-up" style={{ marginBottom: "48px" }}>
              <div style={{ overflow: "hidden", aspectRatio: "4/3", width: "100%" }}>
                <img src={CEO_IMAGE} alt="市原 純" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(10%)" }} />
              </div>
            </div>
            <div>
              <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Representative</div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 4px 0" }}>市原 純</h2>
              <p className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "#9E9B95", margin: "0 0 32px 0", textTransform: "uppercase" }}>Jun Ichihara — 代表社員</p>
              <div className="fade-up fade-up-delay-2" style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.95 }}>
                <p style={{ margin: "0 0 20px 0" }}>東京を拠点に、店舗マーケティング・ブランド戦略・運営支援・プロジェクトコンサルティングを手がける。</p>
                <p style={{ margin: "0 0 20px 0" }}>「なぜ売れないのか」「なぜ伝わらないのか」——その問いを起点に、数多くのビジネスの現場で課題の本質を掘り下げてきた。</p>
                <p style={{ margin: "0 0 20px 0" }}>飲食・物販・宿泊施設の経営経験も持ち、現場感覚を持ったマーケターとして、戦略立案から実行・改善まで一気通貫で支援する。</p>
                <p style={{ margin: 0 }}>2024年9月、合同会社CUENを設立。AIを活用した新しいサービス「AI KANJI」を開発・展開中。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 0", background: "#006875" }}>
        <div className="cuen-container" style={{ textAlign: "center" }}>
          <h2 className="fade-up" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#ffffff", margin: "0 0 24px 0" }}>まず、話しましょう。</h2>
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

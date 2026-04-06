import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";

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
    { num: "01", title: "数字の前に、人を見る", body: "売上低下や集客不足といった「現象」の裏には、必ず人の課題があります。私たちは、まず現場の想いと文脈を丁寧に理解し、本質的なボトルネックを見つけ出します。" },
    { num: "02", title: "違いを、前に進む力に変える", body: "立場が違えば意見が衝突するのは当然です。それをただ丸く収めるのではなく、違いを尊重しながら、事業を前進させるための新しい解決策（重なり）を見つけます。" },
    { num: "03", title: "確かな「キッカケ」を設計する", body: "精神論で終わらせず、具体的な戦略や仕組みとして落とし込みます。組織や事業が自走し始めるための、確かな起点（キッカケ）を設計します。" },
    { num: "04", title: "提案で終わらず、共に汗をかく", body: "美しい企画書を出して終わりではありません。現場に入り込み、実行フェーズの壁を一緒に乗り越えます。クライアントの事業成長が、私たちのゴールです。" },
  ];

  return (
    <>
      <Header />
      <div className="content-card">

        <section style={{ paddingTop: "160px", paddingBottom: "100px", position: "relative", overflow: "hidden" }}>
          <div className="cuen-container" style={{ position: "relative" }}>
            <div className="section-label fade-up" style={{ marginBottom: "32px" }}>About</div>
            <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, color: "var(--cuen-charcoal)", margin: "0 0 24px 0", lineHeight: 1.3, maxWidth: "640px", wordBreak: "keep-all" }}>
              なぜ、<span className="cuen-brand">CUEN</span>は
              <br />
              存在するのか。
            </h1>
            <p className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8, maxWidth: "520px", margin: 0 }}>
              人と人のあいだにある可能性に気づき、前向きな変化のキッカケを生み出し続けるために。
            </p>
          </div>
        </section>

        <section style={{ padding: "100px 0", background: "var(--cuen-offwhite)" }}>
          <div className="cuen-container">
            <div>
              <div className="fade-up">
                <div className="section-label" style={{ marginBottom: "24px" }}>Philosophy</div>
                <div style={{ width: "40px", height: "1px", background: "#E8E6E1", marginBottom: "40px" }} />
              </div>
              <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, color: "var(--cuen-charcoal)", margin: "0 0 32px 0", lineHeight: 1.4, wordBreak: "keep-all" }}>
                人と人のあいだにある可能性に気づき、
                <br />
                前向きな変化のキッカケを生み出し続ける。
              </h2>
              <div className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8 }}>
                <p style={{ margin: "0 0 24px 0" }}>ビジネスを動かすのは、結局のところ「人」です。CUENは、目先の数字や効率だけを追うのではなく、現場で働く人の想いやチームの関係性を何よりも大切にします。</p>
                <p style={{ margin: "0 0 24px 0" }}>綺麗事だけで事業は伸びません。しかし、想いがなければ人は動きません。一人ひとりの本音に気づき、違いを尊重しながら、組織が前へ進むための具体的な「キッカケ」を作ること。</p>
                <p style={{ margin: 0 }}>それが、CUENの存在意義です。</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "100px 0" }}>
          <div className="cuen-container">
            <div className="fade-up" style={{ marginBottom: "64px" }}>
              <div className="section-label" style={{ marginBottom: "24px" }}>Values</div>
              <h2 style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: 0 }}>
                現場を変えるための、4つの行動指針。
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              {values.map((v, i) => (
                <div key={v.num} className={`fade-up fade-up-delay-${i + 1}`} style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "none", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875", marginBottom: "20px" }}>{v.num}</div>
                  <h3 style={{ fontFamily: "'Zen Kaku Gothic New', 'Space Grotesk', sans-serif", fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 600, color: "var(--cuen-charcoal)", margin: "0 0 16px 0" }}>{v.title}</h3>
                  <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8, margin: 0 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "100px 0", background: "var(--cuen-offwhite)" }}>
          <div className="cuen-container">
            <div>
              <div className="fade-up" style={{ marginBottom: "48px" }}>
                <div style={{ overflow: "hidden", aspectRatio: "4/3", width: "100%", borderRadius: "20px" }}>
                  <img src={CEO_IMAGE} alt="市原 純" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(10%)" }} />
                </div>
              </div>
              <div>
                <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Representative</div>
                <h2 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: "0 0 4px 0" }}>市原 純</h2>
                <p className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "#9E9B95", margin: "0 0 32px 0", textTransform: "uppercase" }}>Jun Ichihara — 代表社員</p>
                <div className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8 }}>
                  <p style={{ margin: "0 0 20px 0" }}>東京を拠点に、店舗マーケティング・ブランド戦略・運営支援・プロジェクトコンサルティングを手がける。</p>
                  <p style={{ margin: "0 0 20px 0" }}>「なぜ売れないのか」「なぜ伝わらないのか」——その問いを起点に、数多くのビジネスの現場で課題の本質を掘り下げてきた。</p>
                  <p style={{ margin: "0 0 20px 0" }}>飲食・物販・宿泊施設の経営経験も活かし、現場感覚を持つマーケターとして、戦略立案から実行・改善までを一気通貫で支援する。</p>
                  <p style={{ margin: 0 }}>2024年9月、合同会社CUENを設立。AIを活用した新しいサービス「AI KANJI」を開発・展開中。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "var(--cuen-teal)", borderRadius: "24px", margin: "0 20px 60px", padding: "60px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <GrainOverlay />
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(200,97,74,0.25)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(200,97,74,0.15)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 className="fade-up" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "#fff", margin: "0 0 16px 0", wordBreak: "keep-all" }}>まずは、現状のモヤモヤをお聞かせください。</h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", margin: "0 0 32px 0", lineHeight: 1.7 }}>「何から手をつければいいか分からない」という状態でも構いません。あなたの想いを聞かせていただくところから始めます。</p>
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

import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { num: "01", name: "AI KANJI", tag: "Product", desc: "幹事の割り勘・PayPay番号収集・支払いリマインドをLINEで全自動化。イベント作成3分、参加者登録30秒、幹事のリマインド0回。AIがすべての面倒を引き受けます。", features: ["PayPay番号の自動収集", "割り勘計算の自動化", "支払いリマインドの自動送信", "幹事ポイント制度", "LINEで完結・参加者ログイン不要"], link: "https://kanji-relief.com/", linkLabel: "AI KANJIを見る" },
    { num: "02", name: "店舗マーケティング・ブランド戦略・運営支援", tag: "Consulting", desc: "飲食店や宿泊施設の集客強化から、ブランド構築、オペレーション改善まで。経営経験を持つマーケターが現場に入り込み、戦略立案から実行・改善までを一気通貫で支援します。", features: ["店舗集客・販促戦略設計", "ブランドコンセプト・メッセージ設計", "運営改善・コスト最適化", "実行支援・PDCAサポート"] },
    { num: "03", name: "イベント・セミナー企画", tag: "Event", desc: "企業イベント・展示会・セミナーの企画から運営まで。参加者の体験設計を重視し、ブランド価値を高め、記憶に残るイベントを実現します。", features: ["企画・コンセプト設計", "会場選定・手配", "集客・プロモーション", "当日運営・アフターフォロー"] },
    { num: "04", name: "プロジェクトコンサルティング", tag: "Strategy", desc: "新規事業の立ち上げから既存事業のテコ入れまで。戦略を描くだけでなく、チームを巻き込みながらプロジェクト全体の設計・管理・推進をサポートします。", features: ["プロジェクト設計・計画策定", "進捗管理・課題解決", "チームビルディング支援", "成果評価・改善提案"] },
  ];

  const steps = [
    { num: "01", title: "現場の声を聴く", body: "経営陣だけでなく、現場のリアルな声を聴かせてください。表面的な課題の奥にある、本当のボトルネックを洗い出します。" },
    { num: "02", title: "動ける戦略を立てる", body: "理想論ではなく、今のリソースで「実際に動ける」戦略を設計します。複数の選択肢から、最適なアプローチを共に選びます。" },
    { num: "03", title: "共に汗をかく", body: "戦略を絵に描いた餅にしません。現場感覚を持つチームがプロジェクトに入り込み、スピード感を持って実行を推進します。" },
    { num: "04", title: "数字と現場で検証する", body: "データ（数字）と現場のリアルな反応、その両方を見ながら施策をチューニングし続けます。" },
  ];

  return (
    <>
      <Header />
      <div className="content-card">

        <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
          <div className="cuen-container">
            <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Service</div>
            <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 900, color: "var(--cuen-charcoal)", margin: "0 0 24px 0", lineHeight: 1.3, maxWidth: "640px", wordBreak: "keep-all" }}>
              現場を動かし、<br />事業を前に進める。
            </h1>
            <p className="fade-up fade-up-delay-2" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8, maxWidth: "520px", margin: 0 }}>CUENが提供するのは、単なる「施策の提案」ではありません。現場に入り込み、戦略が実行され、結果につながるまでのプロセスを共につくります。</p>
          </div>
        </section>

        <section style={{ padding: "40px 0 100px" }}>
          <div className="cuen-container">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {services.map((service, i) => (
                <div key={service.num} className={`fade-up fade-up-delay-${(i % 3) + 1}`} style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "none", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "16px" }}>
                    <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875" }}>{service.num}</div>
                    <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#9E9B95", textTransform: "uppercase" }}>{service.tag}</div>
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "'Zen Kaku Gothic New', 'Space Grotesk', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: "0 0 16px 0", wordBreak: "keep-all" }}>{service.name}</h2>
                    <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8, margin: "0 0 24px 0", maxWidth: "600px" }}>{service.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {service.features.map((f) => (
                        <li key={f} style={{ fontFamily: "'Zen Kaku Gothic New', 'Space Grotesk', sans-serif", fontSize: "12px", color: "#006875", border: "1px solid rgba(0,104,117,0.3)", padding: "4px 12px", letterSpacing: "0.03em" }}>{f}</li>
                      ))}
                    </ul>
                    {service.num === "01" && (
                      <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663454524748/2kCcYKpUpLm4gHsyVUsYHQ/illust_sample_planning-MeTpxbbNohSw8dojqgmwv9.webp" alt="" style={{ width: "100%", maxWidth: "280px", height: "auto", display: "block", margin: "16px auto 0" }} />
                    )}
                    {service.link && (
                      <a href={service.link} target="_blank" rel="noopener noreferrer" style={{ color: "#006875", fontSize: "14px", letterSpacing: "0.06em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                        {service.linkLabel} <span>&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "100px 0", background: "var(--cuen-offwhite)" }}>
          <div className="cuen-container">
            <div className="fade-up" style={{ marginBottom: "64px" }}>
              <div className="section-label" style={{ marginBottom: "24px" }}>Approach</div>
              <h2 style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "var(--cuen-charcoal)", margin: 0 }}>成果を出すための、泥臭いアプローチ。</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
              {steps.map((step, i) => (
                <div key={step.num} className={`fade-up fade-up-delay-${i + 1}`} style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "none", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
                >
                  <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875", marginBottom: "20px" }}>{step.num}</div>
                  <h3 style={{ fontFamily: "'Zen Kaku Gothic New', 'Space Grotesk', sans-serif", fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 600, color: "var(--cuen-charcoal)", margin: "0 0 12px 0" }}>{step.title}</h3>
                  <p style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "#666", lineHeight: 1.8, margin: 0 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "var(--cuen-teal)", borderRadius: "24px", margin: "0 20px 60px", padding: "60px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <GrainOverlay />
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(200,97,74,0.25)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(200,97,74,0.15)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 className="fade-up" style={{ fontFamily: "'Space Grotesk', 'Zen Kaku Gothic New', sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.4, color: "#fff", margin: "0 0 16px 0", wordBreak: "keep-all" }}>まずは、現状のモヤモヤをお聞かせください。</h2>
            <p className="fade-up fade-up-delay-1" style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", margin: "0 0 32px 0", lineHeight: 1.7 }}>「何から手をつければいいか分からない」という状態でも構いません。</p>
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

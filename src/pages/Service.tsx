import { useEffect } from "react";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";



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
    { num: "01", name: "AI KANJI", tag: "Product", desc: "幹事の割り勘・PayPay番号収集・支払いリマインドをLINEで全自動化するサービス。イベント作成3分、参加者登録30秒、幹事のリマインド0回。AIが面倒をすべて引き受けます。", features: ["PayPay番号の自動収集", "割り勘計算の自動化", "支払いリマインドの自動送信", "幹事ポイント制度", "LINEで完結・参加者ログイン不要"], link: "https://kanji-relief.com/", linkLabel: "AI KANJIを見る" },
    { num: "02", name: "店舗マーケティング・ブランド戦略・運営支援", tag: "Consulting", desc: "店舗・施設の集客力強化からブランド構築、日常運営の改善まで。現場感覚を持ったマーケターとして、戦略立案から実行・改善まで一気通貫で支援します。", features: ["店舗集客・販促戦略設計", "ブランドコンセプト・メッセージ設計", "運営改善・コスト最適化", "実行支援・PDCAサポート"] },
    { num: "03", name: "イベント・セミナー企画", tag: "Event", desc: "企業イベント・展示会・セミナーの企画から運営まで。参加者の体験設計を重視した、記憶に残るイベントを実現します。", features: ["企画・コンセプト設計", "会場選定・手配", "集客・プロモーション", "当日運営・アフターフォロー"] },
    { num: "04", name: "プロジェクトコンサルティング", tag: "Strategy", desc: "新規事業の立ち上げから既存事業の改善まで、プロジェクト全体の設計・管理・推進を支援します。", features: ["プロジェクト設計・計画策定", "進捗管理・課題解決", "チームビルディング支援", "成果評価・改善提案"] },
  ];

  const steps = [
    { num: "01", title: "ヒアリング", body: "まず、想いを聞かせてください。課題の表面だけでなく、その奥にある文脈と目指す未来を丁寧に理解します。" },
    { num: "02", title: "設計", body: "ヒアリングをもとに、本質的な課題を定義し、最適なアプローチを設計します。提案は一つではなく、複数の選択肢を用意します。" },
    { num: "03", title: "実行", body: "設計した戦略を、スピード感を持って実行します。現場感覚を持ったチームが、細部まで丁寧に動きます。" },
    { num: "04", title: "改善", body: "数字と現場の声を両方見ながら、継続的に改善します。終わりではなく、ここから始まる関係性を大切にします。" },
  ];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Header />

      <section style={{ paddingTop: "160px", paddingBottom: "100px" }}>
        <div className="cuen-container">
          <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Service</div>
          <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 24px 0", lineHeight: 1.25, maxWidth: "640px" }}>
            提供するもの、<br />届けたいもの。
          </h1>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "17px", color: "#6B6B6B", lineHeight: 1.9, maxWidth: "520px", margin: 0 }}>CUENが提供するのは、施策だけではありません。想いが形になるプロセスそのものを、共につくります。</p>
        </div>
      </section>

      <section style={{ padding: "40px 0 100px" }}>
        <div className="cuen-container">
          <div style={{ display: "flex", flexDirection: "column", gap: "0", borderTop: "1px solid #E8E6E1" }}>
            {services.map((service, i) => (
              <div key={service.num} className={`fade-up fade-up-delay-${(i % 3) + 1}`} style={{ padding: "56px 0", borderBottom: "1px solid #E8E6E1" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "16px" }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875" }}>{service.num}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#9E9B95", textTransform: "uppercase" }}>{service.tag}</div>
                </div>
                <div>
                  <h2 style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif", fontSize: "clamp(20px, 5vw, 26px)", fontWeight: 500, color: "#1A1A1A", margin: "0 0 16px 0" }}>{service.name}</h2>
                  <p style={{ fontSize: "15px", color: "#6B6B6B", lineHeight: 1.85, margin: "0 0 24px 0", maxWidth: "600px" }}>{service.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif", fontSize: "12px", color: "#006875", border: "1px solid rgba(0,104,117,0.3)", padding: "4px 12px", letterSpacing: "0.03em" }}>{f}</li>
                    ))}
                  </ul>
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

      <section style={{ padding: "100px 0", background: "#F7F6F4" }}>
        <div className="cuen-container">
          <div className="fade-up" style={{ marginBottom: "64px" }}>
            <div className="section-label" style={{ marginBottom: "24px" }}>Approach</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#1A1A1A", margin: 0 }}>向き合い方が、すべてを決める。</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0", borderTop: "1px solid #E8E6E1", borderLeft: "1px solid #E8E6E1" }}>
            {steps.map((step, i) => (
              <div key={step.num} className={`fade-up fade-up-delay-${i + 1}`} style={{ padding: "40px 28px", borderRight: "1px solid #E8E6E1", borderBottom: "1px solid #E8E6E1" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#006875", marginBottom: "20px" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'DM Sans', 'Noto Sans JP', sans-serif", fontSize: "17px", fontWeight: 500, color: "#1A1A1A", margin: "0 0 12px 0" }}>{step.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: 1.85, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0", background: "#006875" }}>
        <div className="cuen-container" style={{ textAlign: "center" }}>
          <h2 className="fade-up" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(24px, 6vw, 36px)", fontWeight: 400, color: "#ffffff", margin: "0 0 24px 0" }}>まず、話しましょう。</h2>
          <p className="fade-up fade-up-delay-1" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", margin: "0 0 40px 0", lineHeight: 1.85 }}>どんな相談でも、まずは気軽にお声がけください。</p>
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

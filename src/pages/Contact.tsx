import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({ name: "", company: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Header />

      <section style={{ paddingTop: "160px", paddingBottom: "80px" }}>
        <div className="cuen-container">
          <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Contact</div>
          <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 32px 0", lineHeight: 1.2 }}>まず、話しましょう。</h1>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "17px", color: "#6B6B6B", lineHeight: 1.9, maxWidth: "520px", margin: 0 }}>
            どんな相談でも、まずは気軽にお声がけください。想いを聞かせていただくところから、始めます。
            <br />
            <span style={{ fontSize: "14px", color: "#9E9B95", marginTop: "8px", display: "inline-block" }}>※ 内容確認後、3営業日以内にご連絡いたします。</span>
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0 160px" }}>
        <div className="cuen-container">
          <div style={{ maxWidth: "640px" }}>
            {submitted ? (
              <div className="fade-up" style={{ padding: "64px 0", textAlign: "center" }}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ marginBottom: "32px" }}>
                  <path d="M 32 8 A 24 24 0 1 1 10 44" stroke="#006875" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "28px", fontWeight: 400, color: "#1A1A1A", margin: "0 0 16px 0" }}>ありがとうございます。</h2>
                <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.85 }}>
                  お問い合わせを受け付けました。<br />内容を確認の上、3営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="fade-up fade-up-delay-1">
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <div>
                    <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#9E9B95", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>お名前 <span style={{ color: "#006875" }}>*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="山田 太郎" className="cuen-input" />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#9E9B95", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>会社名</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="株式会社〇〇" className="cuen-input" />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#9E9B95", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>メールアドレス <span style={{ color: "#006875" }}>*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@company.com" className="cuen-input" />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#9E9B95", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>お問い合わせ種別</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="cuen-input" style={{ cursor: "pointer" }}>
                      <option value="">選択してください</option>
                      <option value="service">サービスについて</option>
                      <option value="kanji">AI KANJIについて</option>
                      <option value="collaboration">協業・パートナーシップ</option>
                      <option value="recruit">採用について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.12em", color: "#9E9B95", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>メッセージ <span style={{ color: "#006875" }}>*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="お気軽にご相談内容をお書きください。" rows={6} className="cuen-textarea" />
                  </div>
                  <div>
                    <button type="submit" className="btn-cuen btn-cuen-filled">
                      <span>送信する</span>
                      <span className="btn-arrow" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 18 10" fill="none"><path d="M0 5H16M16 5L11.5 1M16 5L11.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

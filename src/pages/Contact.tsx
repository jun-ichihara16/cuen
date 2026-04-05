import { useEffect } from "react";
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

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Header />

      <section style={{ paddingTop: "160px", paddingBottom: "80px" }}>
        <div className="cuen-container">
          <div className="section-label fade-up" style={{ marginBottom: "32px" }}>Contact</div>
          <h1 className="fade-up fade-up-delay-1" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 8vw, 48px)", fontWeight: 400, color: "#1A1A1A", margin: "0 0 32px 0", lineHeight: 1.25 }}>まず、話しましょう。</h1>
          <p className="fade-up fade-up-delay-2" style={{ fontSize: "17px", color: "#6B6B6B", lineHeight: 1.9, maxWidth: "520px", margin: 0 }}>
            どんな相談でも、まずは気軽にお声がけください。想いを聞かせていただくところから、始めます。
            <br />
            <span style={{ fontSize: "14px", color: "#9E9B95", marginTop: "8px", display: "inline-block" }}>※ 内容確認後、3営業日以内にご連絡いたします。</span>
          </p>
        </div>
      </section>

      {/* ⑥ Google Form embed */}
      <section style={{ padding: "40px 0 160px" }}>
        <div className="cuen-container">
          <div className="fade-up fade-up-delay-1">
            <iframe
              src="YOUR_GOOGLE_FORM_EMBED_URL_HERE"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="お問い合わせフォーム"
              style={{ border: "none", display: "block" }}
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

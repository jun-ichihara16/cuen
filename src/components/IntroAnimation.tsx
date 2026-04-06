import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

export default function IntroAnimation() {
  const [phase, setPhase] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  // phase 0: 揺らぎのみ (0〜800ms)
  // phase 1: ロゴ全体フェードイン、clip-pathでCマーク部分だけ見せる (800ms〜)
  // phase 2: clip-pathを広げてUEN部分も表示 (1600ms〜)
  // phase 3: 全体フェードアウト (2800ms〜)
  // phase 4: 完全非表示 (3600ms〜)

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 800);
    const t1 = setTimeout(() => setPhase(2), 1600);
    const t2 = setTimeout(() => setPhase(3), 2800);
    const t3 = setTimeout(() => setPhase(4), 3600);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Three.js 揺らぎ背景
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution;
          float aspect = u_resolution.x / u_resolution.y;
          vec2 center = vec2(0.5 * aspect, 0.5);
          vec2 p = vec2(uv.x * aspect, uv.y);
          float alpha = 0.0;
          for (int i = 0; i < 3; i++) {
            float fi = float(i);
            float cx = center.x + 0.08 * sin(u_time * 0.5 + fi * 2.1);
            float cy = center.y + 0.1 * cos(u_time * 0.4 + fi * 1.7);
            float d = distance(p, vec2(cx, cy));
            alpha += 0.3 * smoothstep(0.18, 0.0, d);
          }
          alpha = clamp(alpha, 0.0, 0.5);
          gl_FragColor = vec4(0.0, 0.408, 0.459, alpha);
        }
      `,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      transparent: true,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let animId: number;
    const animate = () => {
      material.uniforms.u_time.value += 0.016;
      renderer.render(scene, camera);
      renderer.domElement.style.filter = "blur(60px)";
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (phase >= 4) return null;

  // ロゴ画像1枚を clip-path で制御
  // Cマーク部分 ≒ 左35%、全体 = 100%
  const clipPath = phase >= 2
    ? "inset(0 0 0 0)"           // 全体表示
    : "inset(0 65% 0 0)";        // 左35%だけ表示（Cマーク）

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase >= 3 ? 0 : 1,
        transform: phase >= 3 ? "scale(0.96)" : "scale(1)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* 揺らぎ背景 */}
      <div
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: phase >= 3 ? 0 : 0.6,
          transition: "opacity 0.8s ease",
        }}
      />

      {/* ロゴ — 1枚画像をclip-pathで制御 */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <img
          src="/cuen-logo.png"
          alt="CUEN"
          style={{
            height: "60px",
            width: "auto",
            display: "block",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "scale(1)" : "scale(0.85)",
            clipPath,
            transition: "opacity 0.7s ease, transform 0.7s ease, clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}

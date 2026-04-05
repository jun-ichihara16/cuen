import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isDisabled =
      "ontouchstart" in window ||
      (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);

    let animationId = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const fragmentShader = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_positions[4];
      uniform float u_radius;
      uniform float u_aspect;

      vec2 correctUV(vec2 uv) {
        vec2 centered = (uv - 0.5) * vec2(u_aspect, 1.0);
        return centered + 0.5;
      }

      float drawOrb(vec2 uv, vec2 center, float radius) {
        uv = correctUV(uv);
        float dist = length(uv - center);
        float borderThickness = 0.012;
        float edge = smoothstep(radius - borderThickness, radius, dist)
                   - smoothstep(radius, radius + borderThickness, dist);
        return edge * 0.7;
      }

      float drawSoftOrb(vec2 uv, vec2 center, float radius) {
        uv = correctUV(uv);
        float dist = length(uv - center);
        float core = 0.35;
        if (dist < core) return 0.55;
        float d = (dist - core) / (radius - core);
        return 0.55 * exp(-d * d * 50.0);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;

        float outline = 0.0;
        float glow = 0.0;

        for (int i = 0; i < 4; i++) {
          outline = max(outline, drawOrb(uv, u_positions[i], u_radius));
          glow    = max(glow,    drawSoftOrb(uv, u_positions[i], u_radius * 0.7));
        }

        float brightness = outline * 0.7 + glow * 0.2;

        vec3 tealColor = vec3(0.0, 0.408, 0.459);
        vec3 finalColor = tealColor * brightness;
        float finalAlpha = brightness * 0.45;

        gl_FragColor = vec4(finalColor, finalAlpha);
      }
    `;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_positions: {
          value: [
            new THREE.Vector2(0.72, 0.7),
            new THREE.Vector2(0.85, 0.5),
            new THREE.Vector2(0.72, 0.3),
            new THREE.Vector2(0.62, 0.5),
          ],
        },
        u_radius: { value: 0.16 },
        u_aspect: { value: window.innerWidth / window.innerHeight },
      },
      transparent: true,
      blending: THREE.NormalBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const orbCount = 4;
    const center = new THREE.Vector2(0.75, 0.5);
    const velocity = new THREE.Vector2(0.00018, 0.00013);
    const baseRadius = 0.16;
    let currentRadius = baseRadius;

    const orbs: THREE.Vector2[] = [];
    for (let i = 0; i < orbCount; i++) {
      const angle = (i * Math.PI * 2) / orbCount + Math.PI / 4;
      orbs.push(new THREE.Vector2(Math.cos(angle), Math.sin(angle)));
    }

    function animate(time: number) {
      if (isDisabled) {
        renderer.render(scene, camera);
        return;
      }

      animationId = requestAnimationFrame(animate);

      center.add(velocity);

      if (center.x + currentRadius > 0.95 || center.x - currentRadius < 0.55)
        velocity.x *= -1;
      if (center.y + currentRadius > 0.9 || center.y - currentRadius < 0.1)
        velocity.y *= -1;

      currentRadius = baseRadius + 0.008 * Math.sin(time * 0.0008);

      const t = time * 0.00004;
      const positions = orbs.map((_, i) => {
        const wobble = 0.018 * Math.sin(time * 0.0006 + i * 1.3);
        const angle = t + (i * Math.PI * 2) / orbCount;
        const rotated = new THREE.Vector2(
          Math.cos(angle) * (currentRadius + wobble),
          Math.sin(angle) * (currentRadius + wobble)
        );
        return rotated.add(center);
      });

      material.uniforms.u_time.value = time * 0.0001;
      material.uniforms.u_positions.value = positions;
      material.uniforms.u_radius.value = currentRadius * 0.95;

      renderer.render(scene, camera);

      const blurAmount = currentRadius * currentRadius * 600;
      renderer.domElement.style.filter = `blur(${blurAmount}px)`;
    }

    animate(0);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      material.uniforms.u_aspect.value = window.innerWidth / window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}

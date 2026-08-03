import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/footer.css";

function Footer() {
  const footerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const elements = footerRef.current?.querySelectorAll("p, a");
    if (elements) {
      gsap.set(elements, { opacity: 1, y: 0 });
      gsap.fromTo(
        elements,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }
      );
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = footerRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines = [];
    for (let i = 0; i < 6; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
      });
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.14;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        line.x += line.vx;
        line.y += line.vy;
        if (line.x < 0 || line.x > canvas.width) line.vx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.vy *= -1;
        ctx.lineTo(line.x, line.y);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <canvas ref={canvasRef} className="footer-canvas"></canvas>
      <div className="footer-container">
        <p>&copy; 2026 TunBhone PyaeMoe. Built with React and Vite.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;

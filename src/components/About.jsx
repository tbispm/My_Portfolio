import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/about.css";

function About() {
  const aboutRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current?.querySelectorAll(
      ".about-heading, .about-copy p, .about-highlights span"
    );
    if (elements) {
      gsap.set(elements, { opacity: 1, y: 0 });
      gsap.fromTo(
        elements,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out" }
      );
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = aboutRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines = [];
    for (let i = 0; i < 14; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.22;

      lines.forEach((line, i) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        line.x += line.vx;
        line.y += line.vy;
        if (line.x < 0 || line.x > canvas.width) line.vx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.vy *= -1;
        ctx.lineTo(line.x, line.y);
        ctx.stroke();

        lines.forEach((otherLine, j) => {
          if (i !== j) {
            const dist = Math.hypot(line.x - otherLine.x, line.y - otherLine.y);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(line.x, line.y);
              ctx.lineTo(otherLine.x, otherLine.y);
              ctx.stroke();
            }
          }
        });
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
    <section id="about" className="about" ref={aboutRef}>
      <canvas ref={canvasRef} className="about-canvas"></canvas>
      <div className="about-container">
        <div className="about-heading">
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">
            I like building things that are clear, fast, and useful.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I'm a final-year ICT undergraduate at Rangsit University, Thailand,
            focused on modern web development with React, Vite, Tailwind CSS,
            Node.js, and SQL databases.
          </p>
          <p>
            I enjoy turning real project requirements into practical interfaces:
            booking flows, dashboards, management tools, and responsive websites
            that feel simple for users and maintainable for developers.
          </p>
          <div className="about-highlights" aria-label="About highlights">
            <span>Frontend Development</span>
            <span>Admin Dashboards</span>
            <span>API Integration</span>
            <span>Responsive UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

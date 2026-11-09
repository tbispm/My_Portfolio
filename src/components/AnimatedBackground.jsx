import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useReveal";

/**
 * Moving "spider web" lines drawn on a canvas that fills its parent section.
 * Pauses while off-screen and draws a single still frame for users who
 * prefer reduced motion.
 */
function AnimatedBackground({
  className,
  color = "#38bdf8",
  count = 12,
  speed = 2,
  linkDistance = 110,
  alpha = 0.18,
  connect = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();

    const lines = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = alpha;

      lines.forEach((line, i) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        line.x += line.vx;
        line.y += line.vy;
        if (line.x < 0 || line.x > canvas.width) line.vx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.vy *= -1;
        ctx.lineTo(line.x, line.y);
        ctx.stroke();

        if (!connect) return;
        for (let j = i + 1; j < lines.length; j++) {
          const other = lines[j];
          if (Math.hypot(line.x - other.x, line.y - other.y) < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    if (prefersReducedMotion()) {
      draw();
      return () => resizeObserver.disconnect();
    }

    let frameId = null;
    const loop = () => {
      draw();
      frameId = requestAnimationFrame(loop);
    };
    const start = () => {
      if (frameId === null) frameId = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = null;
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(parent);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, [color, count, speed, linkDistance, alpha, connect]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default AnimatedBackground;

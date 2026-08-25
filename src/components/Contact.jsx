import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { EnvelopeIcon, CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import "../styles/contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "tunbhonepyaemoe@gmail.com",
    href: "mailto:tunbhonepyaemoe@gmail.com",
    Icon: EnvelopeIcon,
  },
  {
    label: "GitHub",
    value: "tbispm",
    href: "https://github.com/tbispm",
    Icon: CodeBracketIcon,
  },
  {
    label: "LinkedIn",
    value: "Tun Bhone Pyae Moe",
    href: "https://www.linkedin.com/in/tun-bhone-pyae-moe-5092a0372/",
    Icon: LinkIcon,
  },
];

function Contact() {
  const contactRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const elements = contactRef.current.querySelectorAll(
      ".contact-heading, .contact-card, .contact-note"
    );
    gsap.set(elements, { opacity: 1, y: 0 });
    gsap.fromTo(
      elements,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = contactRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines = [];
    for (let i = 0; i < 10; i++) {
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
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.16;

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
            if (dist < 110) {
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
    <section id="contact" className="contact" ref={contactRef}>
      <canvas ref={canvasRef} className="contact-canvas"></canvas>
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let's build something useful.</h2>
          <p className="section-lede">
            Open to internship opportunities, frontend projects, and product
            ideas that need clean implementation.
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => {
            const ContactIcon = link.Icon;

            return (
              <a
                key={link.label}
                href={link.href}
                className="contact-card"
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              >
                <ContactIcon className="contact-icon" />
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            );
          })}
        </div>

        <p className="contact-note">Based in Thailand. Available for remote collaboration.</p>
      </div>
    </section>
  );
}

export default Contact;

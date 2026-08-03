import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/skills.css";

const skills = [
  {
    name: "HTML",
    type: "Markup",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    type: "Styling",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1920px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "Tailwind CSS",
    type: "UI System",
    icon: "https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-size_512.png",
  },
  {
    name: "JavaScript",
    type: "ES6+",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1280px-Javascript_badge.svg.png",
  },
  {
    name: "TypeScript",
    type: "Typed JS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/512px-Typescript.svg.png",
  },
  {
    name: "React",
    type: "Frontend",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/250px-React_Logo_SVG.svg.png",
  },
  {
    name: "Node.js",
    type: "Backend",
    icon: "https://www.mindrops.com/images/nodejs-image.webp",
  },
  {
    name: "Python",
    type: "Programming",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png",
  },
  {
    name: "MySQL",
    type: "Database",
    icon: "https://cdn.prod.website-files.com/66754aa69a5d872183713f9c/672dfced5422c158fb5a6002_mysql%20logo.png",
  },
];

function Skills() {
  const skillsRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const items = skillsRef.current.querySelectorAll(".skill-item, .skill-summary");
    gsap.set(items, { opacity: 1, y: 0 });
    gsap.fromTo(
      items,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      }
    );

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = skillsRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines = [];
    for (let i = 0; i < 12; i++) {
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
      ctx.strokeStyle = "#49d17d";
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
    <section id="skills" className="skills" ref={skillsRef}>
      <canvas ref={canvasRef} className="skills-canvas"></canvas>
      <div className="skills-container">
        <div className="skills-header">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I use to ship projects.</h2>
          <p className="section-lede">
            A frontend-heavy stack with enough backend and database knowledge to
            connect interfaces to real data, authentication, and admin workflows.
          </p>
        </div>
        <div className="skills-layout">
          <div className="skill-summary">
            <span>Core Focus</span>
            <h3>React interfaces, responsive systems, and admin workflows.</h3>
            <p>
              I care about clean UI details, clear information hierarchy, and
              features that stay easy to understand after the first version.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

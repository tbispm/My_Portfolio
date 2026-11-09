import { useRef } from "react";
import profileImage from "../assets/myphoto.jpg";
import { projectCount } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import AnimatedBackground from "./AnimatedBackground";
import RoleTypewriter from "./RoleTypewriter";
import "../styles/hero.css";

const roles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Software Engineer",
  "UI/UX Designer",
];

const stats = [
  { value: `${projectCount}`, label: "Projects Built" },
  { value: "2", label: "Live Platforms" },
  { value: "BSc ICT", label: "Rangsit University" },
];

function Hero() {
  const heroRef = useRef(null);

  useReveal(
    heroRef,
    ".hero-kicker, h1, .hero-role, .hero-summary, .hero-actions, .hero-stat, .hero-image-container",
    { y: 20, duration: 1, stagger: 0.15, immediate: true }
  );

  return (
    <section id="home" className="hero" ref={heroRef}>
      <AnimatedBackground
        className="hero-canvas"
        color="#FFFFFF"
        count={30}
        speed={3.25}
        linkDistance={100}
        alpha={0.5}
      />
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            Open to work · Bangkok, Thailand
          </p>
          <h1>TunBhone PyaeMoe</h1>
          <h2 className="hero-role">
            <RoleTypewriter roles={roles} />
          </h2>
          <p className="hero-summary">
            I build responsive web applications end to end: React and TypeScript
            interfaces, Node.js and Express REST APIs, and PostgreSQL databases,
            designed in Figma first. Recent ICT graduate with internship
            experience on a live flight booking platform.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="cta-button primary">View Projects</a>
            <a href="#contact" className="cta-button secondary">Contact Me</a>
          </div>
          <div className="hero-stats" aria-label="Portfolio highlights">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image-container">
          <img src={profileImage} alt="TunBhone PyaeMoe" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

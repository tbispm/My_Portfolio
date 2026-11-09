import { useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/about.css";

const highlights = [
  "Full-Stack Development",
  "Frontend Engineering",
  "REST API Integration",
  "UI/UX Design in Figma",
  "Admin Dashboards",
];

const timeline = [
  {
    period: "Jan 2026 – May 2026",
    title: "Frontend Developer Intern",
    org: "Infinity Digital LLC",
    points: [
      "Developed user-side and admin-side interfaces of FlyQM, a live flight booking platform.",
      "Built reusable, responsive UI components with React and Tailwind CSS.",
      "Collaborated with the backend team on REST API integration and data handling.",
    ],
  },
  {
    period: "Jan 2023 – Jan 2026",
    title: "BSc in Information and Communication Technology",
    org: "Rangsit University, Thailand",
    points: [
      "Object-oriented programming, data structures and algorithms, system analysis and design, networking, artificial intelligence, and intelligent systems.",
    ],
  },
];

const facts = [
  { label: "Based in", value: "Bangkok, Thailand" },
  { label: "Languages", value: "Burmese (Native) · English (Advanced) · Thai (Basic)" },
  {
    label: "Activities",
    value: "RIC Football Club leadership team · Peer Mentor Leader for English at RSU",
  },
];

function About() {
  const aboutRef = useRef(null);

  useReveal(
    aboutRef,
    ".about-heading, .about-facts div, .about-copy > p, .about-highlights span, .timeline-item",
    { y: 20, stagger: 0.08 }
  );

  return (
    <section id="about" className="about" ref={aboutRef}>
      <AnimatedBackground
        className="about-canvas"
        color="#38bdf8"
        count={14}
        speed={2}
        linkDistance={120}
        alpha={0.22}
      />
      <div className="about-container">
        <div className="about-side">
          <div className="about-heading">
            <p className="section-kicker">About Me</p>
            <h2 className="section-title">
              I like building things that are clear, fast, and useful.
            </h2>
          </div>
          <dl className="about-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-copy">
          <p>
            I'm a software developer and recent ICT graduate from Rangsit
            University, building responsive web applications with React,
            TypeScript, Node.js, Express, and PostgreSQL.
          </p>
          <p>
            I enjoy turning real workflows into clear, easy-to-use screens:
            booking flows, dashboards, and admin tools that feel simple for
            users and stay maintainable for developers. I use AI coding tools to
            move faster and review every line, and I'm currently growing my
            skills in automated testing, CI/CD, and clean code practices.
          </p>
          <div className="about-highlights" aria-label="Focus areas">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <ol className="timeline" aria-label="Experience and education">
            {timeline.map((item) => (
              <li className="timeline-item" key={item.title}>
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;

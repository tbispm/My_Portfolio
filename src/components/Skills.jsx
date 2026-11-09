import { useRef } from "react";
import {
  AcademicCapIcon,
  ArrowsRightLeftIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ServerStackIcon,
  SparklesIcon,
  WindowIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { useReveal } from "../hooks/useReveal";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/skills.css";

const skillGroups = [
  {
    title: "Languages",
    Icon: CodeBracketIcon,
    items: ["TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "Python"],
  },
  {
    title: "Frontend",
    Icon: WindowIcon,
    items: [
      "React (Hooks)",
      "React Router",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "Vite",
    ],
  },
  {
    title: "State & Data",
    Icon: ArrowsRightLeftIcon,
    items: ["Redux Toolkit", "Axios", "GraphQL", "async/await", "Error Handling"],
  },
  {
    title: "Backend & APIs",
    Icon: ServerStackIcon,
    items: ["Node.js", "Express.js", "REST APIs", ".NET MVC", ".NET Web API"],
  },
  {
    title: "Databases",
    Icon: CircleStackIcon,
    items: ["PostgreSQL", "SQLite", "MySQL"],
  },
  {
    title: "Tools & Design",
    Icon: WrenchScrewdriverIcon,
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "XAMPP", "Unity"],
  },
  {
    title: "AI Tools",
    Icon: SparklesIcon,
    items: ["Claude Code", "ChatGPT", "GitHub Copilot"],
  },
  {
    title: "Core Knowledge",
    Icon: AcademicCapIcon,
    items: ["OOP", "Data Structures & Algorithms", "System Analysis & Design", "Responsive Design"],
  },
];

function Skills() {
  const skillsRef = useRef(null);

  useReveal(skillsRef, ".skill-summary, .skill-group", { stagger: 0.07 });

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <AnimatedBackground
        className="skills-canvas"
        color="#49d17d"
        count={12}
        speed={2}
        linkDistance={110}
        alpha={0.16}
      />
      <div className="skills-container">
        <div className="skills-header">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I use to ship projects.</h2>
          <p className="section-lede">
            Strong frontend depth with full-stack range, from Figma designs and
            React interfaces to Node.js APIs and PostgreSQL databases.
          </p>
        </div>
        <div className="skills-layout">
          <div className="skill-summary">
            <span>Core Focus</span>
            <h3>End-to-end web apps: clean interfaces, solid APIs, and the data behind them.</h3>
            <p>
              I care about clean UI details, clear information hierarchy,
              reusable components, and features that stay easy to understand
              after the first version.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const GroupIcon = group.Icon;

              return (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-header">
                    <GroupIcon className="skill-group-icon" aria-hidden="true" />
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="skill-chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

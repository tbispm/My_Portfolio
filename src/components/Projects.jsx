import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { otherProjects, projects, roleFilters } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/projects.css";

const matchesRole = (project, role) => role === "all" || project.roles.includes(role);

const typeClass = (type) => `type-${type.split(" ")[0].toLowerCase()}`;

function ProjectGallery({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef(null);
  const total = project.images.length;

  const next = () => setIndex((value) => (value + 1) % total);
  const prev = () => setIndex((value) => (value - 1 + total) % total);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (total > 1 && event.key === "ArrowRight") setIndex((value) => (value + 1) % total);
      if (total > 1 && event.key === "ArrowLeft") setIndex((value) => (value - 1 + total) % total);
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose, total]);

  return (
    <div
      className="image-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="modal-content">
        <div className="modal-toolbar">
          <p>
            {project.title}
            {total > 1 && <span> · {index + 1} / {total}</span>}
          </p>
          <button ref={closeRef} className="close-btn" onClick={onClose} aria-label="Close gallery">
            <XMarkIcon aria-hidden="true" />
          </button>
        </div>

        <div className="gallery-container">
          <img
            key={index}
            src={project.images[index]}
            alt={`${project.title} screenshot ${index + 1} of ${total}`}
            className="modal-image"
          />

          {total > 1 && (
            <>
              <button className="gallery-btn prev-btn" onClick={prev} aria-label="Previous image">
                <ChevronLeftIcon aria-hidden="true" />
              </button>
              <button className="gallery-btn next-btn" onClick={next} aria-label="Next image">
                <ChevronRightIcon aria-hidden="true" />
              </button>

              <div className="image-indicators">
                {project.images.map((_, dotIndex) => (
                  <button
                    type="button"
                    key={dotIndex}
                    className={`dot ${dotIndex === index ? "active" : ""}`}
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Show image ${dotIndex + 1}`}
                    aria-current={dotIndex === index ? "true" : undefined}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projectsRef = useRef(null);
  const [activeRole, setActiveRole] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const closeGallery = useCallback(() => setSelectedProject(null), []);

  useReveal(projectsRef, ".project-filters, .project-card");

  const visibleProjects = projects.filter((project) => matchesRole(project, activeRole));
  const visibleOther = otherProjects.filter((project) => matchesRole(project, activeRole));
  const countFor = (role) =>
    [...projects, ...otherProjects].filter((project) => matchesRole(project, role)).length;

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <AnimatedBackground
        className="projects-canvas"
        color="#49d17d"
        count={16}
        speed={2.2}
        linkDistance={115}
        alpha={0.18}
      />
      <div className="projects-header">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected work across the stack.</h2>
        <p className="section-lede">
          Production platforms, full-stack builds, and UI/UX design work. FlyQM
          and Ticket Anywhere are live public products; other links are demos or
          source code. Filter by the role you're hiring for.
        </p>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects by role">
        {roleFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`filter-btn ${activeRole === filter.id ? "active" : ""}`}
            aria-pressed={activeRole === filter.id}
            onClick={() => setActiveRole(filter.id)}
          >
            {filter.label}
            <span className="filter-count">{countFor(filter.id)}</span>
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article key={project.id} className="project-card">
            <button
              type="button"
              className="project-image-container"
              onClick={() => setSelectedProject(project)}
              aria-label={`Open ${project.title} gallery`}
            >
              <img src={project.images[0]} alt="" className="project-image" loading="lazy" />
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <span className={`project-status ${typeClass(project.type)}`}>{project.type}</span>
              {project.images.length > 1 && (
                <span className="image-count">{project.images.length} images</span>
              )}
            </button>

            <div className="project-content">
              <div>
                <h3>{project.title}</h3>
                {project.context && <p className="project-context">{project.context}</p>}
                <p>{project.description}</p>
              </div>
              <ul className="project-tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="project-link project-link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.liveLabel ?? "Live Demo"}
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {!project.githubLink && !project.liveLink && project.mediaNote && (
                  <span className="project-note">{project.mediaNote}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleOther.length > 0 && (
        <div className="other-projects">
          <h3 className="other-projects-title">More academic work</h3>
          <ul className="other-projects-list">
            {visibleOther.map((project) => (
              <li key={project.id} className="other-project">
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <ul className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedProject && (
        <ProjectGallery project={selectedProject} onClose={closeGallery} />
      )}
    </section>
  );
}

export default Projects;

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { projects } from "../data/projects";
import "../styles/projects.css";

function Projects() {
  const projectsRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const elements = projectsRef.current?.querySelectorAll(".project-card");
    if (elements) {
      gsap.set(elements, { opacity: 1, y: 0 });
      gsap.fromTo(
        elements,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" }
      );
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = projectsRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines = [];
    for (let i = 0; i < 16; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2.2,
        vy: (Math.random() - 0.5) * 2.2,
      });
    }

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#49d17d";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.18;

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
            if (dist < 115) {
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

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <canvas ref={canvasRef} className="projects-canvas"></canvas>
      <div className="projects-header">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected work with real product flows.</h2>
        <p className="section-lede">
          Some earlier demos are frontend-only deployments, while production links
          such as Ticket Anywhere and FlyQM show the live public-facing experience.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card">
            <button
              type="button"
              className="project-image-container"
              onClick={() => handleImageClick(project)}
              aria-label={`Open ${project.title} gallery`}
            >
              <img src={project.images[0]} alt={project.title} className="project-image" />
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              {project.status && (
                <span className="project-status">{project.status}</span>
              )}
              {project.images.length > 1 && (
                <span className="image-count">{project.images.length} images</span>
              )}
            </button>

            <div className="project-content">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
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
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="project-link project-link-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
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

      {selectedProject && (
        <div className="image-modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal} aria-label="Close gallery">
              x
            </button>

            <div className="gallery-container">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="modal-image"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button className="gallery-btn prev-btn" onClick={prevImage} aria-label="Previous image">
                    &lt;
                  </button>
                  <button className="gallery-btn next-btn" onClick={nextImage} aria-label="Next image">
                    &gt;
                  </button>

                  <div className="image-indicators">
                    {selectedProject.images.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        className={`dot ${index === currentImageIndex ? "active" : ""}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

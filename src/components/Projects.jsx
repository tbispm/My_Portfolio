import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import faqImage from "../assets/faqpage.png";
import FAQHome from "../assets/FAQHome.png";
import FAQList from "../assets/FAQList.png";
import FAQFeedback from "../assets/FAQFeedback.png";
import CarShowroomImage from "../assets/CarShowroom.png";
import CarCard from "../assets/CarCard.png";
import CarDetail from "../assets/CarDetail.png";
import CarHome from "../assets/CarHome.png";
import CarLogo from "../assets/CarLogo.png";
import RentCar from "../assets/RentCar.png";
import SoldCar from "../assets/SoldCar.png";
import TicketImage from "../assets/TicketAnywhere.png";
import FlyQMLogo from "../assets/FlyQMLogo.jpg";
import HorizonEliteHero from "../assets/HorizonEliteHero.png";
import PortfolioImage from "../assets/portfolio.png";
import EcommerceImage from "../assets/ECommerce.png";
import ECommHome from "../assets/ECommHome.png";
import ECommOrder from "../assets/ECommOrder.png";
import ECommCheckout from "../assets/ECommCheckout.png";
import ElementaryImage from "../assets/elementaryschool.png";
import EleAbout from "../assets/EleAbout.png";
import EleCourse from "../assets/EleCourse.png";
import EleTeachers from "../assets/EleTeachers.png";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "RIC Gaming Club FAQ Page ChatBot",
    description:
      "Class project chatbot website for students interested in RIC Gaming Club, focused on making club information easy to access through a simple Q&A flow.",
    images: [faqImage, FAQHome, FAQList, FAQFeedback],
    tags: ["HTML", "CSS", "JavaScript", "Chatbot"],
    githubLink:
      "https://github.com/pyaemoe23212/RIC-Gaming-Club-FAQ-Page.git",
    liveLink:
      "https://pyaemoe23212.github.io/RIC-Gaming-Club-FAQ-Page/Ask-a-question/ask_questions.html",
  },
  {
    id: 2,
    title: "CarShowroom Website",
    description:
      "Developed the frontend using React (Vite) and Tailwind CSS as part of a MERN stack project. Focused on creating a clean, responsive dashboard for available and rentable cars.",
    images: [
      CarHome,
      CarShowroomImage,
      CarLogo,
      CarCard,
      CarDetail,
      SoldCar,
      RentCar,
    ],
    tags: ["React", "Vite", "Tailwind CSS", "MERN"],
    githubLink: "https://github.com/pyaemoe23212/CarShowroom_User.git",
    liveLink: "https://carshowroomwebsite.netlify.app/",
  },
  {
    id: 3,
    title: "Ticket Anywhere Website",
    description:
      "Developed the frontend using React (Vite) and Tailwind CSS for a Python Django backend, focusing on a responsive public experience for browsing events, viewing details, and booking tickets.",
    images: [TicketImage],
    tags: ["React", "Django API", "Booking Flow", "Production"],
    githubLink: "https://github.com/pyaemoe23212/Ticket_Website_User.git",
    liveLink: "https://ticketsany.com/",
  },
  {
    id: 6,
    title: "FlyQM AirTicket Booking Website & Admin Panel",
    description:
      "Internship project for an air ticket booking platform. Built customer booking flows for flight search, passenger details, and booking review, with payments handled offline through an agent or admin. Implemented admin features for booking and payment status updates, ticket upload/download, audit history, flight search, price overrides, role-based user and staff management, and homepage content controls.",
    images: [FlyQMLogo],
    tags: ["Internship", "React", "Admin Panel", "Flight Booking"],
    liveLink: "https://flyqm.com/en",
  },
  {
    id: 7,
    title: "Horizon Elite AirTicket Platform",
    description:
      "Draft portfolio entry for the Horizon Elite air ticket platform. This project includes a modern flight booking user experience, backend services, booking management flows, payment-related modules, add-ons, check-in, tickets, boarding pass generation, and customer account features. Final photos or a video walkthrough will be added later.",
    images: [HorizonEliteHero],
    tags: ["Draft", "React", "TypeScript", "Node.js", "Flight Platform"],
    status: "Draft",
    mediaNote: "Photos or video walkthrough coming soon",
  },
  {
    id: 8,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed my own responsive portfolio using React and Vite. It presents my projects, skills, profile, theme switching, animated sections, and interactive project image galleries in a clean modern interface.",
    images: [PortfolioImage],
    tags: ["React", "Vite", "GSAP", "Responsive UI", "Portfolio"],
    mediaNote: "You are viewing this project here",
  },
  {
    id: 4,
    title: "Mini ECommerce Website",
    description:
      "Developed the frontend using React (Vite) and Tailwind CSS for a PHP Laravel backend, featuring product browsing, cart management, and a smooth checkout experience.",
    images: [EcommerceImage, ECommHome, ECommCheckout, ECommOrder],
    tags: ["React", "Laravel API", "E-Commerce", "Checkout"],
    githubLink: "https://github.com/pyaemoe23212/E-Commerce-Website.git",
  },
  {
    id: 5,
    title: "Online Course E-Learning Website for Elementary School UI/UX",
    description:
      "Designed using Figma to create an intuitive and friendly learning interface for young students.",
    images: [ElementaryImage, EleCourse, EleAbout, EleTeachers],
    tags: ["Figma", "UI/UX", "Education", "Prototype"],
  },
];

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

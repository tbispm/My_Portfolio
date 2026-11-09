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
import TicketHome from "../assets/TicketAnywhereHome.png";
import FlyQMLogo from "../assets/FlyQMLogo.jpg";
import HorizonEliteHomePage from "../assets/Home Page.png";
import HorizonEliteSignUp from "../assets/SignUp.png";
import HorizonEliteFlightResult from "../assets/Flight Result.png";
import HorizonElitePassengerInfo from "../assets/Passenger Information.png";
import HorizonEliteAdditionalServices from "../assets/Additional Services.png";
import HorizonElitePersonalizedServices from "../assets/Personalized Services.png";
import HorizonEliteManageBooking from "../assets/Manage Booking.png";
import HorizonEliteProfilePage from "../assets/Profile Page.png";
import PortfolioImage from "../assets/portfolio.png";
import EcommerceImage from "../assets/ECommerce.png";
import ECommHome from "../assets/ECommHome.png";
import ECommOrder from "../assets/ECommOrder.png";
import ECommCheckout from "../assets/ECommCheckout.png";
import ElementaryImage from "../assets/elementaryschool.png";
import EleAbout from "../assets/EleAbout.png";
import EleCourse from "../assets/EleCourse.png";
import EleTeachers from "../assets/EleTeachers.png";

/** Role filters shown above the project grid. */
export const roleFilters = [
  { id: "all", label: "All Work" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "uiux", label: "UI/UX" },
];

/** Featured projects with screenshots, in display order. */
export const projects = [
  {
    id: "flyqm",
    title: "FlyQM Flight Booking Platform",
    type: "Internship",
    context: "Frontend Developer Intern · Infinity Digital LLC · Jan – May 2026",
    description:
      "Developed user-side and admin-side interfaces of a live flight booking platform. Built customer flows for flight search, passenger details, and booking review, plus admin tools for booking and payment status, ticket upload/download, audit history, price overrides, role-based staff management, and homepage content. Built reusable, responsive UI components and worked with the backend team on REST API integration and data handling.",
    images: [FlyQMLogo],
    tags: ["React", "Vite", "Tailwind CSS", "React Router v7", "REST API"],
    roles: ["frontend"],
    liveLink: "https://flyqm.com/en",
    liveLabel: "Visit Live Site",
  },
  {
    id: "horizon-elite",
    title: "HorizonElite Airline Booking System",
    type: "Team Project",
    context: "Co-built full-stack platform, including documentation",
    description:
      "Full-stack airline booking platform covering flight search, passenger info, add-ons, payment, booking management, online check-in, and ticket and boarding pass generation, with a React/TypeScript UI and a Node.js/Express REST API on PostgreSQL.",
    images: [
      HorizonEliteHomePage,
      HorizonEliteSignUp,
      HorizonEliteFlightResult,
      HorizonElitePassengerInfo,
      HorizonEliteAdditionalServices,
      HorizonElitePersonalizedServices,
      HorizonEliteManageBooking,
      HorizonEliteProfilePage,
    ],
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    roles: ["fullstack", "frontend"],
    githubLink: "https://github.com/tbispm/HorizonElite_Frontend-User-.git",
    mediaNote: "Screenshots arranged in booking-flow order",
  },
  {
    id: "ticket-anywhere",
    title: "Ticket Anywhere Event Ticketing",
    type: "Team Project",
    context: "Frontend contributor to a live production platform",
    description:
      "Built the public-facing frontend for an event-ticketing platform on a Python Django backend: browsing events, viewing details, and booking tickets on a fully responsive layout.",
    images: [TicketHome],
    tags: ["React", "Vite", "Tailwind CSS", "Django API"],
    roles: ["frontend"],
    githubLink: "https://github.com/pyaemoe23212/Ticket_Website_User.git",
    liveLink: "https://ticketsany.com/",
    liveLabel: "Visit Live Site",
  },
  {
    id: "car-showroom",
    title: "Car Showroom Dashboard",
    type: "Personal Project",
    description:
      "Designed and developed the dashboard for available and rentable cars with a clean, intuitive interface, built as the React frontend of a MERN stack project.",
    images: [CarHome, CarShowroomImage, CarLogo, CarCard, CarDetail, SoldCar, RentCar],
    tags: ["React", "Vite", "Tailwind CSS", "MERN"],
    roles: ["frontend"],
    githubLink: "https://github.com/pyaemoe23212/CarShowroom_User.git",
    liveLink: "https://carshowroomwebsite.netlify.app/",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    type: "Personal Project",
    description:
      "Responsive e-commerce frontend for a PHP Laravel backend, with product browsing, cart management, and a smooth checkout experience.",
    images: [EcommerceImage, ECommHome, ECommCheckout, ECommOrder],
    tags: ["React", "Vite", "Tailwind CSS", "Laravel API"],
    roles: ["frontend"],
    githubLink: "https://github.com/pyaemoe23212/E-Commerce-Website.git",
  },
  {
    id: "faq-chatbot",
    title: "FAQ Page with AI Chatbot",
    type: "Academic Project",
    description:
      "Responsive FAQ website for the RIC Gaming Club, enhanced with AI-powered chatbot support so students can find club information through a simple Q&A flow.",
    images: [faqImage, FAQHome, FAQList, FAQFeedback],
    tags: ["HTML", "CSS", "JavaScript", "AI Integration"],
    roles: ["frontend"],
    githubLink: "https://github.com/pyaemoe23212/RIC-Gaming-Club-FAQ-Page.git",
    liveLink:
      "https://pyaemoe23212.github.io/RIC-Gaming-Club-FAQ-Page/Ask-a-question/ask_questions.html",
  },
  {
    id: "elearning-uiux",
    title: "E-Learning Website for Elementary School",
    type: "Academic Project",
    description:
      "UI/UX design in Figma for an online course platform, creating an intuitive, friendly learning interface for young students.",
    images: [ElementaryImage, EleCourse, EleAbout, EleTeachers],
    tags: ["Figma", "UI/UX Design", "Prototype"],
    roles: ["uiux"],
    mediaNote: "Figma design prototype",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    type: "Personal Project",
    description:
      "This site: a responsive React portfolio with role-based project filtering, theme switching, scroll animations, and interactive image galleries.",
    images: [PortfolioImage],
    tags: ["React", "Vite", "GSAP", "Responsive UI"],
    roles: ["frontend", "uiux"],
    mediaNote: "You are viewing this project here",
  },
];

/** Additional academic work without screenshots, shown as a compact list. */
export const otherProjects = [
  {
    id: "dotnet-crud",
    title: "Full-Stack CRUD Application",
    type: "Academic Project",
    description: "Full-stack CRUD application with database integration.",
    tags: [".NET MVC", ".NET Web API", "SQLite"],
    roles: ["fullstack"],
  },
  {
    id: "dbms",
    title: "Database Management System",
    type: "Academic Project",
    description: "Data management system with a structured relational database design.",
    tags: ["XAMPP", "SQLite"],
    roles: ["fullstack"],
  },
  {
    id: "unity-games",
    title: "Maze Roller & Dimension Traveler",
    type: "Academic Project",
    description:
      "Interactive 3D games focusing on gameplay mechanics, player interaction, and immersive design.",
    tags: ["Unity", "3D Games"],
    roles: [],
  },
];

export const projectCount = projects.length + otherProjects.length;

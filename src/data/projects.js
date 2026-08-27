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

export const projects = [
  {
    id: 1,
    title: "RIC Gaming Club FAQ Page ChatBot",
    description:
      "Class project chatbot website for students interested in RIC Gaming Club, focused on making club information easy to access through a simple Q&A flow.",
    images: [faqImage, FAQHome, FAQList, FAQFeedback],
    tags: ["HTML", "CSS", "JavaScript", "Chatbot"],
    githubLink: "https://github.com/pyaemoe23212/RIC-Gaming-Club-FAQ-Page.git",
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
    images: [TicketHome],
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
      "Full-stack air ticket platform with a modern flight booking experience, backend services, booking management flows, payment-related modules, add-ons, online check-in, ticket and boarding pass generation, and customer account features.",
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
    tags: ["React", "TypeScript", "Node.js", "Flight Platform"],
    githubLink: "https://github.com/tbispm/HorizonElite_Frontend-User-.git",
    mediaNote: "Screenshots arranged in booking-flow order",
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

export const projectCount = projects.length;

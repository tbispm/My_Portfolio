import AnimatedBackground from "./AnimatedBackground";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <AnimatedBackground
        className="footer-canvas"
        color="#38bdf8"
        count={6}
        speed={1.6}
        alpha={0.14}
        connect={false}
      />
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} TunBhone PyaeMoe. Built with React,
          Vite, and GSAP.
        </p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;

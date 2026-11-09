import { useRef } from "react";
import { EnvelopeIcon, CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useReveal } from "../hooks/useReveal";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "tunbhonepyaemoe@gmail.com",
    href: "mailto:tunbhonepyaemoe@gmail.com",
    Icon: EnvelopeIcon,
  },
  {
    label: "GitHub",
    value: "tbispm",
    href: "https://github.com/tbispm",
    Icon: CodeBracketIcon,
  },
  {
    label: "LinkedIn",
    value: "Tun Bhone Pyae Moe",
    href: "https://www.linkedin.com/in/tun-bhone-pyae-moe-5092a0372/",
    Icon: LinkIcon,
  },
];

function Contact() {
  const contactRef = useRef(null);

  useReveal(contactRef, ".contact-heading, .contact-card, .contact-note");

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <AnimatedBackground
        className="contact-canvas"
        color="#f97316"
        count={10}
        speed={2}
        linkDistance={110}
        alpha={0.16}
      />
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let's build something useful.</h2>
          <p className="section-lede">
            Open to full-time Full-Stack, Frontend, Software Engineer, and UI/UX
            roles, as well as freelance projects that need clean implementation.
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => {
            const ContactIcon = link.Icon;
            const isEmail = link.label === "Email";

            return (
              <a
                key={link.label}
                href={link.href}
                className="contact-card"
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
              >
                <ContactIcon className="contact-icon" aria-hidden="true" />
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            );
          })}
        </div>

        <p className="contact-note">
          Based in Bangkok, Thailand. Available for remote collaboration.
        </p>
      </div>
    </section>
  );
}

export default Contact;

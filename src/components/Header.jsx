import { useEffect, useRef, useState, useContext } from 'react';
import { useReveal } from '../hooks/useReveal';
import { SunIcon, MoonIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { ThemeContext } from '../context/themeContextValue';
import '../styles/header.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('home');
  const navListRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const updateActiveSection = () => {
      const headerOffset = 104;
      const viewportMarker = window.scrollY + headerOffset;
      const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (pageBottom) {
        setActiveSection('contact');
        return;
      }

      const currentSection = navItems.reduce((current, section) => {
        const element = document.getElementById(section.id);
        if (!element) return current;

        return element.offsetTop <= viewportMarker ? section.id : current;
      }, 'home');

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameId = null;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useReveal(navListRef, '.nav-item', { y: -20, duration: 1, stagger: 0.12, immediate: true });

  useEffect(() => {
    const activeLink = navListRef.current?.querySelector('.nav-item.active .nav-link');
    activeLink?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeSection]);

  return (
    <header className="header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="brand-mark" aria-label="TunBhone PyaeMoe home">
          <SparklesIcon className="brand-icon" />
          <span>TBPM</span>
        </a>
        <ul className="nav-list" ref={navListRef}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              <a
                className="nav-link"
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <SunIcon className="theme-icon" />
          ) : (
            <MoonIcon className="theme-icon" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { GITHUB_URL, LINKEDIN_URL, RESUME_PATH } from '../../data';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps { theme: string; onToggleTheme: () => void; }

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => { setOpen(false); setActive(href); };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-brand" onClick={() => handleNav('#home')}>
          <span className="brand-name">Chinmay Jaiswal</span>
          <span className="brand-dot" aria-hidden="true" />
        </a>

        <nav className="navbar-links" aria-label="Primary navigation">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={`nav-link${active === l.href ? ' active' : ''}`} onClick={() => handleNav(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={RESUME_PATH} download className="btn btn-primary resume-btn">Resume</a>
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <nav>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className={`mobile-nav-link${active === l.href ? ' active' : ''}`} onClick={() => handleNav(l.href)}>
                {l.label}
              </a>
            ))}
            <div className="mobile-menu-footer">
              <a href={RESUME_PATH} download className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

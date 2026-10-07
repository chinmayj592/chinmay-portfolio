import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { GITHUB_URL, EMAIL, RESUME_PATH } from '../../data';
import './Hero.css';

const TECH_PILLS = ['Java', 'Spring Boot', 'Distributed Systems', 'AWS', 'Kafka', 'Redis', 'React', 'AI/LLM'];

const ARCH_NODES = [
  { label: 'Client', x: 50, y: 8 },
  { label: 'API Gateway', x: 50, y: 24 },
  { label: 'Kafka', x: 20, y: 44 },
  { label: 'Service', x: 50, y: 44 },
  { label: 'Redis', x: 80, y: 44 },
  { label: 'MySQL', x: 35, y: 68 },
  { label: 'AI/LLM', x: 65, y: 68 },
  { label: 'AWS', x: 50, y: 88 },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-arch-viz">
          <svg viewBox="0 0 100 100" className="arch-svg" aria-hidden="true">
            <line x1="50" y1="8" x2="50" y2="24" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="50" y1="24" x2="20" y2="44" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="50" y1="24" x2="50" y2="44" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="50" y1="24" x2="80" y2="44" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="20" y1="44" x2="35" y2="68" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="50" y1="44" x2="35" y2="68" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="50" y1="44" x2="65" y2="68" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="80" y1="44" x2="65" y2="68" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="35" y1="68" x2="50" y2="88" stroke="var(--border-accent)" strokeWidth="0.4" />
            <line x1="65" y1="68" x2="50" y2="88" stroke="var(--border-accent)" strokeWidth="0.4" />
            {ARCH_NODES.map(n => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="3.5" fill="var(--bg-card)" stroke="var(--border-accent)" strokeWidth="0.5" />
                <circle cx={n.x} cy={n.y} r="1.5" fill="var(--accent)" opacity="0.7" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge fade-up visible">
          <span className="status-dot" aria-hidden="true" />
          Available for Backend &amp; Full-Stack Roles
        </div>

        <h1 className="hero-title fade-up visible delay-1">
          Building Scalable<br />
          <span className="hero-title-accent">Backend Systems</span><br />
          &amp; AI-Powered Applications
        </h1>

        <p className="hero-subtitle fade-up visible delay-2">
          Full Stack Developer specializing in <strong>Java</strong>, <strong>Spring Boot</strong>,
          distributed systems, cloud-native applications, and modern AI/LLM integrations.
          I build systems that handle real load, fail gracefully, and scale without drama.
        </p>

        <div className="hero-pills fade-up visible delay-3" aria-label="Core technologies">
          {TECH_PILLS.map(t => <span key={t} className="hero-pill">{t}</span>)}
        </div>

        <div className="hero-ctas fade-up visible delay-4">
          <a href="#projects" className="btn btn-primary">View My Work <ArrowDown size={16} /></a>
          <a href="#contact" className="btn btn-secondary">Get In Touch <Mail size={16} /></a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GithubIcon size={16} /> GitHub
          </a>
        </div>

        <div className="hero-meta fade-up visible delay-5">
          <span>Chinmay Jaiswal</span>
          <span className="hero-meta-sep" aria-hidden="true">·</span>
          <span>Pune, India</span>
          <span className="hero-meta-sep" aria-hidden="true">·</span>
          <a href={`mailto:${EMAIL}`} className="hero-meta-link">{EMAIL}</a>
        </div>

        <a href={RESUME_PATH} download className="hero-resume-link fade-up visible delay-5">
          <ExternalLink size={14} /> Download Resume
        </a>
      </div>

      <a href="#about" className="hero-scroll-hint" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

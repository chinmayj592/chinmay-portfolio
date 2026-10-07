import { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { EMAIL, PHONE, GITHUB_URL, LINKEDIN_URL, RESUME_PATH } from '../../data';
import { useInView } from '../../hooks/useInView';
import './Contact.css';

export default function Contact() {
  const { ref, inView } = useInView<HTMLElement>();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className={`contact-inner fade-up${inView ? ' visible' : ''}`}>
          <div className="contact-header">
            <p className="section-label"><span aria-hidden="true">◆</span> Contact</p>
            <h2 className="contact-title">Let's Build Something Great</h2>
            <p className="contact-subtitle">
              I'm open to opportunities in <strong>backend engineering</strong>, full-stack development,
              cloud-native systems, and AI-powered applications. If you're building something ambitious,
              I'd love to hear about it.
            </p>
          </div>

          <div className="contact-cards">
            <a href={`mailto:${EMAIL}`} className="contact-card card">
              <div className="contact-card-icon" style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}>
                <Mail size={22} />
              </div>
              <div>
                <p className="contact-card-label">Email</p>
                <p className="contact-card-value">{EMAIL}</p>
              </div>
              <button
                className="copy-btn"
                onClick={e => { e.preventDefault(); copyEmail(); }}
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </a>

            <a href={`tel:${PHONE}`} className="contact-card card">
              <div className="contact-card-icon" style={{ background: 'var(--green-dim)', color: 'var(--green)' }}>
                <Phone size={22} />
              </div>
              <div>
                <p className="contact-card-label">Phone</p>
                <p className="contact-card-value">{PHONE}</p>
              </div>
            </a>
          </div>

          <div className="contact-ctas">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary contact-cta-btn">
              <Mail size={18} /> Email Me
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-cta-btn">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost contact-cta-btn">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href={RESUME_PATH} download className="btn btn-ghost contact-cta-btn">
              Download Resume
            </a>
          </div>

          <p className="contact-note">
            Based in Pune, India · Open to remote and on-site opportunities
          </p>
        </div>
      </div>
    </section>
  );
}

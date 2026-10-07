import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/BrandIcons';
import { GITHUB_URL, LINKEDIN_URL, LEETCODE_URL, EMAIL } from '../../data';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">Chinmay Jaiswal</span>
          <p className="footer-tagline">Full Stack Developer · Java · Spring Boot · Distributed Systems · AI</p>
        </div>
        <div className="footer-links">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="LeetCode">
            <LeetcodeIcon size={18} />
          </a>
          <a href={`mailto:${EMAIL}`} className="footer-icon-link" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="footer-copy">© {year} Chinmay Jaiswal. All rights reserved.</p>
      </div>
    </footer>
  );
}

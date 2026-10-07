import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/BrandIcons';
import { GITHUB_URL, LINKEDIN_URL, LEETCODE_URL } from '../../data';
import { useInView } from '../../hooks/useInView';
import './CodingProfiles.css';

const PROFILES = [
  {
    name: 'GitHub',
    handle: '@chinmayj592',
    description: 'Source code for personal projects, distributed systems experiments, and backend engineering work.',
    url: GITHUB_URL,
    Icon: GithubIcon,
    color: 'var(--text-primary)',
    colorDim: 'var(--bg-3)',
    stats: [{ label: 'Projects', value: '10+' }, { label: 'Focus', value: 'Backend' }],
  },
  {
    name: 'LinkedIn',
    handle: 'chinmay-jaiswal',
    description: 'Professional profile with internship experience, skills, and recommendations from colleagues.',
    url: LINKEDIN_URL,
    Icon: LinkedinIcon,
    color: '#0a66c2',
    colorDim: 'rgba(10,102,194,0.1)',
    stats: [{ label: 'Experience', value: '2 Roles' }, { label: 'Network', value: 'Growing' }],
  },
  {
    name: 'LeetCode',
    handle: 'chinmayJaiswal_75591',
    description: 'Consistent problem solving in DSA — arrays, trees, graphs, dynamic programming, and system design.',
    url: LEETCODE_URL,
    Icon: LeetcodeIcon,
    color: 'var(--orange)',
    colorDim: 'var(--orange-dim)',
    stats: [{ label: 'Focus', value: 'DSA' }, { label: 'Topics', value: 'Algorithms' }],
  },
];

export default function CodingProfiles() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section className="section coding-section" ref={ref}>
      <div className="container">
        <div className={`fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Developer Profiles</p>
          <h2 className="section-title">Find Me Online</h2>
          <p className="section-subtitle">Where I write code, share work, and sharpen problem-solving skills.</p>
        </div>
        <div className={`coding-grid fade-up${inView ? ' visible' : ''} delay-2`}>
          {PROFILES.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="coding-card card" aria-label={`Visit ${p.name} profile`}>
              <div className="coding-card-header">
                <div className="coding-icon" style={{ background: p.colorDim, color: p.color }}>
                  <p.Icon size={22} />
                </div>
                <ExternalLink size={16} className="coding-external" />
              </div>
              <h3 className="coding-name">{p.name}</h3>
              <p className="coding-handle">{p.handle}</p>
              <p className="coding-desc">{p.description}</p>
              <div className="coding-stats">
                {p.stats.map(s => (
                  <div key={s.label} className="coding-stat">
                    <span className="coding-stat-value">{s.value}</span>
                    <span className="coding-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

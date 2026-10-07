import { useState, type CSSProperties } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, X } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { projects } from '../../data';
import { useInView } from '../../hooks/useInView';
import type { Project } from '../../types';
import './Projects.css';

const NODE_COLORS: Record<string, string> = {
  client: 'var(--green)', gateway: 'var(--accent)', queue: 'var(--orange)',
  service: 'var(--accent)', cache: 'var(--purple)', db: 'var(--green)',
  monitor: 'var(--orange)', pattern: 'var(--purple)',
};

function ArchDiagram({ nodes }: { nodes: NonNullable<Project['architectureFlow']> }) {
  return (
    <div className="arch-diagram" aria-label="Architecture diagram">
      {nodes.map((node, i) => (
        <div key={node.id} className="arch-node-wrap">
          <div className="arch-node" style={{ '--node-color': NODE_COLORS[node.type] } as CSSProperties}>
            <span className="arch-node-label">{node.label}</span>
            {node.sublabel && <span className="arch-node-sub">{node.sublabel}</span>}
          </div>
          {i < nodes.length - 1 && <div className="arch-arrow" aria-hidden="true">↓</div>}
        </div>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <div className="modal-header">
          <span className="badge">Featured Project</span>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>
        <div className="modal-body">
          <div className="modal-left">
            <section>
              <h3 className="modal-section-title">Overview</h3>
              <p className="modal-text">{project.description}</p>
            </section>
            <section>
              <h3 className="modal-section-title">Key Achievements</h3>
              <ul className="modal-list">
                {project.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </section>
            {project.challenges && project.challenges.length > 0 && (
              <section>
                <h3 className="modal-section-title">Engineering Challenges</h3>
                <ul className="modal-list">
                  {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </section>
            )}
            {project.learnings && project.learnings.length > 0 && (
              <section>
                <h3 className="modal-section-title">Key Learnings</h3>
                <ul className="modal-list">
                  {project.learnings.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
              </section>
            )}
            <section>
              <h3 className="modal-section-title">Tech Stack</h3>
              <div className="modal-tech">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </section>
            <div className="modal-actions">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <GithubIcon size={16} /> View on GitHub
              </a>
            </div>
          </div>
          <div className="modal-right">
            <h3 className="modal-section-title">Performance Metrics</h3>
            <div className="modal-metrics">
              {project.metrics.map(m => (
                <div key={m.label} className="metric-card">
                  <div className="metric-value">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
            {project.architectureFlow && (
              <>
                <h3 className="modal-section-title" style={{ marginTop: '24px' }}>Architecture Flow</h3>
                <ArchDiagram nodes={project.architectureFlow} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`featured-project fade-up${inView ? ' visible' : ''}`}>
      <div className="featured-project-inner">
        <div className="featured-left">
          <div className="featured-badges">
            <span className="badge">Featured Project</span>
            <span className="badge" style={{ background: 'var(--orange-dim)', color: 'var(--orange)', borderColor: 'rgba(245,158,11,0.3)' }}>Distributed Systems</span>
          </div>
          <h3 className="featured-title">{project.title}</h3>
          <p className="featured-subtitle">{project.subtitle}</p>
          <p className="featured-desc">{project.description}</p>

          <div className="featured-metrics">
            {project.metrics.map(m => (
              <div key={m.label} className="featured-metric">
                <span className="featured-metric-value">{m.value}</span>
                <span className="featured-metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="featured-tech">
            {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>

          <div className="featured-actions">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <GithubIcon size={16} /> View on GitHub
            </a>
            <button className="btn btn-secondary" onClick={() => setShowModal(true)}>
              <ExternalLink size={16} /> View Details
            </button>
          </div>
        </div>

        <div className="featured-right">
          <div className="featured-arch-card">
            <div className="featured-arch-header">
              <span className="featured-arch-title">System Architecture</span>
              <span className="arch-live-badge"><span className="arch-live-dot" />Live Design</span>
            </div>
            {project.architectureFlow && <ArchDiagram nodes={project.architectureFlow} />}
          </div>
        </div>
      </div>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card card">
      <div className="project-card-header">
        <div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-subtitle">{project.subtitle}</p>
        </div>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="View on GitHub">
          <GithubIcon size={18} />
        </a>
      </div>

      <p className="project-card-desc">{project.description}</p>

      {project.metrics.length > 0 && (
        <div className="project-card-metrics">
          {project.metrics.map(m => (
            <div key={m.label} className="project-mini-metric">
              <span className="project-mini-value">{m.value}</span>
              <span className="project-mini-label">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="project-card-tech">
        {project.tech.slice(0, 6).map(t => <span key={t} className="tech-tag">{t}</span>)}
        {project.tech.length > 6 && <span className="tech-tag">+{project.tech.length - 6}</span>}
      </div>

      {project.achievements.length > 0 && (
        <div className="project-expand">
          <button className="project-expand-btn" onClick={() => setExpanded(e => !e)} aria-expanded={expanded}>
            {expanded ? <><ChevronUp size={14} /> Hide Details</> : <><ChevronDown size={14} /> Show Details</>}
          </button>
          {expanded && (
            <ul className="project-expand-list">
              {project.achievements.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  const { ref, inView } = useInView<HTMLElement>();
  const featured = projects.find(p => p.featured)!;
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <div className={`fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Production-oriented projects demonstrating distributed systems design, backend engineering, and full-stack development.
          </p>
        </div>

        <FeaturedProject project={featured} />

        <div className={`other-projects-header fade-up${inView ? ' visible' : ''} delay-2`}>
          <h3 className="other-projects-title">Other Projects</h3>
        </div>
        <div className={`other-projects-grid fade-up${inView ? ' visible' : ''} delay-3`}>
          {others.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

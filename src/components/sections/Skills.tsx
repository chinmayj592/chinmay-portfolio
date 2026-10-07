import { Code2, Server, Monitor, Database, Zap, Cloud, Activity, GitBranch, Brain } from 'lucide-react';
import { skillCategories } from '../../data';
import { useInView } from '../../hooks/useInView';
import './Skills.css';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Server, Monitor, Database, Zap, Cloud, Activity, GitBranch, Brain,
};

export default function Skills() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <div className={`fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Technical Skills</p>
          <h2 className="section-title">The Stack I Work With</h2>
          <p className="section-subtitle">
            A curated set of technologies I've used in production, internships, and serious personal projects.
          </p>
        </div>

        <div className={`skills-grid fade-up${inView ? ' visible' : ''} delay-2`}>
          {skillCategories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] || Code2;
            return (
              <div key={cat.name} className="skill-card" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <Icon size={16} />
                  </div>
                  <h3 className="skill-card-name">{cat.name}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map(s => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

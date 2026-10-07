import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experiences } from '../../data';
import { useInView } from '../../hooks/useInView';
import './Experience.css';

export default function Experience() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <div className={`fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Experience</p>
          <h2 className="section-title">Where I've Shipped</h2>
          <p className="section-subtitle">
            Internship experience building production-grade systems — real codebases, real users, real metrics.
          </p>
        </div>

        <div className={`experience-timeline fade-up${inView ? ' visible' : ''} delay-2`}>
          {experiences.map((exp, i) => (
            <article key={exp.company} className="exp-card" aria-label={`${exp.role} at ${exp.company}`}>
              <div className="exp-timeline-dot" aria-hidden="true">
                <span className="exp-timeline-dot-inner" />
              </div>

              <div className="exp-header">
                <div className="exp-header-left">
                  <div className="exp-company-badge">
                    <span className="exp-company-initial">{exp.company[0]}</span>
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-info">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-sep" aria-hidden="true">·</span>
                      <span className="exp-location"><MapPin size={12} />{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="exp-period">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                  <span className="exp-duration-badge">{exp.duration}</span>
                </div>
              </div>

              <div className="exp-metrics">
                {exp.metrics.map(m => (
                  <div key={m.label} className="exp-metric">
                    <span className="exp-metric-value">{m.value}</span>
                    <span className="exp-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <ul className="exp-achievements">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="exp-achievement">
                    <CheckCircle2 size={14} className="exp-check" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tech">
                {exp.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {i < experiences.length - 1 && <div className="exp-connector" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

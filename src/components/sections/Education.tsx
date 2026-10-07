import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { education } from '../../data';
import { useInView } from '../../hooks/useInView';
import './Education.css';

export default function Education() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="education" className="section education-section" ref={ref}>
      <div className="container">
        <div className={`fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Education</p>
          <h2 className="section-title">Academic Foundation</h2>
          <p className="section-subtitle">
            Formal computer science education combined with specialized online training in system design and algorithms.
          </p>
        </div>
        <div className={`education-grid fade-up${inView ? ' visible' : ''} delay-2`}>
          {education.map(edu => (
            <div key={edu.institution} className={`edu-card card${edu.type === 'university' ? ' edu-card-primary' : ''}`}>
              <div className="edu-card-icon">
                {edu.type === 'university' ? <GraduationCap size={22} /> : <BookOpen size={22} />}
              </div>
              <div className="edu-card-body">
                <h3 className="edu-institution">{edu.institution}</h3>
                <p className="edu-location">{edu.location}</p>
                {edu.specialization && (
                  <p className="edu-specialization">{edu.specialization}</p>
                )}
                {edu.degrees.length > 0 && (
                  <div className="edu-degrees">
                    {edu.degrees.map(d => (
                      <div key={d.degree} className="edu-degree">
                        <span className="edu-degree-name">{d.degree}</span>
                        <span className="edu-degree-year"><Calendar size={12} />{d.year}</span>
                      </div>
                    ))}
                  </div>
                )}
                {edu.coursework && (
                  <div className="edu-coursework">
                    <p className="edu-coursework-label">Coursework</p>
                    <div className="edu-coursework-tags">
                      {edu.coursework.map(c => <span key={c} className="tech-tag">{c}</span>)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

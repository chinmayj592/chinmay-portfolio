import { Layers, ShieldAlert, BarChart2, Cpu, BookOpen, GitMerge } from 'lucide-react';
import { engineeringPrinciples } from '../../data';
import { useInView } from '../../hooks/useInView';
import './Philosophy.css';

const ICON_MAP: Record<string, React.ElementType> = { Layers, ShieldAlert, BarChart2, Cpu, BookOpen, GitMerge };

export default function Philosophy() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section className="section philosophy-section" ref={ref}>
      <div className="container">
        <div className={`fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Engineering Philosophy</p>
          <h2 className="section-title">How I Think About Software</h2>
          <p className="section-subtitle">
            Principles I've internalized from building distributed systems, reading production post-mortems,
            and studying how companies like Stripe, AWS, and Netflix architect at scale.
          </p>
        </div>
        <div className={`philosophy-grid fade-up${inView ? ' visible' : ''} delay-2`}>
          {engineeringPrinciples.map((p, i) => {
            const Icon = ICON_MAP[p.icon] || Layers;
            return (
              <div key={p.title} className="philosophy-card" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="philosophy-icon"><Icon size={20} /></div>
                <h3 className="philosophy-title">{p.title}</h3>
                <p className="philosophy-body">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

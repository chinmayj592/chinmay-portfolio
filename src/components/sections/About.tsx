import { Terminal, Layers, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import './About.css';

const HIGHLIGHTS = [
  { icon: Terminal, title: 'Backend-First Mindset', body: 'Deep expertise in Java, Spring Boot, and distributed systems. I think in terms of throughput, latency, and failure modes before writing the first line of code.' },
  { icon: Layers, title: 'Systems Thinker', body: 'From Kafka event pipelines to Redis caching layers to double-entry ledgers — I design systems that are observable, recoverable, and built to scale horizontally.' },
  { icon: Zap, title: 'Shipped in Production', body: 'Not just side projects. APIs serving 10K+ daily requests, 50K+ events/min ingestion pipelines, and 99.9%+ uptime — built and deployed in real internship environments.' },
];

export default function About() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <div className={`about-header fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> About Me</p>
          <h2 className="section-title">Early-Career Engineer.<br />Production-Grade Systems.</h2>
          <p className="section-subtitle">
            I'm Chinmay Jaiswal — a Full Stack Developer based in Pune, India, with a Master's in Computer Applications
            and hands-on internship experience building backend systems that run in production.
            My focus is on backend engineering, distributed systems, cloud-native architecture, and AI-powered applications.
          </p>
        </div>

        <div className="about-body">
          <div className={`about-text fade-up${inView ? ' visible' : ''} delay-2`}>
            <p>
              I don't just build features — I think about <strong>how systems fail</strong>, how they scale,
              and how they stay observable under load. During my internships, I shipped APIs serving tens of thousands
              of daily requests, introduced Redis caching that cut database load by 45%, and built event-driven
              pipelines processing 50K+ events per minute.
            </p>
            <p style={{ marginTop: '16px' }}>
              My personal projects go deeper: a distributed billing engine modeled after Stripe and AWS billing,
              applying Hexagonal Architecture, DDD, CQRS, Inbox/Outbox patterns, and distributed locking —
              not because they were required, but because <strong>that's how production systems are actually built</strong>.
            </p>
            <p style={{ marginTop: '16px' }}>
              I'm actively looking for roles in <strong>backend engineering</strong>, full-stack development,
              cloud-native systems, and AI-powered applications where I can contribute meaningfully from day one.
            </p>
          </div>

          <div className={`about-highlights fade-up${inView ? ' visible' : ''} delay-3`}>
            {HIGHLIGHTS.map(h => (
              <div key={h.title} className="about-highlight-card">
                <div className="about-highlight-icon">
                  <h.icon size={18} />
                </div>
                <div>
                  <h3 className="about-highlight-title">{h.title}</h3>
                  <p className="about-highlight-body">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

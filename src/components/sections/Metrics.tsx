import { useInView } from '../../hooks/useInView';
import './Metrics.css';

const METRICS = [
  { value: '12+', label: 'Production APIs Shipped', sub: 'Electrify internship' },
  { value: '50K+', label: 'Events/min Processed', sub: 'Billing engine project' },
  { value: '99.99%', label: 'Ingestion Reliability', sub: 'Kafka pipeline' },
  { value: '<200ms', label: 'p95 API Latency', sub: 'Under production load' },
  { value: '95%+', label: 'Test Coverage', sub: 'Unit + integration' },
  { value: '45%', label: 'DB Load Reduction', sub: 'Via Redis caching' },
  { value: '2×', label: 'Peak Throughput', sub: 'No infra changes' },
  { value: '8', label: 'DDD Bounded Contexts', sub: 'Billing engine design' },
];

export default function Metrics() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section className="section metrics-section" ref={ref} aria-label="Engineering metrics">
      <div className="container">
        <div className={`metrics-header fade-up${inView ? ' visible' : ''}`}>
          <p className="section-label"><span aria-hidden="true">◆</span> Engineering Impact</p>
          <h2 className="section-title">Numbers That Matter</h2>
          <p className="section-subtitle">Real metrics from production systems and internship work — not estimates.</p>
        </div>
        <div className={`metrics-grid fade-up${inView ? ' visible' : ''} delay-2`}>
          {METRICS.map(m => (
            <div key={m.label} className="metric-item">
              <div className="metric-item-value">{m.value}</div>
              <div className="metric-item-label">{m.label}</div>
              <div className="metric-item-sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

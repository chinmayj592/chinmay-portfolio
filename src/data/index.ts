import type { Experience, Project, SkillCategory, Education } from '../types';

export const GITHUB_URL = 'https://github.com/chinmayj592';
export const LINKEDIN_URL = 'https://linkedin.com/in/chinmay-jaiswal-1ab576324/';
export const LEETCODE_URL = 'https://leetcode.com/u/chinmayJaiswal_75591/';
export const EMAIL = 'chinmayjaiswal1000@gmail.com';
export const PHONE = '+91-7559136464';
export const RESUME_PATH = '/resume.pdf';

// GitHub repo placeholders — replace with actual URLs when available
export const PROJECT_REPOS = {
  billing: 'https://github.com/chinmayj592',
  ecommerce: 'https://github.com/chinmayj592',
  jobtracker: 'https://github.com/chinmayj592',
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: ['Spring Boot', 'Spring MVC', 'Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Microservices'],
  },
  {
    name: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    name: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Spring Data JPA'],
  },
  {
    name: 'Messaging & Caching',
    icon: 'Zap',
    skills: ['Apache Kafka', 'Redis', 'Bull Queues', 'Async Processing', 'Event-Driven'],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub', 'API Gateway', 'AWS CDN', 'AWS RDS'],
  },
  {
    name: 'Testing & Monitoring',
    icon: 'Activity',
    skills: ['JUnit', 'Mockito', 'Prometheus', 'Spring Actuator', 'Winston', 'Swagger'],
  },
  {
    name: 'System Design',
    icon: 'GitBranch',
    skills: ['DDD', 'CQRS', 'Hexagonal Architecture', 'Inbox/Outbox', 'DLQ', 'Distributed Locking', 'Idempotency', 'Sharding', 'Load Balancing', 'CDN', 'High-Level Design', 'Low-Level Design', 'Design Patterns'],
  },
  {
    name: 'AI / LLM',
    icon: 'Brain',
    skills: ['OpenAI API', 'LLM Integrations', 'AI-Powered Applications', 'Prompt Engineering'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Electrify',
    location: 'Ahmedabad, India',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2026 – Mar 2026',
    duration: '3 months',
    tech: ['Java', 'Spring Boot', 'Redis', 'REST APIs', 'JUnit', 'Mockito'],
    metrics: [
      { value: '12+', label: 'Production APIs' },
      { value: '10K+', label: 'Daily Requests' },
      { value: '<200ms', label: 'p95 Latency' },
      { value: '95%+', label: 'Test Coverage' },
      { value: '2×', label: 'Peak Throughput' },
      { value: '45%', label: 'DB Load Reduction' },
    ],
    achievements: [
      'Developed and shipped 12+ production-ready REST APIs focused on performance, readability, and maintainability.',
      'APIs served 10,000+ daily requests with p95 latency consistently under 200ms.',
      'Collaborated in a cross-functional Agile team of 6+ members, driving 15+ features from design through release.',
      'Achieved 95%+ unit and integration test coverage using JUnit and Mockito.',
      'Introduced Redis caching for high-traffic endpoints, reducing average database load by 45%.',
      'Improved throughput by 2× during peak usage without adding infrastructure.',
      'Applied defensive error handling strategies that contributed to 30% fewer post-release bugs.',
    ],
  },
  {
    company: 'Bambhari Pvt. Ltd.',
    location: 'Bangalore, India',
    role: 'Software Engineer Intern',
    period: 'Oct 2025 – Dec 2025',
    duration: '3 months',
    tech: ['NestJS', 'AWS', 'Bull', 'SendGrid', 'API Gateway', 'RDS'],
    metrics: [
      { value: '5+', label: 'Production APIs' },
      { value: '2K+', label: 'Daily Active Users' },
      { value: '3K+', label: 'Emails/Day' },
      { value: '99.9%', label: 'Delivery Success' },
    ],
    achievements: [
      'Built 5+ production-grade REST APIs using NestJS, integrated with AWS API Gateway and RDS.',
      'APIs served 2,000+ daily active users with reliable uptime.',
      'Integrated a resilient asynchronous email notification service using Bull job queues and SendGrid API.',
      'Automated 3,000+ daily transactional emails achieving 99.9% delivery success.',
      'Eliminated manual follow-up workflows through end-to-end automation.',
      'Worked with AWS CDN, API Gateway, and RDS in a cloud-native deployment.',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'billing-engine',
    title: 'Distributed Usage-Based Billing & Metering Engine',
    subtitle: 'SaaS API Billing Platform — Stripe/AWS Billing Model',
    description:
      'A production-grade multi-tenant billing system enabling SaaS companies to implement consumption-based pricing. Designed for high-throughput event ingestion, reliable aggregation, and automated invoice generation — modeled after Stripe Billing and AWS billing architectures.',
    featured: true,
    githubUrl: PROJECT_REPOS.billing,
    tech: ['Java 21', 'Spring Boot 3.4', 'MySQL', 'Apache Kafka', 'Redis', 'Prometheus', 'Spring Actuator', 'Spring Security'],
    metrics: [
      { value: '50K+', label: 'Events/min' },
      { value: '99.99%', label: 'Ingestion Reliability' },
      { value: '99.9%', label: 'Message Delivery' },
      { value: '744', label: 'DB Reads/Tenant/Month' },
      { value: '70%', label: 'Retry Impact Reduction' },
      { value: '8', label: 'Bounded Contexts' },
    ],
    achievements: [
      'Built a two-phase usage metering pipeline with Kafka-based event ingestion handling 50K+ events/min.',
      'Implemented idempotent processing, Redis-backed rate limiting, and distributed locking for zero data loss.',
      'Aggregated usage asynchronously into hourly buckets — reduced billing-time DB reads from 50K rows to 744 rows per tenant/month.',
      'Built automated monthly invoice generation with payment reconciliation, credit adjustments, and double-entry ledger maintaining 100% balance integrity.',
      'Applied Inbox/Outbox patterns, DLQ-based failure handling, and scheduled reconciliation jobs achieving 99.9% message delivery.',
      'Applied Hexagonal Architecture, Domain-Driven Design, and CQRS across 8 bounded contexts.',
      'Added structured logging and Prometheus monitoring — improved release velocity by ~40%, reduced cross-context coupling by ~60%.',
    ],
    challenges: [
      'Ensuring exactly-once semantics across distributed Kafka consumers without sacrificing throughput.',
      'Designing a billing aggregation model that scales horizontally without write contention on shared rows.',
      'Implementing a double-entry ledger that remains consistent under concurrent credit/debit operations.',
    ],
    learnings: [
      'Idempotency keys and distributed locking are non-negotiable in financial systems.',
      'Aggregating into time-bucketed rows dramatically reduces read amplification at billing time.',
      'DDD bounded contexts enforce clean separation that pays dividends during rapid iteration.',
    ],
    architectureFlow: [
      { id: 'client', label: 'Client APIs', sublabel: 'SaaS Tenants', type: 'client' },
      { id: 'gateway', label: 'API Gateway', sublabel: 'Spring Security', type: 'gateway' },
      { id: 'kafka', label: 'Apache Kafka', sublabel: 'Event Ingestion', type: 'queue' },
      { id: 'metering', label: 'Metering Processor', sublabel: 'Idempotent + Distributed Lock', type: 'service' },
      { id: 'redis', label: 'Redis', sublabel: 'Rate Limiting + Cache', type: 'cache' },
      { id: 'aggregation', label: 'Usage Aggregation', sublabel: 'Hourly Buckets', type: 'service' },
      { id: 'mysql', label: 'MySQL', sublabel: 'Persistent Store', type: 'db' },
      { id: 'billing', label: 'Billing Engine', sublabel: 'Invoice + Ledger', type: 'service' },
      { id: 'outbox', label: 'Inbox / Outbox', sublabel: 'DLQ + Reconciliation', type: 'pattern' },
      { id: 'prometheus', label: 'Prometheus', sublabel: 'Metrics + Actuator', type: 'monitor' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'Scalable E-Commerce Backend System',
    subtitle: 'Cloud-Native Microservices on AWS',
    description:
      'A cloud-native microservices e-commerce platform deployed on AWS, featuring independent services for products, users, payments, and notifications — built for horizontal scalability and high availability.',
    featured: false,
    githubUrl: PROJECT_REPOS.ecommerce,
    tech: ['Java', 'Spring Boot', 'MySQL', 'AWS', 'Kafka', 'Redis', 'Docker', 'Stripe API', 'Spring Data JPA'],
    metrics: [
      { value: '90%', label: 'Latency Reduction' },
      { value: '90%', label: 'DB Load Reduction' },
      { value: '99.9%', label: 'Uptime' },
    ],
    achievements: [
      'Designed and deployed a cloud-native microservices platform on AWS with independent product, user, payment, and email services.',
      'Integrated Stripe payment processing with Kafka-based async notifications.',
      'Implemented Redis caching reducing API latency by ~90% and database load by ~90%.',
      'Containerized with Docker and deployed for horizontal scalability and 99.9% uptime.',
    ],
    challenges: [],
    learnings: [],
  },
  {
    id: 'jobtracker',
    title: 'Job Application Tracker',
    subtitle: 'Full-Stack Web Application',
    description:
      'A full-stack job application management platform with a secure REST API backend and a React frontend — featuring JWT authentication, real-time search, dashboard analytics, and complete application lifecycle tracking.',
    featured: false,
    githubUrl: PROJECT_REPOS.jobtracker,
    tech: ['Node.js', 'Express.js', 'React', 'MySQL', 'Prisma', 'JWT', 'Zod', 'Swagger', 'Winston', 'bcrypt'],
    metrics: [],
    achievements: [
      'Built a secure REST API with JWT + bcrypt authentication and Zod request validation.',
      'Implemented Prisma ORM with a relational MySQL schema covering users, applications, notes, and soft deletes.',
      'Developed a React frontend with application tracking, status management, pagination, filtering, and search.',
      'Added dashboard analytics, Swagger API documentation, and structured Winston logging.',
    ],
    challenges: [],
    learnings: [],
  },
];

export const education: Education[] = [
  {
    institution: 'GH Raisoni Institute of Engineering and Business Management',
    location: 'Jalgaon, India',
    type: 'university',
    degrees: [
      { degree: 'Master of Computer Applications (MCA)', year: '2025' },
      { degree: 'Bachelor of Computer Applications (BCA)', year: '2023' },
    ],
  },
  {
    institution: 'Scaler',
    location: 'Online',
    type: 'online',
    specialization: 'Software Development & Problem Solving',
    degrees: [],
    coursework: [
      'Data Structures & Algorithms',
      'High-Level System Design',
      'Scalability & Distributed Systems',
      'Low-Level Design & Design Patterns',
      'Hands-on Case Studies',
    ],
  },
];

export const engineeringPrinciples = [
  {
    icon: 'Layers',
    title: 'Build for Scale',
    body: 'Design systems that handle 10× traffic without architectural rewrites. Horizontal scalability is a first-class requirement, not an afterthought.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Design for Failure',
    body: 'Every distributed component will fail. Idempotency, retries, DLQs, and circuit breakers are not optional — they are the architecture.',
  },
  {
    icon: 'BarChart2',
    title: 'Measure Everything',
    body: 'You cannot optimize what you cannot observe. Structured logging, Prometheus metrics, and distributed tracing are built in from day one.',
  },
  {
    icon: 'Cpu',
    title: 'Automate Ruthlessly',
    body: 'Manual processes are reliability risks. CI/CD pipelines, automated testing, and scheduled reconciliation jobs eliminate human error at scale.',
  },
  {
    icon: 'BookOpen',
    title: 'Prefer Clear Architecture',
    body: 'DDD bounded contexts, hexagonal architecture, and CQRS are tools for managing complexity — not resume keywords. Apply them where they reduce coupling.',
  },
  {
    icon: 'GitMerge',
    title: 'Ship Maintainable Code',
    body: '95%+ test coverage, defensive error handling, and clean separation of concerns mean the next engineer can move fast without breaking things.',
  },
];

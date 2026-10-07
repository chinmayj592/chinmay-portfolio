export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  achievements: string[];
  metrics: { value: string; label: string }[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  achievements: string[];
  metrics: { value: string; label: string }[];
  featured: boolean;
  githubUrl: string;
  architectureFlow?: ArchNode[];
  challenges?: string[];
  learnings?: string[];
}

export interface ArchNode {
  id: string;
  label: string;
  sublabel?: string;
  type: 'client' | 'gateway' | 'service' | 'queue' | 'cache' | 'db' | 'monitor' | 'pattern';
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Education {
  institution: string;
  location: string;
  degrees: { degree: string; year: string }[];
  type: 'university' | 'online';
  coursework?: string[];
  specialization?: string;
}

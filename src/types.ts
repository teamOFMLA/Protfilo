export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
}

export interface SchemaColumn {
  name: string;
  type: string;
  key?: 'PK' | 'FK' | 'UK';
  description?: string;
}

export interface SchemaTable {
  tableName: string;
  columns: SchemaColumn[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  headline: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  challenges: ProjectChallenge[];
  results: string;
  codeSnippet?: CodeSnippet;
  schemaDesign?: SchemaTable[];
  githubUrl?: string;
  metrics?: Metric[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  info?: string;
}

export interface SkillCategory {
  category: string;
  info: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeColor?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  content: string;
  readTime: string;
}

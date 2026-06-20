export type Track = "ai" | "cyber" | "data";

export interface TrackMeta {
  id: Track;
  label: string;
  shortLabel: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  tracks: Track[];
  blurb: string;
  description: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  links: {
    github?: string;
    demo?: string;
  };
  source: "github" | "cv" | "portfolio";
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  track: Track | "core";
  icon: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  note?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  status: string;
  expected: string;
  specialization?: string;
  coursework: string[];
}

export interface ResearchPaper {
  title: string;
  venue: string;
  status: "submitted" | "rejected" | "accepted" | "published";
  role: string;
  summary: string[];
}

export interface ExperienceEntry {
  org: string;
  role: string;
  type: string;
  status: string;
  summary: string;
  tasks: { label: string; done: boolean }[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  languages: { name: string; percent: number }[];
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  previousPortfolio: string;
}

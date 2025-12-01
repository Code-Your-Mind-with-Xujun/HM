import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Statistic {
  label: string;
  value: string;
}

export interface Topic {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  duration: string;
  description: string;
  views: string;
  url: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string; // Creates a key for the result profile
    score: number;
  }[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'available' | 'completed';
}

export interface RoadmapPhase {
  title: string;
  items: RoadmapItem[];
}

export interface Resource {
  title: string;
  description: string;
  type: 'PDF' | 'Excel' | 'Template';
  downloads: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
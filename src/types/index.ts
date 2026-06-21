// ── BintikBumi Types ──────────────────────────────────────────
export type Lang = 'EN' | 'ID';

export interface BilingualText {
  EN: string;
  ID: string;
}

export interface Product {
  id: string;
  name: BilingualText;
  description: BilingualText;
  category: 'panels' | 'tiles' | 'furniture' | 'custom';
  image?: string;
}

export interface Service {
  id: string;
  title: BilingualText;
  description: BilingualText;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: BilingualText;
  category: 'interior' | 'furniture' | 'commercial' | 'outdoor';
  location: string;
  image?: string;
}

export interface ApplicationCard {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: BilingualText;
  image?: string;
}

export interface ImpactStat {
  value: string;
  unit: string;
  label: BilingualText;
}

export interface FAQItem {
  question: BilingualText;
  answer: BilingualText;
}

export interface City {
  id: string;
  nama: string;
}

export interface Province {
  id: string;
  nama: string;
  cities: City[];
}


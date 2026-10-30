export interface ServiceItem {
  id: string;
  title: string;
  category: 'renovation' | 'construction' | 'interior' | 'maintenance' | 'supporting';
  tagline: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  scope: string[];
  beforeImage: string;
  processImage: string;
  afterImage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Renovasi' | 'Bangun Baru' | 'Interior' | 'Perbaikan Ringan';
  location: string;
  duration: string;
  scope: string;
  image: string;
  completionYear: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrProfession: string;
  location: string;
  projectType: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
  verified: boolean;
  highlightText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactInfo {
  csPhone: string;
  csPhoneRaw: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface DesignShowcaseItem {
  id: string;
  title: string;
  category: 'Arsitektur Modern' | 'Struktur Konstruksi' | 'Interior Mewah' | 'Renovasi Fasad' | 'Ruang Dapur';
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  budgetTier: string;
}

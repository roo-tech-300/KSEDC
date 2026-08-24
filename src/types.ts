export type PlanetId = 'mars' | 'jupiter' | 'moon' | 'europa' | 'saturn' | 'earth';

export interface PlanetData {
  id: PlanetId;
  name: string;
  tagline: string;
  headline: string;
  subtitle: string;
  projectNumber: string;
  description: string;
  extendedDescription: string;
  quote?: string;
  quoteAuthor?: string;
  color: string;
  accentColor: string;
  glowColor: string;
  specs: {
    distanceFromEarth: string;
    surfaceGravity: string;
    orbitalPeriod: string;
    atmosphere: string;
    temperatureRange: string;
    travelDuration: string;
    habitabilityStatus: string;
  };
  features: string[];
  equation: {
    name: string;
    formula: string;
    variables: { symbol: string; label: string; defaultVal: number; min: number; max: number; step: number; unit?: string }[];
    calculate: (vars: Record<string, number>) => { value: string; commentary: string };
    footnote?: string;
  };
  blueprint: {
    codename: string;
    architectureType: string;
    primaryChallenge: string;
    payloadCapacity: string;
    powerSource: string;
    milestones: { year: string; title: string; status: 'completed' | 'in-progress' | 'planned' }[];
  };
  realImageUrls: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  department: string;
  quote: string;
  image: string;
  clearanceLevel: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

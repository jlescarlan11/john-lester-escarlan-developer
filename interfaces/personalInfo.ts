export interface PersonalInfo {
  introduction: string;
  aboutMe: string[];
  summaries: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
}

export interface JourneyEntry {
  type: 'experience' | 'education';
  title: string;
  organization: string;
  description: string[];
  image: string;
  skills: string[];
  duration: string;
  startDate: string;
  current: boolean;
}

export interface ExperienceEntry extends JourneyEntry {
  type: 'experience';
}

export interface EducationEntry extends JourneyEntry {
  type: 'education';
}

export interface UserInfo {
  personal: PersonalInfo;
  journey: JourneyEntry[];
  contact: ContactInfo;
}

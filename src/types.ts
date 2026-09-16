export interface ResumeProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  remoteAvailability: string;
  linkedin: string;
  portfolio: string;
  github?: string;
  status: string;
  highlights: {
    label: string;
    value: string;
    detail: string;
  }[];
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'full-time' | 'contract' | 'founding' | 'internship' | 'part-time' | 'project';
  summary: string;
  achievements: string[];
  technologies: string[];
  metrics: MetricItem[];
}

export interface SelectedProjectItem {
  id: string;
  name: string;
  tools: string[];
  problem: string;
  built: string;
  methods: string;
  practicalOutcome: string;
  liveUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  experienceYears?: number;
  highlighted?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  honors?: string[];
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface SelectedWorkItem {
  id: string;
  title: string;
  tools: string[];
  description: string;
  status: string;
}

export interface AchievementItem {
  id: string;
  metric: string;
  label: string;
  description: string;
}

export interface WorkPrincipleItem {
  id: string;
  title: string;
  description: string;
}

export interface AdditionalInfoData {
  remoteAvailability: string;
  projectManagementTraining: string[];
  areasOfProfessionalInterest: string[];
}

export interface FullResumeData {
  profile: ResumeProfile;
  coreCompetencies: string[];
  capabilityCategories: CapabilityCategory[];
  experiences: ExperienceItem[];
  selectedProjects: SelectedProjectItem[];
  selectedWork: SelectedWorkItem[];
  selectedAchievements: AchievementItem[];
  howIWork: WorkPrincipleItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  businessExposure: string[];
  languages: LanguageItem[];
  portfolioDetails: {
    url: string;
    description: string;
    curatedItems: {
      title: string;
      category: string;
      description: string;
      tools: string;
      status?: string;
    }[];
  };
  additionalInfo: AdditionalInfoData;
}



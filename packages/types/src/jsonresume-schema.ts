export interface JSONResumeObject {
  basics?: JSONResumeBasics;
  skills?: JSONResumeEntry['Skill'][];
  languages?: JSONResumeEntry['Language'][];
  education?: JSONResumeEntry['Education'][];
  certificates?: JSONResumeEntry['Certificate'][];
  projects?: JSONResumeEntry['Project'][];
  work?: JSONResumeEntry['Work'][];
}

interface JSONResumeBasics {
  name: string;
  label?: string;
  email: string;
  phone: string;
  url?: string;
  summary?: string;
  location: {
    address?: string;
    postalCode?: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles?: {
    network: string;
    username?: string;
    url: string;
  }[];
}

interface JSONResumeEntry {
  Skill: {
    name: string;
    level?: string;
    keywords?: string[];
  };

  Language: {
    language: string;
    fluency?: string;
  };

  Education: {
    institution: string;
    url?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
    courses?: string[];
  };

  Certificate: {
    name: string;
    date?: string;
    issuer?: string;
    url?: string;
  };

  Project: {
    name: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    highlights?: string[];
    url?: string | string[];
    keywords?: string[];
  };

  Work: {
    name: string;
    department?: string;
    location?: string;
    position?: string;
    url?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
  };
}

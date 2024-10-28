export default interface JSONResumeObject {
  basics?: JSONResumeBasics;
  skills?: JSONResumeEntry.Skill[];
  languages?: JSONResumeEntry.Language[];
  education?: JSONResumeEntry.Education[];
  certificates?: JSONResumeEntry.Certificate[];
  projects?: JSONResumeEntry.Project[];
  work?: JSONResumeEntry.Work[];
  experience?: JSONResumeEntry.Work[];
}

export interface JSONResumeBasics {
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
    _display?: boolean;
    network: string;
    username?: string;
    url: string;
  }[];
}

export interface JSONResumeMeta {
  _display?: boolean;
}

export namespace JSONResumeEntry {
  export interface Basics extends JSONResumeBasics {}

  export interface Skill extends JSONResumeMeta {
    name: string;
    level?: string;
    keywords?: string[];
  }

  export interface Language extends JSONResumeMeta {
    language: string;
    fluency?: string;
  }

  export interface Education extends JSONResumeMeta {
    institution: string;
    url?: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
    score?: string;
    courses?: string[];
  }

  export interface Certificate extends JSONResumeMeta {
    name: string;
    date?: string;
    issuer?: string;
    url?: string;
  }

  export interface Project extends JSONResumeMeta {
    name: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    highlights?: string[];
    url?: string | string[];
    keywords?: string[];
  }

  export interface Work extends JSONResumeMeta {
    name: string;
    department?: string;
    location?: string;
    position?: string;
    url?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    highlights?: string[];
  }
}

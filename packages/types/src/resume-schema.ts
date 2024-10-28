import JSONResumeBasics from './jsonresume-schema';

export default interface ResumeObject {
  basics?: ResumeEntry[];
  skills?: ResumeEntry[];
  languages?: ResumeEntry[];
  education?: ResumeEntry[];
  certificates?: ResumeEntry[];
  projects?: ResumeEntry[];
  work?: ResumeEntry[];
  experience?: ResumeEntry[];
}

export interface ResumeEntry {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  note?: React.ReactNode;
  description?: React.ReactNode;
  highlights?: React.ReactNode;
}

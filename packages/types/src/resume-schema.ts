export interface ResumeObject {
  basics?: ResumeEntry[];
  skills?: ResumeEntry[];
  languages?: ResumeEntry[];
  education?: ResumeEntry[];
  certificates?: ResumeEntry[];
  projects?: ResumeEntry[];
  work?: ResumeEntry[];
}

export interface ResumeEntry {
  title: string | string[];
  subtitle?: string | string[];
  note?: string | string[];
  description?: string | string[];
  highlights?: string | string[];
}

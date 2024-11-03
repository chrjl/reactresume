import { createContext } from 'react';

export interface DocumentOptions {
  spacing: number;
  headings: {
    basics: string | null;
    skills: string | null;
    languages: string | null;
    projects: string | null;
    work: string | null;
    education: string | null;
    certificates: string | null;
  };
}

export const DocumentContext = createContext<
  [DocumentOptions, React.Dispatch<React.SetStateAction<DocumentOptions>>]
>([
  {} as DocumentOptions,
  {} as React.Dispatch<React.SetStateAction<DocumentOptions>>,
]);

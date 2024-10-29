import { createContext } from 'react';

import type { JSONResumeObject } from '@reactresume/types';

export const DataContext = createContext<
  [
    JSONResumeObject | null,
    React.Dispatch<React.SetStateAction<JSONResumeObject>>,
  ]
>([null, {} as React.Dispatch<React.SetStateAction<JSONResumeObject>>]);

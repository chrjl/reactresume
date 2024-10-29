import { useState } from 'react';
import { DataContext } from './contexts/DataContext';

import type { JSONResumeObject } from '@reactresume/types';

import AppBar from './components/AppBar';
import DataDialog from './components/DataDialog';

function App() {
  const [jsonResume, setJsonResume] = useState({} as JSONResumeObject);

  return (
    <DataContext.Provider value={[jsonResume, setJsonResume]}>
      <AppBar />
      Hello world
      <pre>{JSON.stringify(jsonResume, null, 2)}</pre>
      <DataDialog />
    </DataContext.Provider>
  );
}

export default App;

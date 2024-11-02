import { useState } from 'react';
import { DataContext } from './contexts/DataContext';

import type { JSONResumeObject } from '@reactresume/types';

import AppBar from './components/AppBar';
import DataDialog from './components/DataDialog';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [jsonResume, setJsonResume] = useState({} as JSONResumeObject);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <DataContext.Provider value={[jsonResume, setJsonResume]}>
      <AppBar />
      Hello world
      <DataDialog open={isDialogOpen} handleClose={handleCloseDialog} />
      <FloatingActionButton onClick={handleOpenDialog} />
    </DataContext.Provider>
  );
}

export default App;

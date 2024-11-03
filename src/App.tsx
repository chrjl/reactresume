import { useState } from 'react';
import { DataContext } from './contexts/DataContext';

import type { JSONResumeObject } from '@reactresume/types';

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu';
import DataDialog from './components/DataDialog';
import FloatingActionButton from './components/FloatingActionButton';
import Page from './components/Page';
import Document from './components/Document';

function App() {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [jsonResume, setJsonResume] = useState({} as JSONResumeObject);

  const handleOpenAppMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseAppMenu = () => {
    setMenuAnchorEl(null);
  };


  return (
    <DataContext.Provider value={[jsonResume, setJsonResume]}>
      <AppBar handleOpenMenu={handleOpenAppMenu} />
      <AppMenu
        anchorEl={menuAnchorEl}
        onClose={handleCloseAppMenu}
      />

      <Page>
        <Document />
      </Page>

      <DataDialog open={isDialogOpen} handleClose={handleCloseDialog} />
      <FloatingActionButton onClick={handleOpenDialog} />
    </DataContext.Provider>
  );
}

export default App;

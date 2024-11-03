import { useState } from 'react';
import { DataContext } from './contexts/DataContext';
import { DocumentContext } from './contexts/DocumentContext';

import type { JSONResumeObject } from '@reactresume/types';
import type { DocumentOptions } from './contexts/DocumentContext';

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu';
import DataDialog from './components/DataDialog';
import FloatingActionButton from './components/FloatingActionButton';
import Page from './components/Page';
import Document from './components/Document';

function App() {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [jsonResume, setJsonResume] = useState({} as JSONResumeObject);
  const [documentOptions, setDocumentOptions] = useState<DocumentOptions>({
    spacing: 2,
    headings: {},
  });

  const handleOpenAppMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseAppMenu = () => {
    setMenuAnchorEl(null);
  };


  return (
    <DataContext.Provider value={[jsonResume, setJsonResume]}>
      <DocumentContext.Provider value={[documentOptions, setDocumentOptions]}>
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
      </DocumentContext.Provider>
    </DataContext.Provider>
  );
}

export default App;

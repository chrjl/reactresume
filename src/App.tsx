import { useState } from 'react';
import { DataContext } from './contexts/DataContext';
import { DocumentContext } from './contexts/DocumentContext';

import type { JSONResumeObject } from '@reactresume/types';
import type { DocumentOptions } from './contexts/DocumentContext';

import AppBar from './components/AppBar';
import AppMenu from './components/AppMenu';
import DocumentDialog from './components/DocumentDialog';
import HeadingsDialog from './components/HeadingsDialog';
import EditorDialog from './components/EditorDialog';
import DataDialog from './components/DataDialog';
import FloatingActionButton from './components/FloatingActionButton';
import Page from './components/Page';
import Document from './components/Document';

function App() {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [isDocumentDialogOpen, setIsDocumentDialogOpen] = useState(false);
  const [isHeadingsDialogOpen, setIsHeadingsDialogOpen] = useState(false);
  const [isEditorDialogOpen, setIsEditorDialogOpen] = useState(false);
  const [isDataDialogOpen, setIsDataDialogOpen] = useState(false);
  const [jsonResume, setJsonResume] = useState({} as JSONResumeObject);
  const [documentOptions, setDocumentOptions] = useState<DocumentOptions>({
    spacing: 2,
    headings: {
      basics: null,
      skills: null,
      languages: null,
      projects: 'Projects',
      work: 'Work experience',
      education: 'Education',
      certificates: 'Certificates',
    },
  });

  const handleOpenAppMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleCloseAppMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleOpenDocumentDialog = () => setIsDocumentDialogOpen(true);
  const handleCloseDocumentDialog = () => setIsDocumentDialogOpen(false);

  const handleOpenHeadingsDialog = () => setIsHeadingsDialogOpen(true);
  const handleCloseHeadingsDialog = () => setIsHeadingsDialogOpen(false);

  const handleOpenEditorDialog = () => setIsEditorDialogOpen(true);
  const handleCloseEditorDialog = () => setIsEditorDialogOpen(false);

  const handleOpenDataDialog = () => setIsDataDialogOpen(true);
  const handleCloseDataDialog = () => setIsDataDialogOpen(false);

  return (
    <DataContext.Provider value={[jsonResume, setJsonResume]}>
      <DocumentContext.Provider value={[documentOptions, setDocumentOptions]}>
        <AppBar handleOpenMenu={handleOpenAppMenu} />
        <AppMenu
          anchorEl={menuAnchorEl}
          onClose={handleCloseAppMenu}
          handleOpenDocumentDialog={handleOpenDocumentDialog}
          handleOpenHeadingsDialog={handleOpenHeadingsDialog}
          handleOpenEditorDialog={handleOpenEditorDialog}
        />

        <Page>
          <Document />
        </Page>

        <DocumentDialog
          open={isDocumentDialogOpen}
          onClose={handleCloseDocumentDialog}
        />
        <HeadingsDialog
          open={isHeadingsDialogOpen}
          onClose={handleCloseHeadingsDialog}
        />
        <EditorDialog
          open={isEditorDialogOpen}
          onClose={handleCloseEditorDialog}
        />
        <DataDialog
          open={isDataDialogOpen}
          handleClose={handleCloseDataDialog}
        />
        <FloatingActionButton onClick={handleOpenDataDialog} />
      </DocumentContext.Provider>
    </DataContext.Provider>
  );
}

export default App;

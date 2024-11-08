import { useState } from 'react';
import {
  PDFViewer,
  Document as PDFDocument,
  Page as PDFPage,
} from '@react-pdf/renderer';

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
import SnackbarAlert from './components/SnackbarAlert';
import Page from './components/Page';
import Document from './components/Document';
import PDFResume from './components/PDFResume';

import validateJsonResume from './utilities/validate-json-resume';

import styles from './App.module.css';

function App() {
  const [isPdfDisplay, setIsPdfDisplay] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [message, setMessage] = useState('');
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

  const handleAlert = (message: string) => {
    setMessage(message);
    setIsAlert(true);
  };
  const handleCloseAlert = () => {
    setIsAlert(false);
  };

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

  const handleTogglePdfDisplay = () =>
    setIsPdfDisplay((isPdfDisplay) => !isPdfDisplay);

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
          isPdfDisplay={isPdfDisplay}
          handleTogglePdfDisplay={handleTogglePdfDisplay}
        />

        {validateJsonResume(jsonResume) && isPdfDisplay ? (
          <PDFViewer className={styles.pdfViewer}>
            <DataContext.Provider value={[jsonResume, setJsonResume]}>
              <DocumentContext.Provider
                value={[documentOptions, setDocumentOptions]}
              >
                <PDFDocument>
                  <PDFPage size="LETTER" style={{ padding: '0.5in' }}>
                    <PDFResume />
                  </PDFPage>
                </PDFDocument>
              </DocumentContext.Provider>
            </DataContext.Provider>
          </PDFViewer>
        ) : (
          <Page>
            <Document />
          </Page>
        )}

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
          onAlert={handleAlert}
        />
        <DataDialog
          open={isDataDialogOpen}
          handleClose={handleCloseDataDialog}
          onAlert={handleAlert}
        />
        <FloatingActionButton onClick={handleOpenDataDialog} />

        <SnackbarAlert
          open={isAlert}
          onClose={handleCloseAlert}
          severity="error"
          message={message}
        />
      </DocumentContext.Provider>
    </DataContext.Provider>
  );
}

export default App;

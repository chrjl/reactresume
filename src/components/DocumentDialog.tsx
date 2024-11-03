import { useContext } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { DocumentContext } from '../contexts/DocumentContext';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DocumentDialog({ open, onClose }: Props) {
  const [documentOptions, setDocumentOptions] = useContext(DocumentContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const spacing = Number(e.currentTarget.value) || 0;
    
    setDocumentOptions((documentOptions) => ({
      ...documentOptions,
      spacing,
    }));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Customize document</DialogTitle>
      <DialogContent>
        <DialogContentText>Section spacing (rem)</DialogContentText>
        <TextField
          id="outlined-number"
          type="number"
          value={documentOptions.spacing}
          onChange={handleChange}
          slotProps={{
            htmlInput: {
              step: 0.5,
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

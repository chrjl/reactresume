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

export default function FormDialog({ open, onClose }: Props) {
  const [documentOptions, setDocumentOptions] = useContext(DocumentContext);
  const { headings } = documentOptions;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const updatedHeadings = {
          ...headings,
          [event.target.name]: event.target.value || null,
        };

        setDocumentOptions((options) => ({
          ...options,
          headings: updatedHeadings,
        }));
      }}
    >
      <DialogTitle>Customize headings</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Leave blank to omit heading from section
        </DialogContentText>
        {Object.entries(headings).map(([section, heading]) => (
          <TextField
            key={section}
            margin="dense"
            id="name"
            name={section}
            value={heading || ''}
            label={section[0].toUpperCase() + section.slice(1).toLowerCase()}
            fullWidth
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

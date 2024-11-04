import { useState, useContext, forwardRef } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

import validateJsonResume from '../utilities/validate-json-resume';
import type { JSONResumeObject } from '@reactresume/types';

import { DataContext } from '../contexts/DataContext';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  onClose: () => void;
  onAlert: (message: string) => void;
}

export default function FullScreenDialog({ open, onClose, onAlert }: Props) {
  const [jsonResume, setJsonResume] = useContext(DataContext);
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (val: string) => {
    setValue(val);
  };

  const handleSave = () => {
    if (!value) {
      return;
    }

    try {
      const data = JSON.parse(value);

      if (validateJsonResume(data)) {
        setJsonResume(data as JSONResumeObject);
        onClose();
      } else {
        throw new SyntaxError('JSON schema error, see console for details');
      }
    } catch (e) {
      if ((e as Error).name === 'SyntaxError') {
        onAlert((e as Error).message);
      }
    }
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Edit resume data
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <CodeMirror
          value={JSON.stringify(jsonResume, null, 2)}
          onChange={handleChange}
          extensions={[json()]}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

import { useState, useContext } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { DataContext } from '../contexts/DataContext';
import parseObject from '../utilities/parse-json5-yaml';

export default function DataDialog() {
  const [jsonResume, setJsonResume] = useContext(DataContext);

  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<'url' | 'file' | null>(null);
  const [url, setUrl] = useState<string>('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSource(null);
    setOpen(false);
  };

  const handleChangeSource = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value === 'url' || value === 'file') {
      setSource(value);
    } else {
      setSource(null);
    }
  };

  const handleChangeURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmitFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) {
      return;
    }

    const file = e.currentTarget.files[0];
    const text = await file.text();
    const data = parseObject(text);

    setJsonResume(data);

    handleClose();
  };

  const handleSubmitUrl = async () => {
    const res = await fetch(url);
    const text = await res.text();
    const data = parseObject(text);

    setJsonResume(data);

    handleClose();
  };

  return (
    <>
      <ActionButton onClick={handleClickOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Load JSON Resume</DialogTitle>
        <DialogContent>
          <SourceRadioGroup onChange={handleChangeSource} />
          {source === 'url' ? (
            <URLTextField onChange={handleChangeURL} />
          ) : null}
        </DialogContent>
        <DialogActions>
          {source === 'url' ? (
            <Button onClick={handleSubmitUrl}>Load URL</Button>
          ) : null}
          {source === 'file' ? (
            <FileButton onChange={handleSubmitFile} />
          ) : null}
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

interface SourceRadioGroupProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SourceRadioGroup({ onChange }: SourceRadioGroupProps) {
  return (
    <FormControl>
      <RadioGroup row name="radio-buttons-group" onChange={onChange}>
        <FormControlLabel value="url" control={<Radio />} label="URL" />
        <FormControlLabel value="file" control={<Radio />} label="File" />
      </RadioGroup>
    </FormControl>
  );
}

interface URLTextFieldProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function URLTextField({ onChange }: URLTextFieldProps) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 0, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField label="URL" variant="outlined" onChange={onChange} />
    </Box>
  );
}

interface FileButtonProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileButton({ onChange }: FileButtonProps) {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Button component="label" role={undefined} tabIndex={-1}>
        Upload file
        <VisuallyHiddenInput type="file" onChange={onChange} />
      </Button>
    </Box>
  );
}

interface ActionButtonProps {
  onClick?: () => void;
}

function ActionButton({ onClick }: ActionButtonProps) {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" sx={fabStyle} aria-label="add" onClick={onClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}

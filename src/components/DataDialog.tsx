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

import validateJsonResume from '../utilities/validate-json-resume';
import parseJson5Yaml from '../utilities/parse-json5-yaml';
import type { JSONResumeObject } from '@reactresume/types';

import { DataContext } from '../contexts/DataContext';

interface Props {
  open: boolean;
  handleClose: () => void;
  onAlert: (message: string) => void;
}

export default function DataDialog({ open, handleClose, onAlert }: Props) {
  const [, setJsonResume] = useContext(DataContext);

  const [source, setSource] = useState<'url' | 'file' | null>(null);
  const [url, setUrl] = useState<string>('sample.json');

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
    const data = parseJson5Yaml(text);
    setJsonResume(data as JSONResumeObject);

    handleClose();

    if (!validateJsonResume(data)) {
      onAlert('JSON schema error, see console for details');
    }
  };

  const handleSubmitUrl = async () => {
    const res = await fetch(url);
    const text = await res.text();
    const data = parseJson5Yaml(text);
    setJsonResume(data as JSONResumeObject);

    handleClose();

    if (!validateJsonResume(data)) {
      onAlert('JSON schema error, see console for details');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} disableRestoreFocus={true}>
      <DialogTitle>Load JSON Resume</DialogTitle>
      <DialogContent>
        <SourceRadioGroup value={source} onChange={handleChangeSource} />
        {source === 'url' ? (
          <URLTextField value={url} onChange={handleChangeURL} />
        ) : null}
      </DialogContent>
      <DialogActions>
        {source === 'url' ? (
          <Button onClick={handleSubmitUrl}>Load URL</Button>
        ) : null}
        {source === 'file' ? <FileButton onChange={handleSubmitFile} /> : null}
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

interface SourceRadioGroupProps {
  value?: 'url' | 'file' | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SourceRadioGroup({ value, onChange }: SourceRadioGroupProps) {
  return (
    <FormControl>
      <RadioGroup
        row
        name="radio-buttons-group"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="url" control={<Radio />} label="URL" />
        <FormControlLabel value="file" control={<Radio />} label="File" />
      </RadioGroup>
    </FormControl>
  );
}

interface URLTextFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function URLTextField({ value, onChange }: URLTextFieldProps) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 0, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField
        label="URL"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
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

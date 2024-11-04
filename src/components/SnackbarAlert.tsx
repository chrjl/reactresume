import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface Props {
  open: boolean;
  onClose: () => void;
  severity?: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

export default function CustomizedSnackbars({
  open,
  onClose,
  severity,
  message,
}: Props) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert
          onClose={onClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

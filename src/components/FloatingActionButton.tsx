import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface Props {
  onClick?: () => void;
}

export default function FloatingActionButton({ onClick }: Props) {
  const fabStyle = {
    position: 'fixed',
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

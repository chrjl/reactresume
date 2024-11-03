import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreIcon from '@mui/icons-material/MoreVert';

interface Props {
  handleOpenMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonAppBar({ handleOpenMenu }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Resume
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            component={Link}
            href="https://github.com/chrjl/reactresume"
            target="_blank"
            sx={{ mr: 2 }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleOpenMenu}
            sx={{ mr: 2 }}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

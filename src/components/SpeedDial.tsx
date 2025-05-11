import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

interface Props {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  actions: {
    icon: JSX.Element;
    name?: string;
    handleClick?: () => void;
  }[];
}

export default function ControlledOpenSpeedDial({
  open,
  onOpen,
  onClose,
  actions,
}: Props) {
  return (
    <Box sx={{ width: 320, position: 'fixed', bottom: 16, right: 16, m: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        icon={<SpeedDialIcon />}
        direction="left"
        onOpen={onOpen}
        onClose={onClose}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              onClose();
              if (action.handleClick) {
                action.handleClick();
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

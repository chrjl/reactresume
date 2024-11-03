import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  anchorEl: Element | null;
  onClose: () => void;
  handleOpenDocumentDialog: () => void;
}

export default function AppMenu({
  anchorEl,
  onClose,
  handleOpenDocumentDialog,
}: Props) {
  const open = Boolean(anchorEl);

  const onClickDocument = () => {
    handleOpenDocumentDialog();
    onClose()
  }

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={onClose}>Edit resume</MenuItem>
      <Divider />
      <MenuItem onClick={onClickDocument}>Customize document</MenuItem>
      <MenuItem onClick={onClose}>Customize headings</MenuItem>
    </Menu>
  );
}

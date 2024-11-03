import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  anchorEl: Element | null;
  onClose: () => void;
  handleOpenDocumentDialog: () => void;
  handleOpenHeadingsDialog: () => void;
}

export default function AppMenu({
  anchorEl,
  onClose,
  handleOpenDocumentDialog,
  handleOpenHeadingsDialog,
}: Props) {
  const open = Boolean(anchorEl);

  const onClickDocument = () => {
    handleOpenDocumentDialog();
    onClose();
  };

  const onClickHeadings = () => {
    handleOpenHeadingsDialog();
    onClose();
  };

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
      <MenuItem onClick={onClickHeadings}>Customize headings</MenuItem>
    </Menu>
  );
}

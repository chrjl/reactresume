import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  anchorEl: Element | null;
  onClose: () => void;
  handleOpenDocumentDialog: () => void;
  handleOpenHeadingsDialog: () => void;
  handleOpenEditorDialog: () => void;
}

export default function AppMenu({
  anchorEl,
  onClose,
  handleOpenDocumentDialog,
  handleOpenHeadingsDialog,
  handleOpenEditorDialog,
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

  const onClickEditor = () => {
    handleOpenEditorDialog();
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
      <MenuItem onClick={onClickEditor}>Edit resume</MenuItem>
      <Divider />
      <MenuItem onClick={onClickDocument}>Customize document</MenuItem>
      <MenuItem onClick={onClickHeadings}>Customize headings</MenuItem>
    </Menu>
  );
}

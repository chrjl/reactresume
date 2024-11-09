import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  anchorEl: Element | null;
  onClose: () => void;
  handleOpenDataDialog: () => void;
  handleOpenDocumentDialog: () => void;
  handleOpenHeadingsDialog: () => void;
  handleOpenEditorDialog: () => void;
  isPdfDisplay: boolean;
  handleTogglePdfDisplay: () => void;
}

export default function AppMenu({
  anchorEl,
  onClose,
  handleOpenDataDialog,
  handleOpenDocumentDialog,
  handleOpenHeadingsDialog,
  handleOpenEditorDialog,
  isPdfDisplay,
  handleTogglePdfDisplay,
}: Props) {
  const open = Boolean(anchorEl);

  const onClickLoad = () => {
    handleOpenDataDialog();
    onClose();
  };

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

  const onClickPdf = () => {
    handleTogglePdfDisplay();
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
      <MenuItem onClick={onClickLoad}>Load resume</MenuItem>
      <MenuItem onClick={onClickEditor}>Edit resume</MenuItem>
      <MenuItem onClick={onClickPdf}>
        {isPdfDisplay ? 'Close' : 'Open'} PDF
      </MenuItem>
      <Divider />
      <MenuItem onClick={onClickDocument}>Customize document</MenuItem>
      <MenuItem onClick={onClickHeadings}>Customize headings</MenuItem>
    </Menu>
  );
}

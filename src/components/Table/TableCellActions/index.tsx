import { IconButton, TableCell } from '@mui/material';
import useIcons from '../../../hooks/useIcons';

export default function TableCellActions() {
  const { getIcons } = useIcons();
  const { EditIcon, InfoIcon, DeleteIcon } = getIcons();
  return (
    <TableCell>
      <IconButton aria-label="Info" color="info">
        <InfoIcon />
      </IconButton>
      <IconButton aria-label="Editar" color="warning">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="Excluir" color="error">
        <DeleteIcon />
      </IconButton>
    </TableCell>
  );
}

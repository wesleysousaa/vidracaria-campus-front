import { IconButton, TableCell } from '@mui/material';
import useIcons from '../../../hooks/useIcons';
import { Link } from 'react-router-dom';

interface TableCellActionsProps {
  dispach: (idObject: string, typeAction: string) => void;
  idObject: string;
}

export default function TableCellActions(props: TableCellActionsProps) {
  const { getIcons } = useIcons();
  const { EditIcon, InfoIcon, DeleteIcon } = getIcons();

  return (
    <TableCell>
      <Link to={`info/${props.idObject}`}>
        <IconButton aria-label="Info" color="info">
          <InfoIcon />
        </IconButton>
      </Link>
      <Link to={`edit/${props.idObject}`}>
        <IconButton aria-label="Editar" color="warning">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton
        aria-label="Excluir"
        color="error"
        onClick={() => props.dispach(props.idObject, 'delete')}
      >
        <DeleteIcon />
      </IconButton>
    </TableCell>
  );
}

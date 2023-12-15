import { IconButton, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';
import useGetIcons from '../../../hooks/useGetIcons';

interface TableCellActionsProps {
  dispach: (idObject: string, typeAction: string) => void;
  idObject: string;
}

export default function TableCellActions(props: TableCellActionsProps) {
  const { EditIcon, InfoIcon, DeleteIcon } = useGetIcons();

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

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import useGetIcons from '../../hooks/useGetIcons';

interface TableCellActionsProps {
  dispach: (idObject: string, typeAction: string) => void;
  idObject: string;
}

export default function TableCellActions({
  dispach,
  idObject,
}: TableCellActionsProps) {
  const { EditIcon, InfoIcon, DeleteIcon } = useGetIcons();

  return (
    <>
      <Link to={`info/${idObject}`}>
        <IconButton aria-label="Info" color="info">
          <InfoIcon />
        </IconButton>
      </Link>
      <Link to={`edit/${idObject}`}>
        <IconButton aria-label="Editar" color="warning">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton
        aria-label="Excluir"
        color="error"
        onClick={() => dispach(idObject, 'delete')}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

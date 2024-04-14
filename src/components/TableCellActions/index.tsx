import { IconButton } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import useGetIcons from '../../hooks/useGetIcons';
import ConfirmAction from '../ConfirmAction';

export interface TableCellActionsProps {
  dispach: (idObject: string) => void;
  idObject: string;
  handleClick: (id: string) => void;
}

export default function TableCellActions({
  idObject,
  dispach,
  handleClick,
}: TableCellActionsProps) {
  const { EditIcon, InfoIcon, DeleteIcon } = useGetIcons();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ConfirmAction
        confirmDispach={() => {
          dispach(idObject);
          setOpen(false);
        }}
        open={open}
        denyDispach={() => setOpen(false)}
      />

      <IconButton
        aria-label="Info"
        color="info"
        onClick={() => handleClick(idObject)}
      >
        <InfoIcon />
      </IconButton>

      <Link to="/customers/edit/$id" params={{ id: idObject }}>
        <IconButton aria-label="Editar" color="warning">
          <EditIcon />
        </IconButton>
      </Link>
      <IconButton
        aria-label="Excluir"
        color="error"
        onClick={() => setOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import useGetIcons from '../../hooks/useGetIcons';
import Modal from '../Modal';
import ConfirmAction from '../ConfirmAction';
import { useState } from 'react';

interface TableCellActionsProps {
  dispach: (idObject: string) => void;
  idObject: string;
}

export default function TableCellActions({
  dispach,
  idObject,
}: TableCellActionsProps) {
  const { EditIcon, InfoIcon, DeleteIcon } = useGetIcons();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onCloseDispach={() => setOpen(false)}
        component={
          <ConfirmAction
            confirmDispach={() => {
              dispach(idObject);
              setOpen(false);
            }}
            denyDispach={() => setOpen(false)}
            text="A ação de exclusão não poderá ser desfeita."
          />
        }
      />
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
        onClick={() => setOpen(true)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

import { IconButton, Modal } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetIcons from '../../hooks/useGetIcons';
import { modalStyles } from '../../styles';
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
      <Modal open={open} onClose={() => setOpen(false)} sx={modalStyles}>
        <ConfirmAction
          confirmDispach={() => {
            dispach(idObject);
            setOpen(false);
          }}
          denyDispach={() => setOpen(false)}
          text="A ação de exclusão não poderá ser desfeita."
        />
      </Modal>

      <IconButton
        aria-label="Info"
        color="info"
        onClick={() => handleClick(idObject)}
      >
        <InfoIcon />
      </IconButton>

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

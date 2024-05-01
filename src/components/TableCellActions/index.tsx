import { IconButton, Tooltip } from '@mui/material';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import useGetIcons from '../../hooks/useGetIcons';
import ConfirmAction from '../ConfirmAction';

export interface TableCellActionsProps {
  idObject: string;
  type: 'product' | 'customer';
  dispach: (idObject: string) => void;
  handleClick: (id: string) => void;
}

export default function TableCellActions({
  idObject,
  type,
  dispach,
  handleClick,
}: TableCellActionsProps) {
  const { EditIcon, InfoIcon, DeleteIcon } = useGetIcons();
  const [open, setOpen] = useState(false);
  const [typeTranslate, setTypeTranslate] = useState<string>('');

  useEffect(() => {
    setTypeTranslate(type === 'product' ? 'Produto' : 'Cliente');
  }, []);

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

      <Tooltip title={`Ver informação de ${typeTranslate}`}>
        <IconButton
          aria-label="Info"
          color="info"
          onClick={() => handleClick(idObject)}
        >
          <InfoIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={`Editar informações de ${typeTranslate}`}>
        <Link
          to={type == 'customer' ? '/customers/edit/$id' : '/products/edit/$id'}
          params={{ id: idObject }}
        >
          <IconButton aria-label="Editar" color="warning">
            <EditIcon />
          </IconButton>
        </Link>
      </Tooltip>

      <Tooltip title={`Excluir informações de ${typeTranslate}`}>
        <IconButton
          aria-label="Excluir"
          color="error"
          onClick={() => setOpen(true)}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

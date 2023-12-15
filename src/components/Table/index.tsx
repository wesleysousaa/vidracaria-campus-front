import {
  Table as TabMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import { ConfirmAction } from '../ConfirmAction';
import Modal from '../Modal';
import TableCellActions from './TableCellActions';

interface TableProps {
  data?: any[] | undefined;
  title: string;
  loading: boolean;
  deleteButtonDispach: (id: string) => void;
}

export default function Table(props: TableProps) {
  let rows = Object.keys((props.data && props.data[0]) || {});
  rows = rows.slice(0, 5);
  const [open, setOpen] = useState(false);
  const [idItem, setIdItem] = useState('');

  const handleOpen = (idItem: string, type: string) => {
    setOpen(true);
    const item = props.data?.find((item) => item.id === idItem);
    setIdItem(item.id);
  };

  const handleDelete = () => {
    props.deleteButtonDispach(idItem);
    setOpen(false);
  };

  if (props.loading) return <div>Carregando...</div>;

  return (
    <TableContainer
      sx={{
        marginTop: '2em',
        overflowY: 'scroll',
        height: '70vh',
      }}
    >
      <Modal
        open={open}
        onCloseDispach={() => setOpen(false)}
        component={
          <ConfirmAction
            confirmDispach={handleDelete}
            denyDispach={() => setOpen(false)}
            text="A ação de exclusão não poderá ser desfeita."
          />
        }
      />

      <TabMUI>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Tipo de Pessoa</TableCell>
            <TableCell>CPF/CNPJ</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data &&
            props.data.map((item, index) => (
              <TableRow key={index + 'row'}>
                {rows &&
                  rows.map((col, key) => (
                    <TableCell key={key}>{item[col]}</TableCell>
                  ))}
                <TableCellActions dispach={handleOpen} idObject={item.id} />
              </TableRow>
            ))}
        </TableBody>
      </TabMUI>
    </TableContainer>
  );
}

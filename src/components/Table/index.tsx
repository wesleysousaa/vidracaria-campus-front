import {
  Table as TabMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import TableCellActions from './TableCellActions';
import Modal from '../Modal';
import { ConfirmAction } from '../ConfirmAction';

interface TableProps {
  data: any[];
  title: string;
}

export default function Table(props: TableProps) {
  const columns = Object.keys(props.data[0]);
  const [open, setOpen] = useState(false);
  const [idItem, setIdItem] = useState();

  const handleOpen = (idItem: string, type: string) => {
    setOpen(true);
    const item = props.data.find((item) => item.id === idItem);
    setIdItem(item.id);
  };

  const handleDelete = () => {
    console.log(idItem);
  };

  return (
    <TableContainer
      sx={{
        marginTop: '2em',
      }}
    >
      <Modal
        open={open}
        onCloseDispach={() => setOpen(false)}
        component={
          <ConfirmAction
            confirmDispach={handleDelete}
            denyDispach={() => setOpen(false)}
          />
        }
      />

      <TabMUI>
        <TableHead>
          <TableRow>
            {columns &&
              columns.map((item, index) => (
                <TableCell key={index + item}>{item}</TableCell>
              ))}
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data &&
            props.data.map((item, index) => (
              <TableRow key={index + 'row'}>
                {columns &&
                  columns.map((col, key) => (
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

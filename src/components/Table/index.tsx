import {
  Table as TabMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import TableCellActions from './TableCellActions';
import Modal from '../Modal';

interface TableProps {
  data: any[];
  title: string;
  editForm?: ReactNode;
  createForm?: ReactNode;
  infoComponent?: ReactNode;
}

export default function Table(props: TableProps) {
  const columns = Object.keys(props.data[0]);
  const [open, setOpen] = useState(false);

  return (
    <TableContainer
      sx={{
        marginTop: '2em',
      }}
    >
      <Modal open={open} onCloseDispach={setOpen} component={<></>} />;
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
                <TableCellActions />
              </TableRow>
            ))}
        </TableBody>
      </TabMUI>
    </TableContainer>
  );
}

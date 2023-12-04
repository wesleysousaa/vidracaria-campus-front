import {
  TableContainer,
  Table as TabMUI,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import useIcons from '../../hooks/useIcons';
import { ReactNode } from 'react';

export default function Table(props: {
  data: any[];
  title: string;
  editForm?: ReactNode;
  deleteForm?: ReactNode;
  infoComponent?: ReactNode;
}) {
  const { getIcons } = useIcons();
  const { EditIcon, InfoIcon, DeleteIcon } = getIcons();

  const columns = Object.keys(props.data[0]);

  return (
    <TableContainer
      sx={{
        marginTop: '2em',
      }}
    >
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
                <TableCell>
                  <IconButton aria-label="Info" color="info">
                    <InfoIcon />
                  </IconButton>
                  <IconButton aria-label="Editar" color="warning">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="Excluir" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </TabMUI>
    </TableContainer>
  );
}

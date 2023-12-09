import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Table from '../../components/Table';
import useIcons from '../../hooks/useIcons';
import { SearchSchema } from '../../shemas/SearchingInTable';
import { ClientValidation, SearchValidation } from '../../types';
import { boxStyles, boxStylesForm, formStyles } from './clientsStyles';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useClient } from '../../hooks/useClient';
import { enqueueSnackbar } from 'notistack';
export default function Clients() {
  const { getAll, deleteOne } = useClient();
  const [data, setData] = useState<ClientValidation[]>([]);

  useEffect(() => {
    async function fetch() {
      setData(await getAll());
    }
    fetch();
  }, []);

  const {
    control,
    formState: {},
  } = useForm<SearchValidation>({
    resolver: yupResolver(SearchSchema),
    defaultValues: {
      value: '',
    },
  });

  const { getIcons } = useIcons();
  const { SearchIcon } = getIcons();

  const onDelete = async (id: string) => {
    await deleteOne(id);
    setData(await getAll());
    enqueueSnackbar('Cliente excluído com sucesso!', { variant: 'success' });
  };

  return (
    <Box sx={boxStyles}>
      <Typography variant="h4" fontWeight={'bold'}>
        Clientes
      </Typography>
      <Box sx={boxStylesForm}>
        <FormControl onSubmit={() => console.log('submit')} sx={formStyles}>
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <TextField
                id="search-textfiled"
                label="Pesquisa"
                variant="outlined"
                placeholder="Nome, Rua, Email..."
                type="search"
                fullWidth
                {...field}
              />
            )}
          />
          <IconButton aria-label="search-icon" color="info" type="submit">
            <SearchIcon fontSize="large" />
          </IconButton>
        </FormControl>

        <Link to={'create'}>
          <Button variant="contained" color="success">
            Novo Cliente
          </Button>
        </Link>
      </Box>
      {data && (
        <Table deleteButtonDispach={onDelete} data={data} title="Clientes" />
      )}
    </Box>
  );
}

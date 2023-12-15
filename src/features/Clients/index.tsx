import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import useIcons from '../../hooks/useIcons';
import { SearchSchema } from '../../shemas/SearchingInTable';
import { ClientValidation, SearchValidation } from '../../types';
import { boxStyles, boxStylesForm, formStyles } from './clientsStyles';
import { useEffect, useState } from 'react';
import { useClient } from '../../hooks/useClient';

export default function Clients() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchValidation>({
    resolver: yupResolver(SearchSchema),
    defaultValues: {
      value: '',
    },
  });

  const { getIcons } = useIcons();
  const { SearchIcon } = getIcons();
  const { getAll, deleteOne, search } = useClient();
  const [data, setData] = useState<ClientValidation[]>();

  const handleDelete = (id: string) => {
    deleteOne(id);
    window.location.reload();
  };

  const handleSearch: SubmitHandler<SearchValidation> = async (data) => {
    setData(await search(data.value ? data.value : ''));
  };

  useEffect(() => {
    async function getData() {
      setData(await getAll());
    }
    getData();
  }, []);

  return (
    <Box sx={boxStyles} component={'main'}>
      <Typography variant="h4" fontWeight={'bold'}>
        Clientes
      </Typography>
      <Box sx={boxStylesForm}>
        <form onSubmit={handleSubmit(handleSearch)} style={formStyles}>
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
        </form>

        <Link to="add">
          <Button variant="contained" color="success">
            Novo Cliente
          </Button>
        </Link>
      </Box>

      <Table deleteButtonDispach={handleDelete} data={data} title="Clientes" />
    </Box>
  );
}

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import { useClient } from '../../hooks/useClient';
import useGetIcons from '../../hooks/useGetIcons.tsx';
import { useGetAllCustomers } from '../../services/hooks/Customer/clientv2.ts';
import { SearchSchema } from '../../shemas/SearchingInTable';
import { SearchValidation } from '../../types';
import { boxStyles, boxStylesForm, formStyles } from './clientsStyles';

export default function Customers() {
  const allCustomers = useGetAllCustomers();
  const { SearchIcon } = useGetIcons();
  const { deleteOne, search } = useClient();

  const handleDelete = (id: string) => {
    deleteOne(id);
    // window.location.reload();
  };

  const handleSearch: SubmitHandler<SearchValidation> = async (data) => {
    // setData(await search(data.value ? data.value : ''));
  };

  const {
    control,
    handleSubmit,
    formState: {},
  } = useForm<SearchValidation>({
    resolver: yupResolver(SearchSchema),
    defaultValues: {
      value: '',
    },
  });

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

      <Table
        loading={allCustomers.isLoading}
        deleteButtonDispach={handleDelete}
        data={allCustomers.data ?? []}
        title="Clientes"
      />
    </Box>
  );
}

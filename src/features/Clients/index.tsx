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
import { SearchValidation } from '../../types';
import { boxStyles, boxStylesForm, formStyles } from './clientsStyles';
import { Link } from 'react-router-dom';

export default function Clients() {
  const {
    control,
    formState: {},
  } = useForm<SearchValidation>({
    resolver: yupResolver(SearchSchema),
  });

  const { getIcons } = useIcons();
  const { SearchIcon } = getIcons();

  const mockData = [
    {
      id: '1',
      cep: '12345-678',
      city: 'Cidade Fictícia',
      cpfCnpj: '000.000.000-00',
      email: 'email@example.com',
      name: 'Nome Fictício',
      number: '123',
      phone: '(00) 00000-0000',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia',
      pointReference: 'Referência Fictícia',
    },
    {
      id: '2',
      cep: '12345-679',
      city: 'Cidade Fictícia 2',
      cpfCnpj: '111.111.111-11',
      email: 'email2@example.com',
      name: 'Nome Fictício 2',
      number: '456',
      phone: '(11) 11111-1111',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 2',
      pointReference: 'Referência Fictícia 2',
    },
    {
      id: '3',
      cep: '12345-680',
      city: 'Cidade Fictícia 3',
      cpfCnpj: '222.222.222-22',
      email: 'email3@example.com',
      name: 'Nome Fictício 3',
      number: '789',
      phone: '(22) 22222-2222',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 3',
      pointReference: 'Referência Fictícia 3',
    },
    {
      id: '4',
      cep: '12345-681',
      city: 'Cidade Fictícia 4',
      cpfCnpj: '333.333.333-33',
      email: 'email4@example.com',
      name: 'Nome Fictício 4',
      number: '987',
      phone: '(33) 33333-3333',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 4',
      pointReference: 'Referência Fictícia 4',
    },
    {
      id: '5',
      cep: '12345-682',
      city: 'Cidade Fictícia 5',
      cpfCnpj: '444.444.444-44',
      email: 'email5@example.com',
      name: 'Nome Fictício 5',
      number: '654',
      phone: '(44) 44444-4444',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 5',
      pointReference: 'Referência Fictícia 5',
    },
    {
      id: '6',
      cep: '12345-683',
      city: 'Cidade Fictícia 6',
      cpfCnpj: '555.555.555-55',
      email: 'email6@example.com',
      name: 'Nome Fictício 6',
      number: '321',
      phone: '(55) 55555-5555',
      state: 'PB',
      people: 'FÍSICA',
      street: 'Rua Fictícia 6',
      pointReference: 'Referência Fictícia 6',
    },
  ];
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
          <Button variant="contained" sx={{ height: '4em' }} color="success">
            Novo Cliente
          </Button>
        </Link>
      </Box>
      <Table data={mockData} title="Clientes" />
    </Box>
  );
}

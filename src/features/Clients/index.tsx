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
import AddClient from '../../components/Client/Add';

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
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'Maria da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'José da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 1',
    },
    {
      nome: 'João da Silva',
      cpfCnpj: '000.000.000-00',
      telefone: '(00) 00000-0000',
      rua: 'Rua 2',
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

        <Button variant="contained" sx={{ height: '4em' }} color="success">
          Novo Cliente
        </Button>
      </Box>
      <Table data={mockData} title="Clientes" createForm={<AddClient />} />
    </Box>
  );
}

import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { boxStyles } from '../clientsStyles';

import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation } from 'react-router-dom';
import useIcons from '../../../hooks/useIcons';
import { ClientSchema } from '../../../shemas/Client';
import { ClientValidation } from '../../../types';
import { boxStylesForm, textFieldStyles } from './formStyles';

export default function FormClient() {
  const { getIcons } = useIcons();
  const { ArrowBackIosIcon } = getIcons();
  const location = useLocation();

  // Simulação dos dados mockados
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
      people: 'Física',
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
      people: 'Física',
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
      people: 'Física',
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
      people: 'Física',
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
      people: 'Física',
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
      people: 'Física',
      street: 'Rua Fictícia 6',
      pointReference: 'Referência Fictícia 6',
    },
  ];

  const getItem = () => {
    const id = location.pathname.split('/')[3];
    const item = mockData.find((item) => item.id === id);
    return item;
  };

  const prepareDefaultValues = (
    defaultString: string,
    atributte: keyof (typeof mockData)[0],
  ) => {
    const item = getItem();
    if (item) {
      return item[atributte] ? item[atributte] : defaultString;
    } else {
      return defaultString;
    }
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClientValidation>({
    resolver: yupResolver(ClientSchema),
    defaultValues: {
      cep: prepareDefaultValues('', 'cep'),
      city: prepareDefaultValues('', 'city'),
      cpfCnpj: prepareDefaultValues('', 'cpfCnpj'),
      email: prepareDefaultValues('', 'email'),
      name: prepareDefaultValues('', 'name'),
      number: prepareDefaultValues('', 'number'),
      phone: prepareDefaultValues('', 'phone'),
      state: prepareDefaultValues('PB', 'state'),
      people: prepareDefaultValues('Física', 'people'),
      street: prepareDefaultValues('', 'street'),
      pointReference: prepareDefaultValues('', 'pointReference'),
    },
  });

  return (
    <Box sx={boxStyles}>
      <Link to="/clientes" style={{ color: '#000' }}>
        <IconButton aria-label="Voltar" color="inherit">
          <ArrowBackIosIcon />
          Fechar
        </IconButton>
      </Link>
      <form
        onSubmit={handleSubmit(() => {})}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '1em',
          width: '98%',
        }}
      >
        <Typography variant="h3" marginBottom="1em">
          {getItem()
            ? `Edição do Cliente ${getItem()?.name}`
            : 'Cadastrar Cliente'}
        </Typography>

        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              type="text"
              label="Nome"
              placeholder="Digite o nome"
              sx={textFieldStyles}
              {...field}
            />
          )}
        />

        <Box sx={boxStylesForm}>
          <Controller
            name="people"
            control={control}
            render={({ field }) => (
              <Select
                sx={{
                  width: '30%',
                  ...textFieldStyles,
                }}
                labelId="select-people"
                id="select-people"
                label="Pessoa"
                {...field}
              >
                <MenuItem value={'Física'}>Física</MenuItem>
                <MenuItem value={'Jurídica'}>Jurídica</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="cpfCnpj"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                label="CPF/CNPJ"
                placeholder="Digite o CPF ou CNPJ do cliente"
                {...field}
              />
            )}
          />
        </Box>

        <Box sx={boxStylesForm}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                label="Email"
                placeholder="Digite o email do cliente"
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '30%',
                  ...textFieldStyles,
                }}
                type="tel"
                label="Telefone"
                placeholder="Digite o telefone do cliente"
                {...field}
              />
            )}
          />
        </Box>

        <Controller
          name="street"
          control={control}
          render={({ field }) => (
            <TextField
              type="text"
              label="Rua"
              sx={textFieldStyles}
              placeholder="Digite o nome da rua"
              {...field}
            />
          )}
        />

        <Box sx={boxStylesForm}>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                label="CEP"
                placeholder="Digite o CEP do cliente"
                {...field}
              />
            )}
          />
          <Controller
            name="state"
            defaultValue="PB"
            control={control}
            render={({ field }) => (
              <Select
                sx={{
                  width: '30%',
                  ...textFieldStyles,
                }}
                defaultValue="PB"
                labelId="select-state"
                id="select-state"
                label="Teste"
                {...field}
              >
                <MenuItem value={'PB'}>PB</MenuItem>
              </Select>
            )}
          />
        </Box>

        <Controller
          name="pointReference"
          control={control}
          render={({ field }) => (
            <TextField
              type="text"
              sx={textFieldStyles}
              label="Referência"
              placeholder="ex: próximo ao mercado central"
              {...field}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '15em',
            display: 'flex',
            alignSelf: 'center',
          }}
        >
          Salvar
        </Button>
      </form>
    </Box>
  );
}

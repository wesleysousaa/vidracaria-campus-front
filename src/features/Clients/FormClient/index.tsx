import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { boxStyles } from '../clientsStyles';

import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useLocation } from 'react-router-dom';
import useIcons from '../../../hooks/useIcons';
import { ClientSchema } from '../../../shemas/Client';
import { ClientValidation } from '../../../types';
import { boxStylesForm, textFieldStyles } from './formStyles';
import { useClient } from '../../../hooks/useClient';
import { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function FormClient() {
  const { getIcons } = useIcons();
  const { getOne, update, create } = useClient();
  const [item, setItem] = useState<ClientValidation | null>(null);
  const { ArrowBackIosIcon } = getIcons();
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split('/')[3];
  const states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  const prepareDefaultValues = (
    defaultString: string,
    atributte: keyof ClientValidation,
  ) => {
    if (item) {
      return item && typeof item[atributte] !== 'undefined'
        ? item[atributte]
        : defaultString;
    } else {
      return defaultString;
    }
  };

  const showSnackBar = (response: ClientValidation) => {
    if (response.id) {
      enqueueSnackbar('Cliente salvo com sucesso!', {
        variant: 'success',
      });
    } else {
      enqueueSnackbar('Erro ao salvar cliente!', {
        variant: 'error',
      });
    }
    navigate('/clientes');
  };

  const onSubmit: SubmitHandler<ClientValidation> = async (data) => {
    if (id) {
      showSnackBar(await update(data));
      return;
    }

    showSnackBar(await create(data));
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ClientValidation>({
    resolver: yupResolver(ClientSchema),
    defaultValues: {
      id: prepareDefaultValues('', 'id'),
      zipCode: prepareDefaultValues('', 'zipCode'),
      city: prepareDefaultValues('', 'city'),
      cpf_cnpj: prepareDefaultValues('', 'cpf_cnpj'),
      email: prepareDefaultValues('', 'email'),
      name: prepareDefaultValues('', 'name'),
      number: prepareDefaultValues('', 'number'),
      phone: prepareDefaultValues('', 'phone'),
      state: prepareDefaultValues('PB', 'state'),
      customerType: prepareDefaultValues('Física', 'customerType'),
      address: prepareDefaultValues('', 'address'),
      landmark: prepareDefaultValues('', 'landmark'),
    },
  });

  useEffect(() => {
    async function fetch() {
      if (!id) return;
      const data: ClientValidation = await getOne(id);

      Object.keys(data).map((atributte: string) =>
        setValue(
          atributte as keyof ClientValidation,
          data[atributte as keyof ClientValidation],
        ),
      );
      setItem(data);
    }
    fetch();
  }, []);

  return (
    <Box sx={boxStyles}>
      <Link to="/clientes" style={{ color: '#000' }}>
        <IconButton aria-label="Voltar" color="inherit">
          <ArrowBackIosIcon />
          Fechar
        </IconButton>
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '1em',
          width: '98%',
        }}
      >
        <Typography variant="h3" marginBottom="1em">
          {item ? `Edição do Cliente ${item?.name}` : 'Cadastrar Cliente'}
        </Typography>

        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              type="text"
              id="name"
              label="Nome"
              placeholder="Digite o nome"
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={textFieldStyles}
              {...field}
            />
          )}
        />

        <Box sx={boxStylesForm}>
          <Controller
            name="customerType"
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
            name="cpf_cnpj"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                id="cpf_cnpj"
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
                id="email"
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
                id="phone"
                type="tel"
                label="Telefone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                placeholder="Digite o telefone do cliente"
                {...field}
              />
            )}
          />
        </Box>

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              id="address"
              type="text"
              label="Rua"
              error={!!errors.address}
              helperText={errors.address?.message}
              sx={textFieldStyles}
              placeholder="Digite o nome da rua"
              {...field}
            />
          )}
        />

        <Box sx={boxStylesForm}>
          <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                id="zipCode"
                label="CEP"
                error={!!errors.zipCode}
                helperText={errors.zipCode?.message}
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
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </Box>

        <Controller
          name="landmark"
          control={control}
          render={({ field }) => (
            <TextField
              type="text"
              id="landmark"
              sx={textFieldStyles}
              label="Referência"
              placeholder="ex: próximo ao mercado central"
              {...field}
            />
          )}
        />

        <Button
          id="btn-save"
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

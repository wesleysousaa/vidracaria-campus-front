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
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useClient } from '../../../hooks/useClient';
import useIcons from '../../../hooks/useIcons';
import {
  useCreateCustomer,
  useUpdateCustomer,
} from '../../../services/hooks/Customer/clientv2.ts';
import { ClientSchema } from '../../../shemas/Client';
import { CustomerValidation } from '../../../types';
import { boxStylesForm, textFieldStyles } from './formStyles';

export default function CustomerForm() {
  const createCustomer = useCreateCustomer();
  const updateCustomer = useUpdateCustomer();

  const { getIcons } = useIcons();
  const { getOne } = useClient();
  const [item, setItem] = useState<CustomerValidation | null>(null);
  const { ArrowBackIosIcon } = getIcons();
  const location = useLocation();
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

  const onSubmit: SubmitHandler<CustomerValidation> = async (data) => {
    if (id) {
      updateCustomer.mutate(data);
      return;
    }
    createCustomer.mutate(data);
  };

  const defaultValues = () => {
    if (!item) {
      return {
        customerType: 'FISICA',
        name: '',
        phone: '',
        cpfcnpj: '',
        email: '',
        id: '',
        address: {
          address: '',
          city: '',
          landmark: '',
          number: '',
          state: 'PB',
          zipCode: '',
        },
      } as CustomerValidation;
    }
    return item;
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<CustomerValidation>({
    resolver: yupResolver(ClientSchema),
    defaultValues: {
      ...defaultValues(),
    },
  });

  useEffect(() => {
    async function fetch() {
      if (!id) return;
      const data: CustomerValidation = await getOne(id);

      Object.keys(data).map((atributte: string) =>
        setValue(
          atributte as keyof CustomerValidation,
          data[atributte as keyof CustomerValidation],
        ),
      );
      setItem(data);
    }
    fetch();
  }, []);

  return (
    <Box sx={boxStyles}>
      <Link to="/customers" style={{ color: '#000' }}>
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
                <MenuItem value={'FISICA'}>Física</MenuItem>
                <MenuItem value={'JURIDICA'}>Jurídica</MenuItem>
              </Select>
            )}
          />
          <Controller
            name="cpfcnpj"
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
          name="address.address"
          control={control}
          render={({ field }) => (
            <TextField
              id="address"
              type="text"
              label="Rua"
              error={!!errors.address?.address}
              helperText={errors.address?.address?.message}
              sx={textFieldStyles}
              placeholder="Digite o nome da rua"
              {...field}
            />
          )}
        />

        <Box sx={boxStylesForm}>
          <Controller
            name="address.zipCode"
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
                error={!!errors.address?.zipCode}
                helperText={errors.address?.zipCode?.message}
                placeholder="Digite o CEP do cliente"
                {...field}
              />
            )}
          />
          <Controller
            name="address.state"
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

        <Box sx={boxStylesForm}>
          <Controller
            name="address.city"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                id="city-textfiled"
                label="Cidade"
                error={!!errors.address?.city}
                helperText={errors.address?.city?.message}
                placeholder="Digite a cidade do cliente"
                {...field}
              />
            )}
          />
          <Controller
            name="address.number"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{
                  width: '30%',
                  ...textFieldStyles,
                }}
                type="text"
                id="number-address"
                label="Número"
                error={!!errors.address?.number}
                helperText={errors.address?.number?.message}
                placeholder="Digite o número da casa do cliente"
                {...field}
              />
            )}
          />
        </Box>

        <Controller
          name="address.landmark"
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

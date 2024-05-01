import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReturnButton from '../../../../../components/ReturnButton/index.tsx';
import useGetState from '../../../../../features/Customers/hooks/useGetState.tsx';
import { ClientSchema } from '../../../../../features/Customers/schemas/index.ts';
import { useCreateCustomer } from '../../../../../features/Customers/services/index.tsx';
import {
  boxStylesForm,
  textFieldStyles,
} from '../../../../../features/Customers/styles/index.ts';
import { CustomerValidation } from '../../../../../features/Customers/types/index.ts';
import {
  boxStyles,
  formStyles,
  headerFormStyles,
} from '../../../../../styles/index.ts';

function CustomerCreateForm() {
  const states = useGetState();
  const createCustomer = useCreateCustomer();

  const onSubmit: SubmitHandler<CustomerValidation> = (data) => {
    createCustomer.mutate(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CustomerValidation>({
    resolver: yupResolver(ClientSchema),
    defaultValues: {
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
    },
  });

  return (
    <Box sx={boxStyles}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
        <Box style={headerFormStyles}>
          <ReturnButton link="/customers" />
          <Typography variant="h3">Cadastrar Cliente</Typography>
        </Box>

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
              <FormControl sx={textFieldStyles}>
                <InputLabel id="select-people-label">Pessoa</InputLabel>
                <Select
                  labelId="select-people-label"
                  id="select-people"
                  label="Pessoa"
                  {...field}
                >
                  <MenuItem value={'FISICA'} defaultChecked>
                    Física
                  </MenuItem>
                  <MenuItem value={'JURIDICA'}>Jurídica</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="cpfcnpj"
            control={control}
            render={({ field }) => (
              <TextField
                type="text"
                id="cpfcnpj"
                label="cpfcnpj"
                placeholder="Digite o CPF/CNPJ"
                error={!!errors.cpfcnpj}
                helperText={errors.cpfcnpj?.message}
                sx={textFieldStyles}
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
                sx={textFieldStyles}
                id="email"
                type="text"
                label="Email"
                placeholder="Digite o email do cliente"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                sx={textFieldStyles}
                id="phone"
                type="text"
                label="phone"
                placeholder="Digite o Telefone do cliente"
                error={!!errors.phone}
                helperText={errors.phone?.message}
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
                sx={textFieldStyles}
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
              <FormControl sx={textFieldStyles}>
                <InputLabel id="select-state-label">Estado</InputLabel>
                <Select
                  labelId="select-state-label"
                  id="select-state"
                  label="Estado"
                  {...field}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>

        <Box sx={boxStylesForm}>
          <Controller
            name="address.city"
            control={control}
            render={({ field }) => (
              <TextField
                sx={textFieldStyles}
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
            width: '100%',
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

export const Route = createLazyFileRoute(
  '/_authenticated/_layout/customers/add/',
)({
  component: CustomerCreateForm,
});

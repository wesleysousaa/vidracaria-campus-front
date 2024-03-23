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
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ReturnButton from '../../../components/ReturnButton/index.tsx';
import { boxStyles } from '../../../styles/index.ts';
import {
  boxStylesForm,
  textFieldStyles,
} from '../CustomerCreateForm/styles/index.ts';
import useGetState from '../hooks/useGetState.tsx';
import { ClientSchema } from '../schemas/index.ts';
import { useGetCustomerById, useUpdateCustomer } from '../services/index.tsx';
import { CustomerValidation } from '../types/index.ts';

export default function CustomerUpdateForm() {
  const { id } = useParams();
  const states = useGetState();
  const customer = useGetCustomerById(id);
  const updateCustomer = useUpdateCustomer();

  const onSubmit: SubmitHandler<CustomerValidation> = async (data) => {
    updateCustomer.mutate(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<CustomerValidation>({
    resolver: yupResolver(ClientSchema),
  });

  useEffect(() => {
    if (customer.data) {
      setValue('id', customer.data.id);
      setValue('name', customer.data.name);
      setValue('customerType', customer.data.customerType);
      setValue('cpfcnpj', customer.data.cpfcnpj);
      setValue('email', customer.data.email);
      setValue('phone', customer.data.phone);
      setValue('address.address', customer.data.address.address);
      setValue('address.zipCode', customer.data.address.zipCode);
      setValue('address.state', customer.data.address.state);
      setValue('address.city', customer.data.address.city);
      setValue('address.number', customer.data.address.number);
      setValue('address.landmark', customer.data.address.landmark);
    }
  }, [customer.data, setValue]);

  return (
    <Box sx={boxStyles}>
      <ReturnButton link="/customers" />
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
          Editar Cliente
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
              InputLabelProps={{
                shrink: !!field.value,
              }}
              {...field}
            />
          )}
        />

        <Box sx={boxStylesForm}>
          <Controller
            name="customerType"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: '30%', ...textFieldStyles }}>
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
                sx={{
                  width: '68%',
                  ...textFieldStyles,
                }}
                type="text"
                id="cpf_cnpj"
                label="CPF/CNPJ"
                placeholder="Digite o CPF ou CNPJ do cliente"
                {...field}
                InputLabelProps={{
                  shrink: !!field.value,
                }}
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
                InputLabelProps={{
                  shrink: !!field.value,
                }}
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
                InputLabelProps={{
                  shrink: !!field.value,
                }}
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
              InputLabelProps={{
                shrink: !!field.value,
              }}
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
                InputLabelProps={{
                  shrink: !!field.value,
                }}
              />
            )}
          />
          <Controller
            name="address.state"
            defaultValue="PB"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: '30%', ...textFieldStyles }}>
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
                InputLabelProps={{
                  shrink: !!field.value,
                }}
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
                InputLabelProps={{
                  shrink: !!field.value,
                }}
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
              InputLabelProps={{
                shrink: !!field.value,
              }}
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

import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { boxStyles } from '../../../features/Clients/clientsStyles';

import { ClientValidation } from '../../../types';
import useIcons from '../../../hooks/useIcons';
import { boxStylesForm, textFieldStyles } from './addFormStyles';

export default function AddClient() {
  const { getIcons } = useIcons();
  const { ArrowBackIosIcon } = getIcons();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ClientValidation>({
    defaultValues: {
      cep: '',
      city: '',
      cpfCnpj: '',
      email: '',
      name: '',
      number: '',
      phone: '',
      state: 'PB',
      people: 'Física',
      street: '',
      pointReference: '',
    },
  });
  return (
    <Box sx={boxStyles}>
      <IconButton aria-label="Voltar" color="inherit">
        <ArrowBackIosIcon />
        Voltar
      </IconButton>
      <FormControl
        component="form"
        onSubmit={handleSubmit(() => {})}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: '1em',
          width: '98%',
        }}
      >
        <Typography variant="h3" marginBottom="1em">
          Cadastro de Cliente
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
            control={control}
            render={({ field }) => (
              <Select
                sx={{
                  width: '30%',
                  ...textFieldStyles,
                }}
                labelId="select-state"
                id="select-state"
                label="Estado"
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
      </FormControl>
    </Box>
  );
}

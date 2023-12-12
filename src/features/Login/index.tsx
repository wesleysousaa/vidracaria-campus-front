import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema } from '../../shemas/User';
import { AuthContextActions } from '../../states/auth';
import { UserValidation } from '../../types';
import { boxStyles, formControlStyles, loginButtonStyles } from './loginStyles';

export default function Login() {
  const { login, error } = AuthContextActions();

  const {
    handleSubmit,
    control,
    formState: {},
  } = useForm<UserValidation>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<UserValidation> = (data) => {
    login(data);
  };

  return (
    <Box sx={boxStyles}>
      <Typography variant="h1">Login</Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={formControlStyles}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              type="email"
              label="Email"
              placeholder="Digite seu email"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              {...field}
            />
          )}
        />

        <Button type="submit" variant="contained" sx={loginButtonStyles}>
          Acessar
        </Button>
        {error && (
          <Alert variant="filled" severity="error">
            Email ou senha inválidos!
          </Alert>
        )}
      </FormControl>
    </Box>
  );
}

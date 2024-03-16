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
import { boxStyles, formControlStyles, loginButtonStyles } from './loginStyles';
import { useAuthUser } from './services';
import { LoginSchema } from './services/schemas';
import { UserValidation } from './types';

export default function Login() {
  const authUser = useAuthUser();

  const login = (userData: UserValidation) => {
    authUser.mutate(userData);
  };

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
        {authUser.error && (
          <Alert variant="filled" severity="error">
            Email ou senha inválidos!
          </Alert>
        )}
      </FormControl>
    </Box>
  );
}

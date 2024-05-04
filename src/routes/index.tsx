import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema } from '../features/Login/schemas';
import { useAuthUser } from '../features/Login/services';
import {
  boxStyles,
  formControlStyles,
  loginButtonStyles,
} from '../features/Login/styles';
import { UserValidation } from '../features/Login/types';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const authUser = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser.isSuccess) navigate({ to: '/dashboard' });
  }, [authUser.isSuccess]);

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
        <Link to=""></Link>
      </FormControl>
    </Box>
  );
}

export const Route = createFileRoute('/')({
  beforeLoad: (s) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated()) s.navigate({ to: '/dashboard' });
  },
  component: Login,
});

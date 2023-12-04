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
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from '../../shemas/Login';
import { UserValidation } from '../../types';

export default function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserValidation>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<UserValidation> = (data) => {
    // Lógica de autenticação aqui
    alert('Formulário submetido: ' + data);
    navigate('/relatorios');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">Login</Typography>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '500px', mt: 3, gap: '10px' }}
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

        {errors.email && (
          <Alert variant="filled" severity="error">
            {errors.email.message}
          </Alert>
        )}
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

        {errors.password && (
          <Alert variant="filled" severity="error">
            {errors.password.message}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: '10px',
            padding: '10px',
            fontSize: '1.2rem',
            backgroundColor: '#2196F3',
          }}
        >
          Acessar
        </Button>
      </FormControl>
    </Box>
  );
}

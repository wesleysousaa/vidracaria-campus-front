import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginSchema from '../../shemas/Login/schema';
import UserValidation from '../../shemas/Login/type';
import { useState } from 'react';

export default function Login() {
  const [isUser, setIsUser] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserValidation>({
    resolver: yupResolver(LoginSchema), // Use yupResolver diretamente
  });

  const onSubmit: SubmitHandler<UserValidation> = (data) => {
    // Lógica de autenticação aqui
    setIsUser(true);
    alert('Formulário submetido: ' + data);
    setIsUser(false);
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
        {!isUser && (
          <Alert variant="filled" severity="error">
            Usuário não encontrado
          </Alert>
        )}
      </FormControl>
    </Box>
  );
}

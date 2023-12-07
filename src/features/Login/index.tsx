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
import { AuthContextActions } from '../../states/auth/AuthProvider';
import { UserValidation } from '../../types';
import { boxStyles, formControlStyles, loginButtonStyles } from './loginStyles';

export default function Login() {
  // const navigate = useNavigate();
  const { login } = AuthContextActions();

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

        <Button type="submit" variant="contained" sx={loginButtonStyles}>
          Acessar
        </Button>
      </FormControl>
    </Box>
  );
}

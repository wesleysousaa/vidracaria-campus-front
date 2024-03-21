import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useGetIcons from '../../../hooks/useGetIcons.tsx';
import { boxStyles, boxStylesForm } from '../../../styles/index.ts';
import { textFieldStyles } from '../../Customers/CustomerCreateForm/styles/index.ts';
import useProductSelectState from '../hooks/useProductSelectStates.ts';
import { CreateProductSchema } from '../schemas/index.ts';
import { useCreateProduct } from '../services/index.tsx';
import { CreateProductValidation } from '../types/index.ts';

export default function ProductsCreateForm() {
  const { categrories, unitOfMeasure } = useProductSelectState();
  const { ArrowBackIosIcon } = useGetIcons();
  const create = useCreateProduct();

  const onSubmit: SubmitHandler<CreateProductValidation> = (data) => {
    create.mutate(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateProductValidation>({
    resolver: yupResolver(CreateProductSchema),
    defaultValues: {
      category: 'REGULAR',
      name: '',
      unitOfMeasure: 'CENTIMETER',
    },
  });

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
          Cadastrar Produto
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
            name="category"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: '50%', ...textFieldStyles }}>
                <InputLabel htmlFor="category">Categoria</InputLabel>
                <Select
                  type="text"
                  id="category"
                  label="Categoria"
                  error={!!errors.category}
                  placeholder="Digite a categoria do produto"
                  {...field}
                >
                  {categrories.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />

          <Controller
            name="unitOfMeasure"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: '50%', ...textFieldStyles }}>
                <InputLabel htmlFor="unitOfMeasure">
                  Unidade de Medida
                </InputLabel>
                <Select
                  type="text"
                  id="unitOfMeasure"
                  label="Unidade de Medida"
                  error={!!errors.category}
                  placeholder="Digite a unidade de medida do produto"
                  {...field}
                >
                  {unitOfMeasure.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>

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

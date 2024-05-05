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
import { textFieldStyles } from '../../../../../features/Customers/styles/index.ts';
import { CreateProductSchema } from '../../../../../features/Products/schemas/index.ts';
import { useCreateProduct } from '../../../../../features/Products/services/index.tsx';
import { CreateProductValidation } from '../../../../../features/Products/types/index.ts';
import {
  boxStyles,
  formStyles,
  headerFormStyles,
} from '../../../../../styles/index.ts';
import PageHeader from '../../../../../components/PageHeader/PageHeader.tsx';

export default function ProductsCreateForm() {
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
      category: 'COMUM',
      name: '',
      unitOfMeasure: 'CENTIMETRO',
    },
  });

  return (
    <Box sx={boxStyles}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
        <PageHeader title="Cadastrar Produto" backTo="/products" />

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

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <FormControl sx={textFieldStyles}>
                <InputLabel htmlFor="category">Categoria</InputLabel>
                <Select
                  type="text"
                  id="category"
                  label="Categoria"
                  error={!!errors.category}
                  placeholder="Digite a categoria do produto"
                  {...field}
                >
                  <MenuItem value="COMUM">Comum</MenuItem>
                  <MenuItem value="TEMPERADO">Temperado</MenuItem>
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
                  <MenuItem value="CENTIMETRO">Centímetro</MenuItem>
                  <MenuItem value="METRO">Metro</MenuItem>
                  <MenuItem value="MILIMETRO">Milímetro</MenuItem>
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
  '/_authenticated/_layout/products/add/',
)({
  component: ProductsCreateForm,
});

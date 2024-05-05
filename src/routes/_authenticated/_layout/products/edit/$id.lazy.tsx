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
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReturnButton from '../../../../../components/ReturnButton/index.tsx';
import { textFieldStyles } from '../../../../../features/Customers/styles/index.ts';
import { ProductSchema } from '../../../../../features/Products/schemas/index.ts';
import {
  useGetProductById,
  useUpdateProduct,
} from '../../../../../features/Products/services/index.tsx';
import { ProductValidation } from '../../../../../features/Products/types/index.ts';
import {
  boxStyles,
  formStyles,
  headerFormStyles,
} from '../../../../../styles/index.ts';
import PageHeader from '../../../../../components/PageHeader/PageHeader.tsx';

export const Route = createLazyFileRoute(
  '/_authenticated/_layout/products/edit/$id',
)({
  component: ProducstUpdateForm,
});

export default function ProducstUpdateForm() {
  const { id } = Route.useParams();
  const product = useGetProductById(id);
  const updateCustomer = useUpdateProduct();

  const onSubmit: SubmitHandler<ProductValidation> = async (data) => {
    updateCustomer.mutate(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ProductValidation>({
    resolver: yupResolver(ProductSchema),
    defaultValues: {
      id: '',
      name: '',
      category: 'COMUM',
      unitOfMeasure: 'CENTIMETRO',
      depth: 0,
      height: 0,
      width: 0,
      price: 0,
    },
  });

  useEffect(() => {
    if (product.data) {
      setValue('id', product.data.id || '');
      setValue('name', product.data.name || '');
      setValue('category', product.data.category || 'COMUM');
      setValue('unitOfMeasure', product.data.unitOfMeasure || 'CENTIMETRO');
      setValue('depth', product.data.depth || 0);
      setValue('height', product.data.height || 0);
      setValue('width', product.data.width || 0);
      setValue('price', product.data.price || 1);
    }
  }, [product.data, setValue]);

  return (
    <Box sx={boxStyles}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
        <PageHeader backTo="/products" title="Editar Produto" />

        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              type="text"
              id="Nome"
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
                  labelId="category-label"
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
              <FormControl sx={textFieldStyles}>
                <InputLabel htmlFor="unitOfMeasure">
                  Unidade de Medida
                </InputLabel>
                <Select
                  type="text"
                  id="unitOfMeasure"
                  label="Unidade de Medida"
                  error={!!errors.unitOfMeasure}
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

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Controller
            name="depth"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                id="depth"
                label="Profundidade"
                placeholder="Digite a profundidade do produto"
                error={!!errors.depth}
                helperText={errors.depth?.message}
                sx={textFieldStyles}
                InputLabelProps={{
                  shrink: !!field.value || field.value === 0,
                }}
                {...field}
              />
            )}
          />
          <Controller
            name="height"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                id="height"
                label="Altura"
                placeholder="Digite a altura do produto"
                error={!!errors.height}
                helperText={errors.height?.message}
                sx={textFieldStyles}
                InputLabelProps={{
                  shrink: !!field.value || field.value === 0,
                }}
                {...field}
              />
            )}
          />
          <Controller
            name="width"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                id="width"
                label="Largura"
                placeholder="Digite a largura do produto"
                error={!!errors.width}
                helperText={errors.width?.message}
                sx={textFieldStyles}
                InputLabelProps={{
                  shrink: !!field.value || field.value === 0,
                }}
                {...field}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                id="price"
                label="Preço"
                placeholder="Digite o preço do produto"
                {...field}
                error={!!errors.price}
                helperText={errors.price?.message}
                sx={textFieldStyles}
                InputLabelProps={{
                  shrink:
                    field.value !== undefined && field.value !== 0
                      ? true
                      : false,
                }}
              />
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

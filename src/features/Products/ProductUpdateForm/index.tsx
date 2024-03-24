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
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ReturnButton from '../../../components/ReturnButton/index.tsx';
import { boxStyles } from '../../../styles/index.ts';
import { textFieldStyles } from '../../Customers/CustomerCreateForm/styles/index.ts';
import { ProductSchema } from '../schemas/index.ts';
import { useGetProductById, useUpdateProduct } from '../services/index.tsx';
import { ProductValidation } from '../types/index.ts';

export default function ProducstUpdateForm() {
  const { id } = useParams();
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
  });

  useEffect(() => {
    if (product.data) {
      setValue('id', product.data.id);
      setValue('name', product.data.name);
      setValue('category', product.data.category);
      setValue('unitOfMeasure', product.data.unitOfMeasure);
      setValue('depth', product.data.depth);
      setValue('height', product.data.height);
      setValue('width', product.data.width);
      setValue('price', product.data.price);
    }
  }, [product.data, setValue]);

  return (
    <Box sx={boxStyles}>
      <ReturnButton link="/products" />
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
          Editar Produto
        </Typography>

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
                  <MenuItem value="REGULAR">Regular</MenuItem>
                  <MenuItem value="TEMPERED">Temperado</MenuItem>
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
                  <MenuItem value="CENTIMETER">Centímetro</MenuItem>
                  <MenuItem value="METER">Metro</MenuItem>
                  <MenuItem value="MILIMETER">Milímetro</MenuItem>
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
                error={!!errors.price}
                helperText={errors.price?.message}
                sx={textFieldStyles}
                InputLabelProps={{
                  shrink: !!field.value || field.value === 0,
                }}
                {...field}
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

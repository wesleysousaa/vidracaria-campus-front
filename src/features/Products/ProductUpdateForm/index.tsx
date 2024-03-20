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
import { Link, useParams } from 'react-router-dom';
import useGetIcons from '../../../hooks/useGetIcons.tsx';
import { ProductSchema } from '../schemas/index.ts';
import { useGetProductById, useUpdateProduct } from '../services/index.tsx';
import { boxStyles, boxStylesForm } from '../../../styles/index.ts';
import { ProductValidation } from '../types/index.ts';
import { textFieldStyles } from '../../Customers/CustomerCreateForm/styles/index.ts';
import useProductSelectState from '../hooks/useProductSelectStates.ts';

export default function ProducstUpdateForm() {
  const { id } = useParams();
  const { ArrowBackIosIcon } = useGetIcons();
  const product = useGetProductById(id);
  const updateCustomer = useUpdateProduct();
  const { categrories, unitOfMeasure } = useProductSelectState();

  const onSubmit: SubmitHandler<ProductValidation> = async (data) => {
    updateCustomer.mutate(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductValidation>({
    resolver: yupResolver(ProductSchema),
    defaultValues: product.data || {
      category: 'REGULAR',
      name: '',
      unitOfMeasure: 'CENTIMETER',
      depth: 0,
      height: 0,
      width: 0,
      price: 0,
      id: '',
    },
  });

  return (
    <Box sx={boxStyles}>
      <Link to="/produtos" style={{ color: '#000' }}>
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
          Editar Produto
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

        <Box sx={boxStylesForm}>
          <Controller
            name="depth"
            control={control}
            render={({ field }) => (
              <TextField
                type="text"
                id="depth"
                label="Profundidade"
                placeholder="Digite a profundidade do produto"
                error={!!errors.depth}
                helperText={errors.depth?.message}
                sx={textFieldStyles}
                {...field}
              />
            )}
          />
          <Controller
            name="height"
            control={control}
            render={({ field }) => (
              <TextField
                type="text"
                id="height"
                label="Altura"
                placeholder="Digite a altura do produto"
                error={!!errors.height}
                helperText={errors.height?.message}
                sx={textFieldStyles}
                {...field}
              />
            )}
          />
          <Controller
            name="width"
            control={control}
            render={({ field }) => (
              <TextField
                type="text"
                id="width"
                label="Largura"
                placeholder="Digite a largura do produto"
                error={!!errors.width}
                helperText={errors.width?.message}
                sx={textFieldStyles}
                {...field}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                type="text"
                id="price"
                label="Preço"
                placeholder="Digite o preço do produto"
                error={!!errors.price}
                helperText={errors.price?.message}
                sx={textFieldStyles}
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

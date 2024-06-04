import { yupResolver } from '@hookform/resolvers/yup';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import CloseButton from '../../../components/CloseButton';
import Loader from '../../../components/Loader';
import { modalStyles } from '../../../styles';
import { modalHeaderStyles, modalTitleStyles } from '../styles';
import { TransactionStockSchema } from './schemas';
import { useGetAllProductsWithNameAndId, useReceiveProduct } from './services';
import { stockProductStyles } from './styles';
import { ProductWithNameAndId, TransactionStock } from './types';

interface StockFormProps {
  open: boolean;
  onClose: () => void;
}

export default function StockForm({ onClose, open }: StockFormProps) {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductWithNameAndId | null>(null);
  const { data: product } = useGetAllProductsWithNameAndId();
  const { mutate: receiveProduct } = useReceiveProduct();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(TransactionStockSchema),
    defaultValues: {
      idProduct: '',
      movementQuantity: 0,
      transactionType: 'ENTRADA',
    },
  });

  const onSubmit: SubmitHandler<TransactionStock> = (data) => {
    console.log(data);
    receiveProduct(data);
    onClose();
  };

  if (!product) return <Loader open />;

  return (
    <Modal open={open} onClose={onClose} sx={modalStyles}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={stockProductStyles}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
          >
            <Box sx={modalHeaderStyles}>
              <CloseButton onClose={onClose} />
            </Box>

            <Typography sx={modalTitleStyles} variant="h5">
              Entrada de Estoque
            </Typography>
            <Divider />
            <Controller
              name="idProduct"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  value={selectedProduct}
                  onChange={(_e, newValue) => {
                    setSelectedProduct(newValue);
                    field.onChange(newValue ? newValue.id : 0);
                  }}
                  options={product}
                  getOptionLabel={(option) => option.name}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Produto"
                      error={!!errors.idProduct}
                      helperText={errors.idProduct?.message}
                    />
                  )}
                />
              )}
            />
            <Controller
              name="movementQuantity"
              control={control}
              render={({ field }) => (
                <TextField
                  type="number"
                  id="movementQuantity"
                  label="Quantidade"
                  placeholder="Digite a quantidade"
                  error={!!errors.movementQuantity}
                  helperText={errors.movementQuantity?.message}
                  {...field}
                />
              )}
            />
          </Box>
          <Box
            display={'flex'}
            justifyContent={'flex-end'}
            width={'100%'}
            gap={'1em'}
            paddingTop={'1em'}
            sx={{
              borderTop: '1px solid #ccc',
            }}
          >
            <Button variant="text" onClick={onClose} color="success">
              Voltar
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Confirmar
            </Button>
          </Box>
        </Box>
      </form>
    </Modal>
  );
}

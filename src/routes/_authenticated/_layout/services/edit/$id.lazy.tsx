import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models/range';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { createLazyFileRoute } from '@tanstack/react-router';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PageHeader from '../../../../../components/PageHeader/index.tsx';
import SectionHeader from '../../../../../components/SectionHeader/index.tsx';
import TableProductInfo from '../../../../../components/TableInfoProduct/index.tsx';
import { useGetAllCustomers } from '../../../../../features/Customers/services/index.tsx';
import { AddressValidation } from '../../../../../features/Customers/types/index.ts';
import { useGetAllProducts } from '../../../../../features/Products/services/index.tsx';
import ImageInput from '../../../../../features/Services/components/ImageInput/index.tsx';
import { EditServiceSchema } from '../../../../../features/Services/schemas/index.ts';
import {
  CreateServiceValidation,
  EditServiceValidation,
  ProductInfo,
} from '../../../../../features/Services/types/index.ts';
import { formatCurrency } from '../../../../../features/Services/utils/convertMoney.ts';
import useGetIcons from '../../../../../hooks/useGetIcons.tsx';
import {
  boxStyles,
  buttonStyles,
  formStyles,
  textFieldStyles,
} from '../../../../../styles/index.ts';

function ServicesEditForm() {
  const { data: customers } = useGetAllCustomers();
  const { data: products } = useGetAllProducts();
  const [images, setImages] = useState<File[]>([]);

  // TODO: Mudar dados mocados //
  const [serviceById, setServiceById] = useState<EditServiceValidation>({
    client: 'd50704f2-ec43-4ffd-930f-e69e539d20f2',
    deliveryForecast: '',
    id: '1',
    price: 100,
    products: products ? [products[0], products[1]] : [],
    status: 'ORCADO',
    images: [],
  });

  useEffect(() => {
    if (products) {
      setServiceById({ ...serviceById, products: [products[0], products[1]] });
    }
  }, [products]);
  // TODO: Mudar dados mocados //

  const {
    handleSubmit,
    control,
    formState: { errors: _errors },
    setValue,
    watch,
  } = useForm<EditServiceValidation>({
    resolver: yupResolver(EditServiceSchema),
    defaultValues: serviceById,
  });

  const { AddCircleOutlineRoundedIcon } = useGetIcons();
  const [customerAddress, setCustomerAddress] = useState<
    AddressValidation | undefined
  >(customers?.find((cust) => cust.id === watch('client'))?.address);

  const [product, setProduct] = useState<ProductInfo>();
  const [date, setDate] = useState<DateRange<Dayjs>>([
    dayjs(new Date()),
    dayjs(new Date()),
  ]);
  const onSubmit: SubmitHandler<CreateServiceValidation> = (_data) => {
    // create.mutate(data);
  };

  useEffect(() => {
    setValue(
      'deliveryForecast',
      `${date[0]?.toDate().toISOString()} | ${date[1]?.toDate().toISOString()}`,
    );
  }, [date]);

  const updateProdQtd = (prod: ProductInfo, newAmount: number): ProductInfo => {
    const productSelected = products?.find((prodS) => prodS.id === prod.id);
    const amount = newAmount > 0 ? newAmount : 1;
    return {
      ...prod,
      actualQuantity: amount,
      price: productSelected ? productSelected?.price : prod.price,
    };
  };

  useEffect(() => {
    if (watch('products'))
      setValue(
        'price',
        Number(
          watch('products').reduce(
            (acc, prod) => acc + Number(prod.price) * prod.actualQuantity,
            0,
          ),
        ),
      );
  }, [watch('products')]);

  useEffect(() => {
    if (watch('client') && watch('client') !== '')
      setCustomerAddress(
        customers?.find((customer) => customer.id === watch('client'))?.address,
      );
  }, [watch('client')]);

  return (
    <Box sx={boxStyles}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
        <PageHeader title="Editar Serviço" backTo="/services" />
        <SectionHeader label="Informações" />
        <Controller
          name="client"
          control={control}
          render={({ field }) => (
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <InputLabel id="select-client-label">Cliente</InputLabel>
              <Select
                labelId="select-client-label"
                id="select-client"
                label="Cliente"
                {...field}
              >
                {customers?.map(
                  (customer) =>
                    customer && (
                      <MenuItem value={customer.id} key={customer.id}>
                        {customer.name} - {customer.address?.address}
                      </MenuItem>
                    ),
                )}
              </Select>
            </FormControl>
          )}
        />

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <FormControl sx={textFieldStyles}>
            <InputLabel htmlFor="address">Endereço</InputLabel>
            <Select
              type="text"
              id="address"
              label="Endereço"
              placeholder="Digite a categoria do produto"
              value={customerAddress?.address}
              defaultValue={customerAddress?.address}
              disabled={!customerAddress}
            >
              {customerAddress && (
                <MenuItem value={customerAddress?.address}>
                  {`${customerAddress?.address} - ${customerAddress?.city}`}
                </MenuItem>
              )}
            </Select>
          </FormControl>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '20vw',
              marginBottom: '1rem',
            }}
          >
            <Controller
              name="images"
              control={control}
              render={({ field }) => (
                <ImageInput
                  images={images}
                  setImages={setImages}
                  field={field}
                />
              )}
            />
            <Box
              gap={1}
              display="flex"
              flexWrap="wrap"
              maxHeight="10vh"
              overflow="auto"
            >
              {images &&
                images.map((img, key) => (
                  <Chip
                    key={key}
                    label={img.name.slice(0, 6)}
                    onDelete={() =>
                      setImages((prev) =>
                        prev.filter((_img, index) => key !== index),
                      )
                    }
                  />
                ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DateRangePicker
                localeText={{ start: 'Min. Entrega', end: 'Max. Entrega' }}
                value={date}
                onChange={(value) => setDate(value)}
              />
            </DemoContainer>
          </LocalizationProvider>

          <FormControl variant="outlined" sx={{ flex: 1, pt: 1 }}>
            <InputLabel id="select-product-label">Produto</InputLabel>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  labelId="select-product-label"
                  id="select-product"
                  label="Status"
                  {...field}
                >
                  <MenuItem value={'ORCADO'} key={'ORCADO'}>
                    Orçado
                  </MenuItem>
                  <MenuItem
                    value={'CONTRATADO_A_VISTA'}
                    key={'CONTRATADO_A_VISTA'}
                  >
                    Contratado a vista
                  </MenuItem>
                  <MenuItem
                    value={'CONTRATADO_A_PRAZO'}
                    key={'CONTRATADO_A_PRAZO'}
                  >
                    Contratado a prazo
                  </MenuItem>
                  <MenuItem value={'FINALIZADO'} key={'FINALIZADO'}>
                    Finalizado
                  </MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Box>
        <SectionHeader label="Produtos" />

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <FormControl variant="outlined" sx={{ flex: 1 }}>
            <InputLabel id="select-product-label">Produto</InputLabel>
            <Select
              labelId="select-product-label"
              id="select-product"
              label="Produto"
              onChange={(e) => {
                const prodSelected = products?.find(
                  (prod) => prod.id === e.target.value,
                );
                if (prodSelected)
                  setProduct({
                    id: e.target.value as string,
                    name: prodSelected.name,
                    actualQuantity: 1,
                    depth: prodSelected.depth,
                    height: prodSelected.height,
                    price: prodSelected.price,
                    width: prodSelected.width,
                  });
              }}
            >
              {products?.map(
                (product) =>
                  !watch('products').find(
                    (prodd) => prodd.id === product.id,
                  ) && (
                    <MenuItem value={product.id} key={product.id}>
                      {product.name} - {product.category}
                    </MenuItem>
                  ),
              )}
            </Select>
          </FormControl>
          {product?.category !== 'DIVERSOS' && (
            <>
              <FormControl variant="outlined" sx={{ maxWidth: 160 }}>
                <TextField
                  id="heightTxt"
                  value={product && product.height}
                  defaultValue={product && product.height}
                  label="Altura (cm)"
                  type="number"
                  InputLabelProps={{
                    shrink:
                      product && (!!product.height || product.height === 0),
                  }}
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        height: Number(e.target.value) ?? 0,
                      });
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ maxWidth: 160 }}>
                <TextField
                  id="widthTxt"
                  defaultValue={product && product.width}
                  value={product && product.width}
                  label="Largura (cm)"
                  type="number"
                  InputLabelProps={{
                    shrink: product && (!!product.width || product.width === 0),
                  }}
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        width: Number(e.target.value) ?? 0,
                      });
                  }}
                />
              </FormControl>

              <FormControl variant="outlined" sx={{ maxWidth: 160 }}>
                <TextField
                  id="depthTxt"
                  defaultValue={product && product.depth}
                  value={product && product.depth}
                  label="Espessura (cm)"
                  type="number"
                  InputLabelProps={{
                    shrink: product && (!!product.depth || product.depth === 0),
                  }}
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        depth: Number(e.target.value) ?? 0,
                      });
                  }}
                />
              </FormControl>
            </>
          )}
          <IconButton
            onClick={() => {
              if (product) {
                setValue('products', [...watch('products'), product]);
                setProduct(undefined);
              }
            }}
          >
            <AddCircleOutlineRoundedIcon />
          </IconButton>
        </Box>

        <TableProductInfo
          data={watch('products') ? watch('products') : []}
          onDecrementDispatch={(id) =>
            setValue(
              'products',
              watch('products').map((prod) =>
                prod.id === id
                  ? updateProdQtd(prod, prod.actualQuantity - 1)
                  : prod,
              ),
            )
          }
          onIncrementDispatch={(id) =>
            setValue(
              'products',
              watch('products').map((prod) =>
                prod.id === id
                  ? updateProdQtd(prod, prod.actualQuantity + 1)
                  : prod,
              ),
            )
          }
          onDeleteDispatch={(id) =>
            setValue(
              'products',
              watch('products').filter((prod) => prod.id !== id),
            )
          }
        />
        <SectionHeader label="Total" />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              label="Total"
              sx={{ width: '48%', mb: 2 }}
              {...field}
              value={formatCurrency(Number(watch('price')))}
            />
          )}
        />

        <Button
          id="btn-save"
          type="submit"
          variant="contained"
          sx={buttonStyles}
        >
          Salvar
        </Button>
      </form>
    </Box>
  );
}

export const Route = createLazyFileRoute(
  '/_authenticated/_layout/services/edit/$id',
)({
  component: () => <ServicesEditForm />,
});

import { createLazyFileRoute } from '@tanstack/react-router';
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
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PageHeader from '../../../../../components/PageHeader/PageHeader.tsx';
import { useGetAllProducts } from '../../../../../features/Products/services/index.tsx';
import {
  boxStyles,
  formStyles,
  textFieldStyles,
} from '../../../../../styles/index.ts';
import { useGetAllCustomers } from '../../../../../features/Customers/services/index.tsx';
import {
  CreateServiceValidation,
  ProductInfo,
} from '../../../../../features/Services/types/index.ts';
import { CreateServiceSchema } from '../../../../../features/Services/schemas/index.ts';
import { useEffect, useState } from 'react';
import { AddressValidation } from '../../../../../features/Customers/types/index.ts';
import useGetIcons from '../../../../../hooks/useGetIcons.tsx';
import TableProductInfo from '../../../../../components/TableInfoProduct/index.tsx';
import SectionHeader from '../../../../../components/SectionHeader/index.tsx';
import { formatCurrency } from '../../../../../features/Services/utils/convertMoney.ts';

function ServicesCreateForm() {
  const { data: customers } = useGetAllCustomers();
  const { data: products } = useGetAllProducts();

  const { AddCircleOutlineRoundedIcon } = useGetIcons();
  const [customerAddress, setCustomerAddress] = useState<AddressValidation>();
  const [product, setProduct] = useState<ProductInfo>();

  const onSubmit: SubmitHandler<CreateServiceValidation> = (_data) => {
    // create.mutate(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors: _errors },
    setValue,
    watch,
  } = useForm<CreateServiceValidation>({
    resolver: yupResolver(CreateServiceSchema),
    defaultValues: {
      client: customers && customers[0].id,
      price: 0,
      products: [],
      status: 'ORCADO',
      images: [],
    },
  });

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
            (acc, prod) => acc + prod.price * prod.actualQuantity,
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
        <PageHeader title="Cadastrar Serviço" backTo="/services" />
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

          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ width: '50%', ...textFieldStyles }}>
                <TextField type="file" id="image" {...field} />
              </FormControl>
            )}
          />
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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <TextField
                label="Total"
                sx={{ minWidth: 300, mb: 2 }}
                {...field}
                value={formatCurrency(watch('price'))}
              />
            )}
          />
          <Button
            id="btn-save"
            type="submit"
            variant="contained"
            sx={{
              display: 'flex',
              alignSelf: 'center',
            }}
          >
            Salvar
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export const Route = createLazyFileRoute(
  '/_authenticated/_layout/services/add/',
)({
  component: () => <ServicesCreateForm />,
});

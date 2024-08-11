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
import { createLazyFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PageHeader from '../../../../../components/PageHeader/index.tsx';
import SectionHeader from '../../../../../components/SectionHeader/index.tsx';
import TableProductInfo from '../../../../../components/TableInfoProduct/index.tsx';
import {
  DepthsCommon,
  DepthsTemperated,
} from '../../../../../features/Dashboard/types/index.ts';
import { useGetAllProducts } from '../../../../../features/Products/services/index.tsx';
import ImageInput from '../../../../../features/Services/components/ImageInput/index.tsx';
import { EditServiceSchema } from '../../../../../features/Services/schemas/index.ts';
import { useGetServiceById } from '../../../../../features/Services/services/index.tsx';
import {
  EditServiceValidation,
  ProductInfo,
} from '../../../../../features/Services/types/index.ts';
import { useBudgetItem } from '../../../../../features/Services/utils/budgetItem.ts';
import { calcTotal } from '../../../../../features/Services/utils/calcTotal.ts';
import { formatCurrency } from '../../../../../features/Services/utils/convertMoney.ts';
import useGetIcons from '../../../../../hooks/useGetIcons.tsx';
import {
  boxStyles,
  buttonStyles,
  formStyles,
  textFieldStyles,
} from '../../../../../styles/index.ts';

function ServicesEditForm() {
  const { id } = Route.useParams();
  const { data: products } = useGetAllProducts();
  const [images, setImages] = useState<File[]>([]);
  const { data: service } = useGetServiceById(id);

  const { calculateTotal } = useBudgetItem();
  const [product, setProduct] = useState<ProductInfo>();
  const { AddCircleOutlineRoundedIcon } = useGetIcons();

  const unitOfMeasures =
    product && product.category === 'TEMPERADO'
      ? DepthsTemperated
      : DepthsCommon;
  const onSubmit: SubmitHandler<EditServiceValidation> = (_data) => {
    // create.mutate(data);
  };

  useEffect(() => {
    if (service) {
      setValue(
        'deliveryForecast',
        service?.deliveryForecast || Date.now().toString(),
      );
      setValue('discount', service?.discount);
      setValue('images', service?.images);
      setValue('ownerName', service?.ownerName);
      setValue('total', service?.total);
      setValue('status', service?.status);
    }
  }, [service]);

  useEffect(() => {
    if (product) {
      setProduct({
        ...product,
        price: calculateTotal(product),
      });
    }
  }, [product]);

  const {
    handleSubmit,
    control,
    formState: { errors: _errors },
    setValue,
    watch,
  } = useForm<EditServiceValidation>({
    resolver: yupResolver(EditServiceSchema),
    defaultValues: {
      deliveryForecast: service?.deliveryForecast || Date.now().toString(),
      total: service?.total ?? 0,
      id: service?.id,
      address: service?.address,
      ownerName: service?.ownerName,
      status: service?.status,
      products: service?.products,
      images: service?.images,
      discount: 0,
    },
  });

  useEffect(() => {
    if (products && watch('products')) {
      setValue(
        'total',
        calcTotal({
          products: watch('products') || [],
          discount: watch('discount') ?? 0,
        }),
      );
    }
  }, [products, watch('products'), watch('discount')]);

  const updateProdQtd = (prod: ProductInfo, newAmount: number): ProductInfo => {
    const amount = newAmount > 0 ? newAmount : 1;
    return {
      ...prod,
      actualQuantity: amount,
      price: prod.price,
    };
  };

  return (
    <Box sx={boxStyles}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
        <PageHeader title="Editar Serviço" backTo="/services" />
        <SectionHeader label="Informações" />
        <Controller
          name="ownerName"
          control={control}
          render={({ field }) => (
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <TextField disabled {...field} />
            </FormControl>
          )}
        />

        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <FormControl sx={textFieldStyles}>
            <TextField
              type="text"
              id="address"
              label="Endereço"
              placeholder="Digite o endereço completo"
              value={`${service?.address.address || ''}, ${service?.address.number || ''}, ${service?.address.city || ''}, ${service?.address.state || ''}, ${service?.address.zipCode || ''} - ${service?.address.landmark || ''}`}
              disabled
            />
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
          <FormControl variant="outlined" sx={{ flex: 1, pt: 1 }}>
            <Controller
              name="deliveryForecast"
              control={control}
              render={({ field }) => (
                <TextField
                  type="date"
                  id="date"
                  label="Previsão de entrega"
                  {...field}
                  value={field.value || formattedDate}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </FormControl>
          <FormControl variant="outlined" sx={{ flex: 1, pt: 1 }}>
            <InputLabel id="select-product-label">Status</InputLabel>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  labelId="select-product-label"
                  id="select-product"
                  label="Status"
                  {...field}
                  value={
                    [
                      'ORCADO',
                      'CONTRATADO_A_VISTA',
                      'CONTRATADO_A_PRAZO',
                      'FINALIZADO',
                    ].includes(service?.status ?? '')
                      ? service?.status ?? ''
                      : ''
                  }
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
                    category: prodSelected.category,
                    depth: prodSelected.depth,
                    height: prodSelected.height,
                    price: prodSelected.price,
                    width: prodSelected.width,
                  });
              }}
              value={product?.id || ''}
            >
              {products?.map((product) => (
                <MenuItem value={product.id} key={product.id}>
                  {product.name} - {product.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {product?.category !== 'DIVERSOS' && (
            <>
              <FormControl variant="outlined" sx={{ maxWidth: 160 }}>
                <TextField
                  id="heightTxt"
                  value={
                    Number(product?.height) === 0 ? 0 : Number(product?.height)
                  }
                  label="Altura (M)"
                  type="number"
                  InputLabelProps={{
                    shrink:
                      product && (!!product.height || product.height === 0),
                  }}
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        height: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      });
                  }}
                />
              </FormControl>
              <FormControl variant="outlined" sx={{ maxWidth: 160 }}>
                <TextField
                  id="widthTxt"
                  value={
                    Number(product?.width) === 0 ? 0 : Number(product?.width)
                  }
                  label="Largura (M)"
                  type="number"
                  InputLabelProps={{
                    shrink: product && (!!product.width || product.width === 0),
                  }}
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        width: e.target.value
                          ? Number(e.target.value)
                          : undefined,
                      });
                  }}
                />
              </FormControl>

              <FormControl variant="outlined" sx={{ width: 130 }}>
                <InputLabel id="select-depth-label">Espessura</InputLabel>
                <Select
                  id="select-depth-label"
                  labelId="select-depth-label"
                  label={'Espessura'}
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        depth: Number(e.target.value) ?? 0,
                      });
                  }}
                >
                  {unitOfMeasures.map((unit) => (
                    <MenuItem value={unit} key={unit}>
                      {unit}mm
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" sx={{ maxWidth: 160 }}>
                <TextField
                  id="priceTxt"
                  value={product?.price || ''}
                  label="Valor"
                  type="number"
                  onChange={(e) => {
                    product &&
                      setProduct({
                        ...product,
                        price: Number(e.target.value) ?? 0,
                      });
                  }}
                />
              </FormControl>
            </>
          )}
          <IconButton
            onClick={() => {
              if (product) {
                setValue('products', [...(watch('products') || []), product]);
                setProduct(undefined);
              }
            }}
          >
            <AddCircleOutlineRoundedIcon />
          </IconButton>
        </Box>

        <TableProductInfo
          data={watch('products') ? watch('products') || [] : []}
          onDecrementDispatch={(id) =>
            setValue(
              'products',
              (watch('products') || []).map((prod) =>
                prod.id === id
                  ? updateProdQtd(prod, prod.actualQuantity - 1)
                  : prod,
              ),
            )
          }
          onIncrementDispatch={(id) =>
            setValue(
              'products',
              (watch('products') || []).map((prod) =>
                prod.id === id
                  ? updateProdQtd(prod, prod.actualQuantity + 1)
                  : prod,
              ),
            )
          }
          onDeleteDispatch={(id) =>
            setValue(
              'products',
              (watch('products') || []).filter((prod) => prod.id !== id),
            )
          }
        />
        <SectionHeader label="Total" />
        <Controller
          name="discount"
          control={control}
          render={({ field }) => (
            <TextField
              type="number"
              label="Desconto em R$"
              sx={{ minWidth: 160, mb: 2 }}
              {...field}
              value={field.value || ''}
            />
          )}
        />
        <Controller
          name="total"
          control={control}
          render={({ field }) => (
            <TextField
              label="Total"
              disabled
              sx={{ minWidth: 160, mb: 2 }}
              {...field}
              value={formatCurrency(watch('total') ?? 0)}
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

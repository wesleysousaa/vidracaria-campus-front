import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { green, red } from '@mui/material/colors';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';
import ReturnButton from '../../../../../components/ReturnButton';
import Carousel from '../../../../../features/Services/ServicesInfo/Carousel';
import UserInfo from '../../../../../features/Services/ServicesInfo/UserInfo';
import { ProductInfo, Status } from '../../../../../features/Services/types';
import { boxStyles, formStyles } from '../../../../../styles';

const useGetServiceById = (id: string) => {
  return {
    data: {
      id: id,
      address: 'Rua 1, 123',
      client: 'Cliente 1',
      deliveryForecast: '2022-01-01',
      price: 1000,
      status: 'ORCADO' as Status,
      products: [
        {
          id: '1',
          name: 'Produto 1',
          actualQuantity: 1,
          height: 1,
          width: 1,
          depth: 1,
          weight: 1,
          price: 100,
        },
        {
          id: '2',
          name: 'Produto 2',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
        {
          id: '3',
          name: 'Produto 3',
          actualQuantity: 2,
          height: 2,
          width: 2,
          depth: 2,
          weight: 2,
          price: 200,
        },
      ],
    },
    isLoading: false,
  };
};

function ServicesInfo() {
  const { id } = Route.useParams();
  const { data, isLoading } = useGetServiceById(id);

  const columns = useMemo(
    () => [
      { id: 'name', label: 'Produto' },
      { id: 'actualQuantity', label: 'Quantidade' },
      { id: 'dimensions', label: 'Dimensões A x L x P' },
      { id: 'price', label: 'Preço' },
    ],
    [],
  );

  const getTotal = useMemo(() => {
    return data.products.reduce((acc, product) => acc + product.price, 0);
  }, [data.products]);

  return (
    <Box sx={boxStyles}>
      <Box
        sx={{
          ...formStyles,
          height: '100%',
        }}
      >
        <Box>
          <ReturnButton link="/services" />
        </Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                width: '70vw',
                marginBottom: '1rem',
                marginTop: '1rem',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <UserInfo data={data} />
              <Carousel />
            </Box>

            <Divider
              sx={{
                width: '70vw',
                marginBottom: '2rem',
              }}
            />
            <TableContainer
              sx={{
                width: '70vw',
                maxHeight: '41vh',
                overflow: 'auto',
              }}
              component={Paper}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.products.map((product: ProductInfo) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.actualQuantity}</TableCell>
                      <TableCell>
                        {product.height} x {product.width} x {product.depth}
                      </TableCell>
                      <TableCell>
                        {product.price
                          ? product.price.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })
                          : 'Não informado'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 'auto',
          }}
        >
          <Avatar
            sx={{
              bgcolor: getTotal > 0 ? green[500] : red[500],
              minWidth: 150,
              minHeight: 150,
              fontSize: '1.5rem',
              marginTop: '1rem',
              fontWeight: 'bold',
            }}
          >
            {getTotal.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
}

export const Route = createLazyFileRoute(
  '/_authenticated/_layout/services/info/$id',
)({
  component: ServicesInfo,
});

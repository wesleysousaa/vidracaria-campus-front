import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import api, { config } from '../../../services';
import { CreateProductValidation, ProductValidation } from '../types';

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (product: CreateProductValidation) => {
      return api.post('/products', product, config).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-products'] });
      navigate('/products');
      enqueueSnackbar('Produto salvo com sucesso!', {
        variant: 'success',
      });
    },
    onError: () => {
      enqueueSnackbar('Erro ao salvar o Produto!', {
        variant: 'error',
      });
    },
  });
};

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (product: ProductValidation) => {
      return api
        .put(`/products/${product.id}`, product, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-products'] });
      navigate('/products');
      enqueueSnackbar('Produto atualizado com sucesso!', {
        variant: 'success',
      });
    },
    onError: () => {
      enqueueSnackbar('Erro ao salvar o Produto!', {
        variant: 'error',
      });
    },
  });
};

const useGetAllProducts = () => {
  return useQuery<ProductValidation[]>({
    queryKey: ['/all-products'],
    queryFn: () => {
      return api.get('/products', config).then((res) => res.data);
    },
    staleTime: Infinity,
  });
};

const useGetProductById = (id?: string) => {
  return useQuery<ProductValidation>({
    queryKey: ['/products', id],
    queryFn: () => {
      return api.get(`/products/${id}`, config).then((res) => res.data);
    },
    enabled: id !== undefined,
    staleTime: 600000,
  });
};

const useDeleteProductById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/products/${id}`, config).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-products'] });
    },
  });
};

export {
  useCreateProduct,
  useUpdateProduct,
  useGetAllProducts,
  useGetProductById,
  useDeleteProductById,
};

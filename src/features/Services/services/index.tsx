import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { enqueueSnackbar } from 'notistack';
import api, { config } from '../../../services';
import {
  CreateServiceValidation,
  EditServiceValidation,
  GetProductsByService,
  ServiceValidationTable,
} from '../types';

const useGetAllServices = () => {
  return useQuery<ServiceValidationTable[]>({
    queryKey: ['/all-services'],
    queryFn: async () => {
      const res = await api.get('/budget/listBudgets', config);
      return res.data;
    },
    staleTime: Infinity,
  });
};

const useDeleteServiceById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/budget/${id}`, config).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-services'] });
      enqueueSnackbar('Serviço deletado com sucesso!', {
        variant: 'success',
      });
    },
  });
};

const useCreateService = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (service: CreateServiceValidation) => {
      const formData = new FormData();
      let urls = [];

      if (service.files && service.files.length > 0) {
        service.files.forEach((file) => {
          formData.append('image', file);
        });
        urls = await api
          .post('/image', formData, config)
          .then((res) => res.data);
      }
      const serviceToCreate = {
        idCustomer: service.client,
        status: service.status,
        discount: service.discount,
        images: urls,
        paymentMethod: 'DINHEIRO',
        items: service.products.map((product) => {
          return {
            idProduct: product.id,
            quantity: product.actualQuantity,
            category: product.category,
            height: product.height ?? 0,
            width: product.width ?? 0,
            depth: product.depth ?? 0,
            name: product.name,
            type: product.type,
          };
        }),
      };
      return api
        .post('/budget', serviceToCreate, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-services'] });
      navigate({ to: '/services' });
      enqueueSnackbar('Serviço salvo com sucesso!', {
        variant: 'success',
      });
    },
    onError: () => {
      enqueueSnackbar('Erro ao salvar o Serviço!', {
        variant: 'error',
      });
    },
  });
};

const useGetServiceById = (id?: string) => {
  return useQuery<EditServiceValidation>({
    queryKey: ['/service', id],
    queryFn: async () => {
      const res = await api.get(`/budget/${id}`, config);
      return res.data;
    },
    enabled: id !== undefined,
    staleTime: 600000,
  });
};

const useGetProducstByServiceId = (id?: string) => {
  return useQuery<GetProductsByService>({
    queryKey: ['/services-products', id],
    queryFn: async () => {
      const res = await api.get(`/budget/productsByBudgetId/${id}`, config);
      return res.data;
    },
    enabled: id !== undefined,
    staleTime: 600000,
  });
};

export {
  useCreateService,
  useDeleteServiceById,
  useGetAllServices,
  useGetProducstByServiceId,
  useGetServiceById,
};

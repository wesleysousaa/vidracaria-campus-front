import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { enqueueSnackbar } from 'notistack';
import api, { config } from '../../../services';
import { CustomerValidation } from '../types';

const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (customer: CustomerValidation) => {
      const res = await api.post('/customers', customer, config);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-customers'] });
      navigate({ to: '/customers' });
      enqueueSnackbar('Cliente salvo com sucesso!', {
        variant: 'success',
      });
    },
    onError: () => {
      enqueueSnackbar('Erro ao salvar o cliente!', {
        variant: 'error',
      });
    },
  });
};

const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (customer: CustomerValidation) => {
      const res = await api.put(`/customers/${customer.id}`, customer, config);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-customers'] });
      navigate({ to: '/customers' });
      enqueueSnackbar('Cliente atualizado com sucesso!', {
        variant: 'success',
      });
    },
    onError: () => {
      enqueueSnackbar('Erro ao salvar o cliente!', {
        variant: 'error',
      });
    },
  });
};

const useGetAllCustomers = () => {
  return useQuery<CustomerValidation[]>({
    queryKey: ['/all-customers'],
    queryFn: async () => {
      const res = await api.get('/customers', config);
      return res.data;
    },
    staleTime: Infinity,
  });
};

const useGetCustomerById = (id?: string) => {
  return useQuery<CustomerValidation>({
    queryKey: ['/customers', id],
    queryFn: async () => {
      const res = await api.get(`/customers/${id}`, config);
      return res.data;
    },
    enabled: id !== undefined,
    staleTime: 600000,
  });
};

const useDeleteCustomerById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/customers/${id}`, config);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-customers'] });
    },
  });
};

export {
  useCreateCustomer,
  useDeleteCustomerById,
  useGetAllCustomers,
  useGetCustomerById,
  useUpdateCustomer,
};

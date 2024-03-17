import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import api, { config } from '../../../services';
import { CustomerValidation } from '../types';

const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (customer: CustomerValidation) => {
      return api.post('/customers', customer, config).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-customers'] });
      navigate('/customers');
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
    mutationFn: (customer: CustomerValidation) => {
      return api
        .put(`/customers/${customer.id}`, customer, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-customers'] });
      navigate('/customers');
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
    queryFn: () => {
      return api.get('/customers', config).then((res) => res.data);
    },
    staleTime: Infinity,
  });
};

const useGetCustomerById = (id?: string) => {
  return useQuery<CustomerValidation>({
    queryKey: ['/customers', id],
    queryFn: () => {
      return api.get(`/customers/${id}`, config).then((res) => res.data);
    },
    enabled: id !== undefined,
    staleTime: 600000,
  });
};

const useDeleteCustomerById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/customers/${id}`, config).then((res) => res.data);
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

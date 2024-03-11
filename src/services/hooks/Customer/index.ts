import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import api, { config } from '../..';
import { CustomerValidation } from '../../../types';

const enum Endpoints {
  createCustomer = '/customers',
  updateCustomer = '/customers',
  getAllCustomers = '/customers',
  getCustomerById = '/customers',
  deleteCustomerById = '/customers',
  searchCustomers = '/customers/search',
}

const useCreateCustomer = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (customer: CustomerValidation) => {
      return api
        .post(Endpoints.createCustomer, customer, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Endpoints.getAllCustomers] });
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
        .put(`${Endpoints.updateCustomer}/${customer.id}`, customer, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Endpoints.getAllCustomers] });
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
    queryKey: [Endpoints.getAllCustomers],
    queryFn: () => {
      return api.get(Endpoints.getAllCustomers, config).then((res) => res.data);
    },
    staleTime: Infinity,
  });
};

const useGetCustomerById = (id?: string) => {
  return useQuery<CustomerValidation>({
    queryKey: [Endpoints.getCustomerById, id],
    queryFn: () => {
      return api
        .get(`${Endpoints.getCustomerById}/${id}`, config)
        .then((res) => res.data);
    },
    enabled: id !== undefined,
    staleTime: 600000,
  });
};

const useDeleteCustomerById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return api
        .delete(`${Endpoints.deleteCustomerById}/${id}`, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Endpoints.getAllCustomers] });
    },
  });
};

const useSearchCustomers = () => {
  return useMutation({
    mutationFn: (search?: string) => {
      return api
        .post(`${Endpoints.searchCustomers}/${search}`, {}, config)
        .then((res) => res.data);
    },
  });
};

export {
  useCreateCustomer,
  useDeleteCustomerById,
  useGetAllCustomers,
  useGetCustomerById,
  useSearchCustomers,
  useUpdateCustomer,
};

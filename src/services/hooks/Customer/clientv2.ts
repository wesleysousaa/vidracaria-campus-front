import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import api, { config } from '../..';
import { CustomerValidation } from '../../../types';

const enum Endpoints {
  createCustomer = '/customers/createCustomer',
  updateCustomer = '/customers/updateCustomer',
  getAllCustomers = '/customers/getAllCustomers',
  getCustomerById = '/customers/getCustomerById',
  deleteCustomerById = '/customers/deleteCustomerById',
  searchCustomers = '/customers/searchCustomers',
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
  });
};

const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (customer: CustomerValidation) => {
      return api
        .post(Endpoints.updateCustomer, customer, config)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Endpoints.getAllCustomers] });
      enqueueSnackbar('Cliente atualizado com sucesso!', {
        variant: 'success',
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

export { useCreateCustomer, useGetAllCustomers, useUpdateCustomer };


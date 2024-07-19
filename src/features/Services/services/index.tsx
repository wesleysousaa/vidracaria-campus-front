import { useMutation, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import api, { config } from '../../../services';
import { Status } from '../types';

const useGetAllServices = () => {
  // return useQuery<ServiceValidation[]>({
  //   queryKey: ['/all-services'],
  //   queryFn: async () => {
  //     const res = await api.get('/service', config);
  //     return res.data;
  //   },
  //   staleTime: Infinity,
  // });
  return {
    data: [
      {
        id: '1',
        client: 'Cliente 1',
        deliveryForecast: '2021-10-10',
        price: 100,
        status: 'ORCADO' as Status,
      },
      {
        id: '2',
        client: 'Cliente 2',
        deliveryForecast: '2021-10-10',
        price: 200,
        status: 'CONTRATADO_A_VISTA' as Status,
      },
      {
        id: '3',
        client: 'Cliente 3',
        deliveryForecast: '2021-10-10',
        price: 300,
        status: 'CONTRATADO_A_PRAZO' as Status,
      },
      {
        id: '4',
        client: 'Cliente 4',
        deliveryForecast: '2021-10-10',
        price: 400,
        status: 'FINALIZADO' as Status,
      },
    ],
    isLoading: false,
  };
};

const useDeleteServiceById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/service/${id}`, config).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/all-services'] });
      enqueueSnackbar('Serviço deletado com sucesso!', {
        variant: 'success',
      });
    },
  });
};

export { useDeleteServiceById, useGetAllServices };

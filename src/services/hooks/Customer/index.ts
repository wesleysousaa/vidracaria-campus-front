import { useMutation } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
import api from '../..';
import { CustomerValidation } from '../../../types';

enum Endpoints {
  get = '/customers',
}

const mutate = async (dispach: AxiosInstance, options: {}) => {
  // Não funciona de jeito maneira
  return useMutation({
    mutationFn: async () => {
      return await dispach.request(options).then((res) => res.data);
    },
    onSuccess: (data) => {
      return data;
    },
  }).mutate();
};

export async function getAllClients() {
  const options = {
    method: 'GET',
    url: Endpoints.get,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  return await api.request(options).then((res) => res.data);

  // return mutate(api, options);
}

export async function getOneClient(id: string) {
  const options = {
    method: 'GET',
    url: `${Endpoints.get}/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  return await api.request(options).then((res) => res.data);

  // return mutate(api, options);
}

export async function updateClient(client: CustomerValidation) {
  const options = {
    method: 'PUT',
    url: `${Endpoints.get}/${client.id}`,
    data: {
      ...client,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  return await api.request(options).then((res) => res.data);

  // return await mutate(api, options);
}

export async function createClient(client: CustomerValidation) {
  const options = {
    method: 'POST',
    url: `${Endpoints.get}`,
    data: {
      ...client,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  return await api.request(options).then((res) => res.data);

  // return await mutate(api, options);
}

export async function deleteClient(id: string) {
  const options = {
    method: 'DELETE',
    url: `${Endpoints.get}/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  return await api.request(options).then((res) => res.data);

  // return await mutate(api, options);
}

export async function searchClients(search: string) {
  const options = {
    method: 'GET',
    url: `${Endpoints.get}/search`,
    params: {
      search,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  return await api.request(options).then((res) => res.data);

  // return await mutate(api, options);
}

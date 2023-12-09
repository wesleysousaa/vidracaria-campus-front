import { useMutation } from '@tanstack/react-query';
import api from '../..';
import { ClientValidation } from '../../../types';
import { AxiosInstance } from 'axios';

enum Endpoints {
  get = '/customers',
}

const mutate = async (dispach: AxiosInstance, options: {}) => {
  // Não funciona de jeito maneira
  return useMutation({
    mutationFn: async () => {
      return await dispach.request(options).then((res) => res.data);
    },
  });
};

export async function getAllClients() {
  const options = {
    method: 'GET',
    url: Endpoints.get,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')?.split('"')[1]}`,
    },
  };

  api.request(options);

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

  api.request(options);

  return await api.request(options).then((res) => res.data);

  // return mutate(api, options);
}

export async function updateClient(client: ClientValidation) {
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
  api.request(options);

  return await api.request(options).then((res) => res.data);

  // return mutate(api, options);
}

export async function createClient(client: ClientValidation) {
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

  api.request(options);

  return await api.request(options).then((res) => res.data);

  // return mutate(api, options);
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
  console.log(options);

  api.request(options);

  return await api.request(options).then((res) => res.data);

  // return mutate(api, options);
}

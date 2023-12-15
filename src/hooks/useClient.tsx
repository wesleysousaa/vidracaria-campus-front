// AuthProvider.js
import { useCallback } from 'react';
import {
  createClient,
  deleteClient,
  getAllClients,
  getOneClient,
  searchClients,
  updateClient,
} from '../services/hooks/Customer';
import { CustomerValidation } from '../types';

export const useClient = () => {
  const getAll = useCallback(async () => {
    const data = await getAllClients();
    return data;
  }, []);

  const getOne = useCallback(async (id: string) => {
    const data = await getOneClient(id);
    return data;
  }, []);

  const update = useCallback(async (client: CustomerValidation) => {
    const response = await updateClient(client);
    return response;
  }, []);

  const create = useCallback(async (client: CustomerValidation) => {
    const response = await createClient(client);
    return response;
  }, []);

  const deleteOne = useCallback(async (id: string) => {
    const response = await deleteClient(id);
    return response;
  }, []);

  const search = useCallback(async (search: string) => {
    const response = await searchClients(search);
    return response;
  }, []);

  return {
    getAll,
    getOne,
    update,
    create,
    deleteOne,
    search,
  };
};

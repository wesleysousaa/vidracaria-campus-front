// AuthProvider.js
import { useCallback } from 'react';
import {
  getOneClient,
  createClient,
  getAllClients,
  updateClient,
  deleteClient,
} from '../services/hooks/client';
import { ClientValidation } from '../types';

export const useClient = () => {
  const getAll = useCallback(async () => {
    const data = await getAllClients();
    return data;
  }, []);

  const getOne = useCallback(async (id: string) => {
    const data = await getOneClient(id);
    return data;
  }, []);

  const update = useCallback(async (client: ClientValidation) => {
    const response = await updateClient(client);
    return response;
  }, []);

  const create = useCallback(async (client: ClientValidation) => {
    const response = await createClient(client);
    return response;
  }, []);

  const deleteOne = useCallback(async (id: string) => {
    const response = await deleteClient(id);
    return response;
  }, []);

  return {
    getAll,
    getOne,
    update,
    create,
    deleteOne,
  };
};

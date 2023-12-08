import { useMutation } from '@tanstack/react-query';
import api from '../..';
import { UserValidation } from '../../../types';

enum Endpoints {
  authUser = '/auth',
}

export const useAuthUser = () => {
  return useMutation({
    mutationFn: (user: UserValidation) => {
      return api
        .post(Endpoints.authUser, user)
        .then((res) => res.data);
    },
    onSuccess: (data) => {
      localStorage.setItem('token', JSON.stringify(data.token));
      
    },
  });
};

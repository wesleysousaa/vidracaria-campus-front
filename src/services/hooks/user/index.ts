import { useMutation } from '@tanstack/react-query';
import api from '../..';
import { UserValidation } from '../../../types';

enum Endpoints {
  authUser = '/auth',
}

export const useAuthUser = () => {
  return useMutation<string, Error, UserValidation>({
    mutationFn: (user: UserValidation) => {
      return api
        .post(Endpoints.authUser, user)
        .then((res) => res.data);
    },
    onSuccess: (token: string) => {
      console.log('Token:', token);
      localStorage.setItem('token: ', token);
    },
  });
};

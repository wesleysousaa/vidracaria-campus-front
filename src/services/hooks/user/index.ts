import { useMutation } from '@tanstack/react-query';
import api from '../..';
import { UserValidation } from '../../../types';

enum Endpoints {
  authUser = '/auth',
  validToken = '/auth/validToken/',
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

export const useValidatedToken = () => {
  return useMutation({
    mutationFn: (token: String) => {
      return api
        .post(Endpoints.validToken, {}, { params: { token }})
        .then((res) => res.data);
    },
    onError: () => {
      localStorage.removeItem('token');
    }
  });
};

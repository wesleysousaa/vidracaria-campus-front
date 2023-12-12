import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { SetterOrUpdater } from 'recoil';
import api from '../..';
import { UserValidation } from '../../../types';

enum Endpoints {
  authUser = '/auth/login',
  validToken = '/auth/is-valid-token',
}

const useAuthUser = (setIsAuthenticated: SetterOrUpdater<boolean>) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (user: UserValidation) => {
      return api.post(Endpoints.authUser, user).then((res) => res.data);
    },
    onSuccess: (data) => {
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/relatórios');
      setIsAuthenticated(true);
    },
  });
};

const useValidatedToken = (setIsAuthenticated: SetterOrUpdater<boolean>) => {
  return useMutation({
    mutationFn: (token: String) => {
      return api
        .post(Endpoints.validToken, {}, { params: { token } })
        .then((res) => res.data);
    },
    onSuccess: () => {
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
    },
  });
};

export { useAuthUser, useValidatedToken };


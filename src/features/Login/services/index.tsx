import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import api from '../../../services';
import { UserValidation } from '../types';

const enum Endpoints {
  authUser = '/auth/',
}

const useAuthUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (user: UserValidation) => {
      return api.post(Endpoints.authUser, user).then((res) => res.data);
    },
    onSuccess: (data) => {
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/relatorios');
    },
  });
};

export { useAuthUser };

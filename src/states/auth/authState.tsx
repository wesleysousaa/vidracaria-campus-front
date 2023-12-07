import { atom } from 'recoil';
import { UserValidation } from '../../types';

export const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: false,
});

export const userState = atom<UserValidation | null>({
  key: 'userState',
  default: null,
});

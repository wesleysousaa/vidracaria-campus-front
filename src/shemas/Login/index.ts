import * as Yup from 'yup';

export interface UserValidation {
    email: string;
    password: string;
}

export const LoginSchema = Yup.object<UserValidation>().shape({
  email: Yup.string().required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});


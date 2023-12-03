import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default LoginSchema;

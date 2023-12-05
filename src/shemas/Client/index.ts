import * as Yup from 'yup';
import { ClientValidation } from '../../types';

export const ClientSchema = Yup.object<ClientValidation>().shape({
  name: Yup.string().required('O nome é obrigatório'),
  people: Yup.string().required('O campo pessoa é obrigatório'),
  phone: Yup.string().required('O telefone é obrigatório'),
  street: Yup.string().required('a rua é obrigatório'),
  cep: Yup.string().required('O cep é obrigatório'),
  number: Yup.string().required('O numero é obrigatório'),
  city: Yup.string().required('a cidade é obrigatório'),
  state: Yup.string().required('O estado é obrigatório'),
});

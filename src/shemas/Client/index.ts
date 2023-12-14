import * as Yup from 'yup';
import { ClientValidation } from '../../types';

export const ClientSchema = Yup.object<ClientValidation>().shape({
  id: Yup.string().optional(),
  name: Yup.string().required('O nome é obrigatório'),
  cpf_cnpj: Yup.string().optional(),
  email: Yup.string().email('Digite o email no formato correto').optional(),
  customerType: Yup.string().required('O campo pessoa é obrigatório'),
  phone: Yup.string().required('O telefone é obrigatório'),
  // address: Yup.string().required('a rua é obrigatório'),
  // zipCode: Yup.string().required('O cep é obrigatório'),
  // number: Yup.string().required('O numero é obrigatório'),
  // city: Yup.string().required('a cidade é obrigatório'),
  // state: Yup.string().required('O estado é obrigatório'),
  // landmark: Yup.string().optional(),
  address: Yup.object().shape({
    address: Yup.string().required('a rua é obrigatório'),
    zipCode: Yup.string().required('O cep é obrigatório'),
    number: Yup.string().required('O numero é obrigatório'),
    city: Yup.string().required('a cidade é obrigatório'),
    state: Yup.string().required('O estado é obrigatório'),
    landmark: Yup.string().optional(),
  }),
});

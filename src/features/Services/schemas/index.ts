import * as Yup from 'yup';
import { Status } from '../types';

export const EditServiceSchema = Yup.object().shape({
  price: Yup.number().optional(),
  status: Yup.mixed<Status>().required('Campo obrigatório'),
  discount: Yup.number().optional(),
  products: Yup.array()
    .optional()
    .of(
      Yup.object().shape({
        id: Yup.string().required('O ID do produto é obrigatório'),
        name: Yup.string().required('O nome do produto é obrigatório'),
        depth: Yup.number().min(1, 'A profundidade deve ser no mínimo 1'),
        height: Yup.number().min(1, 'A altura deve ser no mínimo 1'),
        price: Yup.number().min(0, 'O preço deve ser no mínimo 0'),
        width: Yup.number().min(1, 'A largura deve ser no mínimo 1'),
        actualQuantity: Yup.number()
          .required('Campo obrigatório')
          .integer('A quantidade atual deve ser um número inteiro')
          .min(1, 'A quantidade atual deve ser no mínimo 1'),
      }),
    ),
  id: Yup.string().optional(),
  deliveryForecast: Yup.string().optional(),
});

export const CreateServiceSchema = Yup.object().shape({
  client: Yup.string().required('Campo obrigatório'),
  price: Yup.number(),
  discount: Yup.number(),
  status: Yup.mixed<Status>().required('Campo obrigatório'),
  products: Yup.array()
    .required('Campo obrigatório')
    .of(
      Yup.object().shape({
        id: Yup.string().required('O ID do produto é obrigatório'),
        name: Yup.string().required('O nome do produto é obrigatório'),
        depth: Yup.number()
          .min(0, 'A profundidade deve ser no mínimo 1')
          .optional(),
        height: Yup.number().min(0, 'A altura deve ser no mínimo 1').optional(),
        price: Yup.number().min(0, 'O preço deve ser no mínimo 0').optional(),
        width: Yup.number().min(0, 'A largura deve ser no mínimo 1').optional(),
        actualQuantity: Yup.number()
          .required('Campo obrigatório')
          .integer('A quantidade atual deve ser um número inteiro')
          .min(1, 'A quantidade atual deve ser no mínimo 1'),
      }),
    ),
});

import * as Yup from 'yup';
import { CreateServiceValidation, Status } from '../types';

export const EditServiceSchema = Yup.object().shape({});

export const CreateServiceSchema = Yup.object<CreateServiceValidation>({
  id: Yup.string().required('Campo obrigatório'),
  client: Yup.string().required('Campo obrigatório'),
  deliveryForecast: Yup.string().required('Campo obrigatório'),
  price: Yup.number().required(),
  status: Yup.mixed<Status>().required('Campo obrigatório'),
  products: Yup.array().of(
    Yup.object().shape({
      id: Yup.string().required('O ID do produto é obrigatório'),
      name: Yup.string().required('O nome do produto é obrigatório'),
      depth: Yup.number().min(1, 'A profundidade deve ser no mínimo 1'),
      height: Yup.number().min(1, 'A altura deve ser no mínimo 1'),
      price: Yup.number().min(0, 'O preço deve ser no mínimo 0'),
      width: Yup.number().min(1, 'A largura deve ser no mínimo 1'),
      actualQuantity: Yup.number()
        .integer('A quantidade atual deve ser um número inteiro')
        .min(1, 'A quantidade atual deve ser no mínimo 1'),
    }),
  ),
  images: Yup.array().of(
    Yup.object().shape({
      file: Yup.mixed().required('Imagem obrigatória'),
    }),
  ),
});

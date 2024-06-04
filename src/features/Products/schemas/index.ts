import * as Yup from 'yup';
import { Category, UnitOfMeasure } from '../types';

export const EditProductSchema = Yup.object().shape({
  id: Yup.string().required('Campo obrigatório'),
  name: Yup.string().required('Campo obrigatório'),
  unitOfMeasure: Yup.mixed<UnitOfMeasure>()
    .oneOf(['CENTIMETRO', 'METRO', 'MILIMETRO'])
    .required('Campo obrigatório'),
  category: Yup.mixed<Category>()
    .oneOf(['COMUM', 'TEMPERADO'])
    .required('Campo obrigatório'),
  height: Yup.number().required('Campo obrigatório'),
  width: Yup.number().required('Campo obrigatório'),
  depth: Yup.number().required('Campo obrigatório'),
  price: Yup.number().required('Campo obrigatório'),
});

export const CreateProductSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  unitOfMeasure: Yup.string()
    .oneOf(['CENTIMETRO', 'METRO', 'MILIMETRO'])
    .required('Campo obrigatório'),
  category: Yup.string()
    .oneOf(['COMUM', 'TEMPERADO'])
    .required('Campo obrigatório'),
});

import * as Yup from 'yup';
import { ProductValidation, CreateProductValidation } from '../types';

export const ProductSchema = Yup.object<ProductValidation>().shape({
  name: Yup.string().required('Campo obrigatório'),
  unitOfMeasure: Yup.string().required('Campo obrigatório'),
  category: Yup.string().required('Campo obrigatório'),
  height: Yup.number(),
  width: Yup.number(),
  depth: Yup.number(),
  price: Yup.number(),
});

export const CreateProductSchema = Yup.object<CreateProductValidation>().shape({
  name: Yup.string().required('Campo obrigatório'),
  unitOfMeasure: Yup.string().required('Campo obrigatório'),
  category: Yup.string().required('Campo obrigatório'),
});

import * as Yup from 'yup';

export const ProductSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  unitOfMeasure: Yup.string()
    .oneOf(['CENTIMETER', 'METER', 'MILIMETER'])
    .required('Campo obrigatório'),
  category: Yup.string()
    .oneOf(['REGULAR', 'TEMPERED'])
    .required('Campo obrigatório'),
  height: Yup.number().required('Campo obrigatório'),
  width: Yup.number().required('Campo obrigatório'),
  depth: Yup.number().required('Campo obrigatório'),
  price: Yup.number().required('Campo obrigatório'),
  id: Yup.string(),
});

export const CreateProductSchema = Yup.object({
  name: Yup.string().required('Campo obrigatório'),
  unitOfMeasure: Yup.string().required('Campo obrigatório'),
  category: Yup.string().required('Campo obrigatório'),
});

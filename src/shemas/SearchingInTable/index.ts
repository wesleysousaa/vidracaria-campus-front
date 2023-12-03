import * as Yup from 'yup';
import { SearchValidation } from '../../types';

export const SearchSchema = Yup.object<SearchValidation>().shape({
  value: Yup.string().required('Digite um valor para pesquisar'),
});

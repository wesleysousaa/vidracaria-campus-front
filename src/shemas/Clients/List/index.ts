import * as Yup from 'yup';

export interface SearchValidation {
  value: string;
}

export const SearchSchema = Yup.object<SearchValidation>().shape({
  value: Yup.string().required('Digite um valor para pesquisar'),
});

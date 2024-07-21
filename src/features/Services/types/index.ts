import { Category } from '../../Products/types';

export type Status =
  | 'ORCADO'
  | 'CONTRATADO_A_VISTA'
  | 'CONTRATADO_A_PRAZO'
  | 'FINALIZADO';

export interface ServiceValidation {
  client: string;
  price: number;
  status: Status;
  products: ProductInfo[];
  images?: { file: File[] }[];
}

export interface CreateServiceValidation extends ServiceValidation {}
export interface EditServiceValidation extends ServiceValidation {
  id: string;
  deliveryForecast: string;
}

export interface ProductInfo {
  id: string;
  name: string;
  depth: number;
  height: number;
  price: number;
  width: number;
  actualQuantity: number;
  category?: Category;
}

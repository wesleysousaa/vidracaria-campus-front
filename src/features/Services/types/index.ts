import { Category } from '../../Products/types';

export type Status =
  | 'ORCADO'
  | 'CONTRATADO_A_VISTA'
  | 'CONTRATADO_A_PRAZO'
  | 'FINALIZADO';

export interface ServiceValidation {
  client: string;
  price?: number;
  status: Status;
  products: ProductInfo[];
  discount?: number;
  images?: string[];
}

export interface ServiceValidationTable {
  client: string;
  price: number;
  status: Status;
  images?: string[];
  id: string;
  deliveryForecast: string;
}

export interface CreateServiceValidation extends ServiceValidation {
  files?: File[];
}

export interface EditServiceValidation extends ServiceValidation {
  id: string;
  deliveryForecast: string;
  files?: File[];
}

export interface ProductInfo {
  id: string;
  name: string;
  depth?: number;
  height?: number;
  price?: number;
  width?: number;
  actualQuantity: number;
  category?: Category;
}

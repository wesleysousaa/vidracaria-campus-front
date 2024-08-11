import { AddressValidation } from '../../Customers/types';
import { Category, GlassVariant } from '../../Products/types';

export type Status =
  | 'ORCADO'
  | 'CONTRATADO_A_VISTA'
  | 'CONTRATADO_A_PRAZO'
  | 'FINALIZADO';

export interface ServiceValidation {
  status: Status;
  products: ProductInfo[];
  discount?: number;
  images?: string[];
  files?: File[];
  total?: number;
}

export interface ServiceValidationTable {
  ownerName?: string;
  total?: number;
  status: Status;
  id?: string;
  deliveryForecast?: string;
}

export interface CreateServiceValidation extends ServiceValidation {
  client: string;
}

export interface EditServiceValidation extends ServiceValidation {
  id: string;
  deliveryForecast?: string;
  ownerName: string;
  address: AddressValidation;
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
  type?: GlassVariant;
}

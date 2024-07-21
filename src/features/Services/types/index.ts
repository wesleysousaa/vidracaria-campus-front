export type Status =
  | 'ORCADO'
  | 'CONTRATADO_A_VISTA'
  | 'CONTRATADO_A_PRAZO'
  | 'FINALIZADO';

export interface ServiceValidation {
  id: string;
  client: string;
  deliveryForecast: string;
  price: number;
  status: Status;
  products: ProductInfo[];
  images?: File[];
}

export interface CreateServiceValidation extends ServiceValidation {}

export interface ProductInfo {
  id: string;
  name: string;
  depth: number;
  height: number;
  price: number;
  width: number;
  actualQuantity: number;
}

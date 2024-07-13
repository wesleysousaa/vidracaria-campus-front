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
}

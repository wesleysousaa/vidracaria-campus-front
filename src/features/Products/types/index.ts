export type category = 'COMUM' | 'TEMPERADO';
export type unitOfMeasure = 'CENTIMETRO' | 'METRO' | 'MILIMETRO';

export interface ProductBase {
  name: string;
  unitOfMeasure: unitOfMeasure;
  category: category;
}

export interface ProductValidation extends ProductBase {
  id: string;
  actualQuantity: number;
  depth: number;
  height: number;
  price: number;
  width: number;
}

export interface CreateProductValidation extends ProductBase {}

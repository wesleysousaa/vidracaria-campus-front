export type category = 'REGULAR' | 'TEMPERADO';
export type unitOfMeasure = 'CENTIMETRO' | 'METRO' | 'MILIMETRO';

export interface ProductBase {
  name: string;
  unitOfMeasure: unitOfMeasure;
  category: category;
}

export interface ProductValidation extends ProductBase {
  id?: string;
  height: number;
  width: number;
  depth: number;
  price: number;
}

export interface CreateProductValidation extends ProductBase {}

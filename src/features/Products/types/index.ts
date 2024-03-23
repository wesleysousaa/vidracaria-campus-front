export type category = 'REGULAR' | 'TEMPERED';
export type unitOfMeasure = 'CENTIMETER' | 'METER' | 'MILIMETER';

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

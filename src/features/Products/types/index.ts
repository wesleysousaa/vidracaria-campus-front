export interface ProductValidation {
  id?: string;
  name: string;
  unitOfMeasure: string;
  category: string;
  height?: number;
  width?: number;
  depth?: number;
  price?: number;
}

export interface CreateProductValidation {
  name: string;
  unitOfMeasure: string;
  category: string;
}

export type category = 'REGULAR' | 'TEMPERED';
export type unitOfMeasure = 'CENTIMETER' | 'METER' | 'MILIMETER';

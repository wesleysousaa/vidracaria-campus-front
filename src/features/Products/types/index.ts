export interface ProductValidation {
  id: number;
  name: string;
  unitOfMeasure: unitOfMeasure;
  category: category;
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

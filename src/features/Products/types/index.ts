export type Category = 'COMUM' | 'TEMPERADO';
export type UnitOfMeasure = 'CENTIMETRO' | 'METRO' | 'MILIMETRO';

export interface ProductBase {
  name: string;
  unitOfMeasure: UnitOfMeasure;
  category: Category;
}

export interface ProductEditAndList extends ProductBase {
  id: string;
  depth: number;
  height: number;
  price: number;
  width: number;
}

export interface EditProductValidation extends ProductEditAndList {}

export interface ProductValidation extends ProductEditAndList {
  actualQuantity: number;
}

export interface CreateProductValidation extends ProductBase {}

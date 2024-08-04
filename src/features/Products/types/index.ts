export type Category = 'COMUM' | 'TEMPERADO' | 'DIVERSOS';
export type UnitOfMeasure = 'CENTIMETRO' | 'METRO' | 'MILIMETRO' | 'UNIDADE';

export interface ProductBase {
  name: string;
  unitOfMeasure: UnitOfMeasure;
  category: Category;
}

export interface ProductEditAndList extends ProductBase {
  id: string;
  depth?: number;
  height?: number;
  width?: number;
  price?: number;
}

export interface EditProductValidation extends ProductEditAndList {}

export interface ProductValidation extends ProductEditAndList {
  actualQuantity: number;
}

export interface CreateProductValidation extends ProductBase {}

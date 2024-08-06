import { ProductInfo } from '../types';

interface calcTotalProps {
  products: ProductInfo[];
  discount: number;
}

export const calcTotal = ({ products, discount }: calcTotalProps) => {
  const total =
    products.reduce((acc, prod) => {
      console.log(prod.price);
      if (prod.price) {
        return acc + Number(prod?.price) * prod.actualQuantity;
      }
      return 0;
    }, 0) - discount;
  return total;
};

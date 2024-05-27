export enum TransactionType {
  ENTRADA,
  SAIDA,
  BAIXAESTOQUE,
}

export interface TransactionStock {
  idProduct: string;
  transactionType: TransactionType;
  movementQuantity: number;
}

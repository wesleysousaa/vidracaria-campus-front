import * as Yup from 'yup';

export const TransactionStockSchema = Yup.object({
  idProduct: Yup.string().required('O produto é obrigatório'),
  transactionType: Yup.number().required('O tipo de transação é obrigatório'),
  movementQuantity: Yup.number()
    .required('A quantidade é obrigatória')
    .min(1, 'A quantidade deve ser maior que 0'),
});

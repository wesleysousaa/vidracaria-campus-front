export type DashCounters = {
  invoicing: number;
  comparison: number;
  contractedServices: number;
  newCustomers: number;
  monthlyBillingDTOS: InvoicingDate[];
};

export type InvoicingDate = {
  date: number[];
  value: number;
  month: string;
};

export const DepthsCommon = [2, 3, 4, 5, 6];

export const DepthsTemperated = [6, 8, 10, 12];

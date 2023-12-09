export interface UserValidation {
  id?: number;
  email: string;
  password: string;
  name?: string;
  role?: string;
}

export interface SearchValidation {
  value: string;
}

export interface ClientValidation {
  id?: string;
  name: string;
  customerType: string;
  cpf_cnpj?: string;
  email?: string;
  phone: string;
  address: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
  landmark?: string;
}

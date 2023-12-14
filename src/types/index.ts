export interface UserValidation {
  id?: number;
  email: string;
  password: string;
  name?: string;
  role?: string;
}

export interface SearchValidation {
  value?: string;
}

export interface ClientValidation {
  id?: string;
  name: string;
  customerType: string;
  cpfcnpj?: string;
  email?: string;
  phone: string;
  address: AddressValidation;
}

export interface AddressValidation {
  address: string;
  zipCode: string;
  number: string;
  city: string;
  state: string;
  landmark?: string;
}

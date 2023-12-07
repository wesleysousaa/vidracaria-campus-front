export interface UserValidation {
  email: string;
  password: string;
  name?: string;
  role?: string;
}

export interface SearchValidation {
  value: string;
}

export interface ClientValidation {
  name: string;
  people: string;
  cpfCnpj: string;
  email: string;
  phone: string;
  street: string;
  cep: string;
  number: string;
  city: string;
  state: string;
  pointReference: string;
}

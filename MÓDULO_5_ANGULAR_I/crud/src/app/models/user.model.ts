export interface User {
  _id?: string;
  name: string;
  email: string;
  profession:string;
  documentNumber:string;
  birthDate: string;
  monthlyIncome:string;
  address:Address
}

export interface Address{
    zipCode:string
    street: string
    number: string
    complement?:string
    district:string
    city:string
    state:string
    country:string
}
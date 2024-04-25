export interface User {
  id?: string;
  name: string;
  email: string;
  profession:string;
  documentNumber:string;
  birthDate: string;
  monthlyIncome:number;
  address:Address
}

export interface Address{
    zipCode:string
    street: string
    number:number
    complement?:string
    district:string
    city:string
    state:string
    country:string
}
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export interface FormData {
  name: string;
  email: string;
  street: string;
  city: string;
  zip: string;
}
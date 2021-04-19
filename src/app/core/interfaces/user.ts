export interface User {
  checked: boolean;
  _id: number;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    country: string;
    city: string;
    state: string;
    street: {
      name: string;
      number: number;
    };
  };
  email: string;
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
}

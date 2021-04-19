export interface UserById {
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
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
  id?: {
    name: string;
    value: string;
  };
}

// export interface

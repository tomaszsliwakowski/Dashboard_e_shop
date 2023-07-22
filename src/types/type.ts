export type TimerType = {
  second: number;
  minutes: number;
  hour: number;
};

export type LoginType = {
  email: string;
  password: string;
};

export type PRODUCTS = {
  product: {
    id: number;
    img: string;
    name: string;
    producer: string;
    price: number;
    category: string;
    opinion: number;
    spec: [string];
  };
};
export type PRODUCT = {
  id: number;
  img: string;
  name: string;
  producer: string;
  price: number;
  category: string;
  opinion: number;
  spec: [string];
};
export type queueProduct = {
  id: number;
  img: string;
  name: string;
  producer: string;
  price: number;
  newPrice: number;
  queue: number;
  category: string;
  opinion: number;
  spec: [string];
};

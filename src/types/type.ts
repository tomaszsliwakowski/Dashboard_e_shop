export type TimerType = {
  second: number;
  minutes: number;
  hour: number;
};

export type LoginType = {
  email: string;
  password: string;
};

export type GET_PRODUCTS_TYPE = {
  products: [
    {
      id: number;
      img: string;
      name: string;
      producer: string;
      price: number;
      category: string;
      opinion: number;
      spec: [string];
    }
  ];
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
  _id: string;
  img: string;
  name: string;
  producer: string;
  price: number;
  newPrice: number;
  category: string;
  opinion: number;
  spec: [string];
};

export type chartType =
  | "area"
  | "line"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap"
  | undefined;

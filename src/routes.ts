export const SERVER = "https://dashboard-e-shop.vercel.app";
export const LOCAL_SERVER = "http://localhost:8080";

export const PANEL_ROUTE = "/dashboard";
export const SALE_ROUTE = "/dashboard/sale";
export const PRODUCTS_ROUTE = "/dashboard/products";
export const GET_SALE = `${SERVER}/api/sale`;

export function DELETE_SALE(id: string) {
  return `${SERVER}/api/sale/${id}`;
}

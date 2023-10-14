export const SERVER = "https://dashboard-e-shop.vercel.app";
export const LOCAL_SERVER = "http://localhost:8080";

export const PANEL_ROUTE = "/dashboard";
export const SALE_ROUTE = "/dashboard/sale";
export const PRODUCTS_ROUTE = "/dashboard/products";
export const GET_SALE = `${SERVER}/api/sale`;
export const ADD_SALE = `${SERVER}/api/sale`;

export function DELETE_SALE(id: string) {
  return `${SERVER}/api/sale/${id}`;
}
export function UPDATE_SALE(id: string) {
  return `${SERVER}/api/sale/${id}`;
}
export function GET_PRODUCTS(category: string) {
  return `${SERVER}/api/product/${category}`;
}

export const PANEL_ROUTE = "/dashboard";
export const SALE_ROUTE = "/dashboard/sale";
export const PRODUCTS_ROUTE = "/dashboard/products";
export const GET_SALE = "http://localhost:8080/api/sale";

export function DELETE_SALE(id: string) {
  return `http://localhost:8080/api/sale/${id}`;
}

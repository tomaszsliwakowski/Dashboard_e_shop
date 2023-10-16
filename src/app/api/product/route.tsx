import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdAll_DB from "@/mongo/model/schema_all";
import { GET_PRODUCTS_TYPE } from "@/types/type";

dbConnect();

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newdata = JSON.parse(data.body);
  if (!newdata.productToSend) return NextResponse.json({ message: "Error" });
  try {
    let ProductsData = await ProdAll_DB.find().then(
      (reasult: GET_PRODUCTS_TYPE[]) => {
        const productsData = reasult[0].products;
        return { product: productsData, allProducts: reasult };
      }
    );
    const ProductToAdd = newdata.productToSend;
    let Products = [...ProductsData.product, ProductToAdd];
    let allProducts = ProductsData.allProducts;
    allProducts[0].products = Products;
    return NextResponse.json({ message: "Add", ProductToAdd });
  } catch (error) {
    return NextResponse.json({ message: "Fail" });
  }
}

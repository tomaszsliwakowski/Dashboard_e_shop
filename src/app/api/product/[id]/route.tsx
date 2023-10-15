import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdAll_DB from "@/mongo/model/schema_all";
import { GET_PRODUCTS_TYPE, PRODUCT } from "@/types/type";

dbConnect();

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[3];
  const data = await request.json();
  const newPrice = JSON.parse(data.body);
  if (!id) return NextResponse.json({ message: "Id is required to update" });
  if (!newPrice)
    return NextResponse.json({ message: "New price is required to update" });
  try {
    let data = await ProdAll_DB.find().then((reasult: GET_PRODUCTS_TYPE[]) => {
      const productsData = reasult[0].products.filter(
        (item) => item.id === parseInt(id)
      );
      return { product: productsData[0], allProducts: reasult };
    });

    let product: PRODUCT = data.product;
    let allProducts = data.allProducts;
    product.price = parseInt(newPrice.value);
    let index = allProducts[0].products.findIndex(
      (it: PRODUCT) => it._id === product._id
    );
    let products = allProducts[0].products;
    products[index] = product;
    allProducts[0].products = products;
    await ProdAll_DB.findByIdAndUpdate(
      "64731df2bb53cb736474f421",
      allProducts[0]
    );
    return NextResponse.json({ message: "Update", product });
  } catch (error) {
    return NextResponse.json({ message: "Fail update" });
  }
}
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[3];
  if (!id) return NextResponse.json({ message: "Id is required to delete" });
  try {
    let data = await ProdAll_DB.find().then((reasult: GET_PRODUCTS_TYPE[]) => {
      const productsData = reasult[0].products.filter(
        (item) => item.id === parseInt(id)
      );
      return { product: productsData[0], allProducts: reasult };
    });

    let product: PRODUCT = data.product;
    let allProducts = data.allProducts;
    let index = allProducts[0].products.findIndex(
      (it: PRODUCT) => it._id === product._id
    );
    let products = allProducts[0].products;
    products.filter((item: PRODUCT) => item._id !== product._id);
    allProducts[0].products = products;
    //await ProdAll_DB.findByIdAndUpdate(
    // "64731df2bb53cb736474f421",
    // allProducts[0]
    //);
    return NextResponse.json({ message: "Delete", product });
  } catch (error) {
    return NextResponse.json({ message: "Fail delete" });
  }
}

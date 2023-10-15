import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdAll_DB from "@/mongo/model/schema_all";
import { GET_PRODUCTS_TYPE, PRODUCT } from "@/types/type";
import { ObjectId } from "mongodb";

dbConnect();

function makeid(length: number): string {
  let result: string = "";
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newdata = JSON.parse(data.body);
  if (!newdata) return NextResponse.json({ message: "Error" });
  console.log(newdata.productToSend);
  try {
    let ProductsData = await ProdAll_DB.find().then(
      (reasult: GET_PRODUCTS_TYPE[]) => {
        const productsData = reasult[0].products.filter((item) => item);
        return { product: productsData[0], allProducts: reasult };
      }
    );

    const lenght: number = ProductsData.product.length;
    let productToAdd: PRODUCT = Object.assign(newdata.productToSend, {
      opinion: Math.random() * (5 - 3) + 3,
      id: lenght + 1,
      _id: new ObjectId(makeid(25)),
    });

    let Products = [...ProductsData.product, productToAdd];
    let allProducts = ProductsData.allProducts;

    allProducts[0].products = Products;
    console.log(productToAdd);
    return NextResponse.json({ message: "Add", Products });
  } catch (error) {
    return NextResponse.json({ message: "Fail" });
  }
}

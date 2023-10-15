import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdAll_DB from "@/mongo/model/schema_all";
import { GET_PRODUCTS_TYPE } from "@/types/type";

const productsLibrary = {
  Wszystko: "",
  Laptopy: "Laptop",
  Smartphone: "Smartphone",
  Komputery: "Komputer",
  Komponenty: "Komponenty",
  Akcesoria: "Akcesoria",
};

type KeyLibrary = keyof typeof productsLibrary;

dbConnect();

export async function GET(request: NextRequest) {
  const category = request.nextUrl.pathname.split("/")[3];
  const Products = await ProdAll_DB.find().then(
    (reasult: GET_PRODUCTS_TYPE[]) => {
      const productsData = reasult[0].products.filter((item) =>
        item.category.includes(productsLibrary[category as KeyLibrary])
      );
      return productsData;
    }
  );

  if (!Products) return NextResponse.json({ message: "Error" });
  return NextResponse.json({ Products });
}

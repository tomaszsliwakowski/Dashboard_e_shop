import { NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdAll_DB from "@/mongo/model/schema_all";
import { PRODUCTS } from "@/types/type";
import ProdQueue from "@/mongo/model/schema_queueEl";

dbConnect();

export async function GET() {
  const Product = await ProdAll_DB.find().then((reasult: PRODUCTS) => {
    return reasult;
  });

  if (!Product) return NextResponse.json({ message: "Error" });
  return NextResponse.json({ Product });
}

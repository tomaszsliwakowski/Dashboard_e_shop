import { NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import { queueProduct } from "@/types/type";
import saleQueue from "@/mongo/model/schema_queue";

dbConnect();

export async function GET() {
  const Products = await saleQueue.find().then((reasult: queueProduct) => {
    return reasult;
  });

  if (!Products) return NextResponse.json({ message: "Error" });
  return NextResponse.json({ Products });
}

import { NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newdata = JSON.parse(data.body);
  if (!newdata) return NextResponse.json({ message: "Error" });
  try {
    const product = await saleQueue.create(newdata.item);
    await product.save();
    return NextResponse.json({ message: "Add", product });
  } catch (error) {
    return NextResponse.json({ message: "Fail" });
  }
}

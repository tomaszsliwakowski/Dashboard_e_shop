import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import saleQueue from "@/mongo/model/schema_queue";

dbConnect();

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[3];
  if (!id) return NextResponse.json({ message: "Id is required to delete" });
  try {
    const deleteRes = await saleQueue.findByIdAndDelete(id);
    return NextResponse.json({ message: "Delete", deleteRes });
  } catch (error) {
    return NextResponse.json({ message: "Fail delete" });
  }
}

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[3];
  const data = await request.json();
  const newPrice = JSON.parse(data.body);
  if (!id) return NextResponse.json({ message: "Id is required to update" });
  if (!newPrice)
    return NextResponse.json({ message: "New price is required to update" });
  try {
    let product = await saleQueue.findById(id);
    product.newPrice = newPrice.value;
    await saleQueue.findByIdAndUpdate(id, product);
    return NextResponse.json({ message: "Update", product });
  } catch (error) {
    return NextResponse.json({ message: "Fail update" });
  }
}

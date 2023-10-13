import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import { queueProduct } from "@/types/type";
import saleQueue from "@/mongo/model/schema_queue";

dbConnect();

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[3];
  if (!id) return NextResponse.json({ message: "id is required to delete" });
  try {
    const deleteRes = await saleQueue.findByIdAndDelete(id);
    return NextResponse.json({ message: "deleted", deleteRes });
  } catch (error) {
    return NextResponse.json({ message: "fail delete" });
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdQueue from "@/mongo/model/schema_queueEl";

dbConnect();
export async function DELETE(req: Request) {
  const id = req.url.split("/")[6];
  await ProdQueue.findByIdAndDelete({ _id: id });
  return NextResponse.json({ message: "Product Delete" });
}

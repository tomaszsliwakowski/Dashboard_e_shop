import { NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdQueue from "@/mongo/model/schema_queueEl";
import { queueProduct } from "@/types/type";

dbConnect();

export async function POST(req: Request) {
  const {
    id,
    img,
    name,
    producer,
    price,
    newPrice,
    queue,
    category,
    opinion,
    spec,
  } = await req.json();
  let newQueueEl = new ProdQueue({
    id: id,
    img: img,
    name: name,
    producer: producer,
    price: price,
    newPrice: newPrice,
    queue: queue,
    category: category,
    opinion: opinion,
    spec: spec,
  });
  await newQueueEl.save();
  return NextResponse.json({ message: "Product save to queue" });
}
export async function PUT(req: Request) {
  const { id, price } = await req.json();
  const UpdateSale = await ProdQueue.findByIdAndUpdate(
    { _id: id },
    { newPrice: price }
  );
  return NextResponse.json({ message: "Product Updated", UpdateSale });
}

export async function GET() {
  const Product = await ProdQueue.find().then((reasult: queueProduct) => {
    return reasult;
  });

  if (!Product) return NextResponse.json({ message: "Error" });
  return NextResponse.json({ Product });
}

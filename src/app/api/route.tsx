import { NextResponse } from "next/server";
import dbConnect from "@/mongo/db";
import ProdAll_DB from "@/mongo/model/schema_all";

type PRODUCT = {
  product: {
    id: Number;
    img: String;
    name: String;
    producer: String;
    price: Number;
    category: String;
    opinion: Number;
    spec: [String];
  };
};

dbConnect();

export async function GET() {
  try {
    await ProdAll_DB.find()
      .then((reasult: PRODUCT) => {
        return NextResponse.json({ message: "All Product", reasult });
      })
      .catch((err: string) => {
        return NextResponse.json({ message: "Product cannot be downloaded" });
      });
  } catch (error) {
    return NextResponse.json({ message: "Product cannot be downloaded" });
  }
}

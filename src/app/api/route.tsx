import { NextResponse } from "next/server";
import dbConnect from "@/mongo/db";

dbConnect();

export async function GET() {
  return NextResponse.json({ message: "ON" });
}

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/api/db";
import ProdAll_DB from "@/mongo/model/schema_all";

dbConnect();

export async function POST(request: NextRequest) {}

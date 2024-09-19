import { NextResponse } from "next/server";
import { dataClassic } from "@/Base/classic/baseClassic";

export async function GET(request: Request) {
    return NextResponse.json(dataClassic)
}
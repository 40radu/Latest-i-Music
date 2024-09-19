import { NextResponse } from "next/server";
import { dataAcoustic } from "@/Base/acoustic/baseAcoustic";

export async function GET(request: Request) {
    return NextResponse.json(dataAcoustic)
}
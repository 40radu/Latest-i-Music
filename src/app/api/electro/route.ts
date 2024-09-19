import { NextResponse } from "next/server";
import { dataElectroAcoustic } from "@/Base/electro-acoustic/baseElectro-Acoustic";

export async function GET(request: Request) {
    return NextResponse.json(dataElectroAcoustic)
}
import { NextResponse } from "next/server";
import { dataElectric } from "@/Base/Electric/baseElectric";

export async function GET(request: Request) {
    return NextResponse.json(dataElectric)
}
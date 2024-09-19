import { NextResponse } from "next/server";
import { dataUkulele } from "@/Base/ukulele/baseUkulele";

export async function GET(request: Request) {
    return NextResponse.json(dataUkulele)
}
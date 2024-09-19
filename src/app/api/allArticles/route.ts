import { dataAll } from "@/Base/allArticle/allarticles";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    return NextResponse.json(dataAll)
}
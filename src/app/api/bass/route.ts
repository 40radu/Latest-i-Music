import { NextResponse } from "next/server";
import { dataBass } from "@/Base/Bass/baseBass";

export async function GET( request : Request) {
    return NextResponse.json( dataBass)
}
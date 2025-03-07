import { dataAll } from "@/Base/allArticle/allarticles";
import { NextResponse } from "next/server";

interface IParams {
    id : string
}

export async function GET(request : Request, props: {params : Promise<IParams>}) {
    const params = await props.params;
    const allData = dataAll
    const article = allData.filter((element)=>(element.id == params.id))
    return NextResponse.json(article)
}
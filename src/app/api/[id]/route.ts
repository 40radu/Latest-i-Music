import { dataAll } from "@/Base/allArticle/allarticles";
import { NextResponse } from "next/server";

interface IParams {
    id : string
}

export async function GET(request : Request , {params} : {params : IParams}) {
        const allData = dataAll
        console.log(allData)
        const article = allData.filter((element)=>(element.id == params.id))
        return NextResponse.json(article)
}
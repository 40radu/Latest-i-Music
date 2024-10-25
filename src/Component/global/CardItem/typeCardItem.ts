import { IArticle } from "@/app/articles/typeBass";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

interface IData {
    id: string;
    name: string;
    quantity?: number;
    price: number;
    category: 'bass' | 'acoustic' | 'electric' | 'electro-acoustic' | 'ukulele' | 'classic';
    promo? : number
}

export interface ICardItem {
    title : string;
    price : number;
    src : StaticImageData;
    textButton : "Add to the cart" | "Get in touch" | "About us" | "Send" | "Discover" | "buy" | "view similar";
    promo? : number;
    data : IData
}


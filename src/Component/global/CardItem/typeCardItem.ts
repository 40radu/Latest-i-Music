import { IArticle } from "@/app/articles/typeBass";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

interface IData {
    id: string;
    name: string;
    quantity?: number;
    price: number;
    category: 'bass' | 'acoustic' | 'electric' | 'electroAcoustic' | 'ukulele' | 'classic';
}

export interface ICardItem {
    title : string;
    price : number;
    src : StaticImageData;
    textButton? : "Add to the cart" | "Get in touch" | "About us" | "Send" | "Discover" | "buy" | "view similar";
    isPromo? : boolean;
    data : IData
}


import { IArticle } from "@/app/articles/typeBass";
import { IAdd } from "@/Service/HandleBasket/handleBasket";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICardItem {
    title : string;
    price : number;
    src : StaticImageData;
    textButton? : "Add to the cart" | "Get in touch" | "About us" | "Send" | "Discover" | "buy" | "view similar";
    isPromo? : boolean;
    data : IAdd
}
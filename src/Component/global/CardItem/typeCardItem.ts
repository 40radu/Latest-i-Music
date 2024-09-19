import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICardItem {
    title : string;
    price : number;
    src : StaticImageData;
}
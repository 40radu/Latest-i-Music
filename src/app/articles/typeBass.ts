export interface IArticle {
    id: string;
    price: number;
    name: string;
    category : 'bass' | 'acoustic' | 'electric' | 'electro-acoustic' | 'ukulele' | 'classic';
    promo? : number 
}
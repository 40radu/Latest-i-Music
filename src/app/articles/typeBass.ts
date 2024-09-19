export interface IArticle {
    id: string;
    price: number;
    name: string;
    category : 'bass' | 'acoustic' | 'electric' | 'electroAcoustic' | 'ukulele' | 'classic'
}
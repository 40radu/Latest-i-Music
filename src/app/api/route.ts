// // pages/api/guitares.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'votre_utilisateur',
//   host: 'localhost',
//   database: 'votre_base_de_donnees',
//   password: 'votre_mot_de_passe',
//   port: 5432,
// });

// type Guitare = {
//   guitare_id: number;
//   name: string;
//   image: string;
//   description: string;
//   price: number;
//   categorie_id: number;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Guitare[] | { error: string }>
// ) {
//   try {
//     const result = await pool.query('SELECT * FROM guitare');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: 'Erreur lors de la récupération des données' });
//   }
// }


import { NextResponse } from "next/server";

export async function GET (request : Request) {
    return NextResponse.json([
        {
            marque : 'fender',
            name : 'fkls',
            type : '4 cordes'
        }
    ])
}




const data = [
    {
        mark :'fender',
        type : 'electric',
        price : 1299,
        name : 'stratocaster american'
    }
]
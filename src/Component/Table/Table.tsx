// pages/guitares.tsx

import { GetServerSideProps } from 'next';
import React from 'react';

type Guitare = {
  guitare_id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  categorie_id: number;
};

type Props = {
  guitareData: Guitare[];
};

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const res = await fetch('http://localhost:3000/api/guitares');
//   const data: Guitare[] = await res.json();

//   return {
//     props: {
//       guitareData: data,
//     },
//   };
// };

const Guitares = async () => {

  const data = await fetch ('ep-twilight-frost-a44hl7m8-pooler.us-east-1.aws.neon.tech');
  const resp = await data.json()

  console.log(resp)
  return (
    <div>
      <h1>Liste des Guitares</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Image</th>
            <th>Description</th>
            <th>Prix</th>
            <th>ID Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {/* {guitareData.map((guitare) => (
            <tr key={guitare.guitare_id}>
              <td>{guitare.guitare_id}</td>
              <td>{guitare.name}</td>
              <td><img src={`/images/${guitare.image}`} alt={guitare.name} width={100} /></td>
              <td>{guitare.description}</td>
              <td>{guitare.price}</td>
              <td>{guitare.categorie_id}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Guitares;

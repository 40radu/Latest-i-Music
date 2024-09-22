import React from 'react'
import { IArticle } from '../typeBass'
import CardItem from '@/Component/global/CardItem/CardItem';
import imageBass from '../../../../public/Image/Article/guitare_bass.png'
import imageAcoustic from '../../../../public/Image/Article/acoustic.png'
import imageClassic from '../../../../public/Image/Article/classic.png'
import imageElectric from '../../../../public/Image/Article/electric.png'
import imageElectroAcoustic from '../../../../public/Image/Article/electro_acoustique.png'
import imageUkulele from '../../../../public/Image/Article/ukulele.png'


async function AllItems() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch (`${apiUrl}/api/allArticles` , {cache : 'no-store'})
  const data = await res.json() as IArticle[]

  const shuffleArray = (array: IArticle[]) => {
    return array.sort(() => Math.random() - 0.5);
  };
  console.log(shuffleArray(data))
  return (
    <>
      {data.map((element) => {
        if (element.category === 'acoustic') {
          return (<CardItem price={element.price} title={element.name}  data={element}   src={imageAcoustic} />)
        }
        if (element.category === 'bass') {
          return (<CardItem price={element.price} title={element.name}  data={element}  src={imageBass} />)
        } if (element.category === 'classic') {
          return (<CardItem price={element.price} title={element.name}  data={element}  src={imageClassic} />)
        } if (element.category === 'electric') {
          return (<CardItem price={element.price} title={element.name}  data={element}  src={imageElectric} />)
        } if (element.category === 'electroAcoustic') {
          return (<CardItem price={element.price} title={element.name}  data={element}  src={imageElectroAcoustic} />)
        } if (element.category === 'ukulele') {
          return (<CardItem price={element.price} title={element.name}  data={element}  src={imageUkulele} />)
        }
      })}
    </>
  )
}

export default AllItems
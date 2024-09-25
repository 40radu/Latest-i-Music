
import CardItem from '@/Component/global/CardItem/CardItem'
import React, { useEffect } from 'react'
import image from '../../../../public/Image/Article/guitare_bass.png'
import { IArticle } from '../typeBass'
import next from 'next'


async function page() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const base = await fetch(`${apiUrl}/api/bass` , {cache : 'no-store'})

    const data = await base.json() as IArticle[]
    
    console.log(data)
    // onClickButton={click}
    return (
        <>
            {data.map((element)=>{
                return (<CardItem title={element.name} data={element} price={element.price} src={image} textButton='Add to the cart' />)
            })}
        </>
    )
}

export default page
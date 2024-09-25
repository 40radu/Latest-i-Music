

import CardItem from '@/Component/global/CardItem/CardItem'
import React, { useEffect } from 'react'
import image from '../../../../public/Image/Article/ukulele.png'
import { IArticle } from '../typeBass'
import next from 'next'


async function page() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const base = await fetch(`${apiUrl}/api/ukulele` , {cache : 'no-store'})
    const data = await base.json() as IArticle[]
    
    console.log(data)
    

    return (
        <>
            {data.map((element)=>{
                return (<CardItem data={element} price={element.price} title={element.name} src={image} textButton='Add to the cart' />)
            })}
        </>
    )
}

export default page
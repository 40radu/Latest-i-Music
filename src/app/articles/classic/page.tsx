

import CardItem from '@/Component/global/CardItem/CardItem'
import React, { useEffect } from 'react'
import image from '../../../../public/Image/Article/classic.png'
import { IArticle } from '../typeBass'
import next from 'next'
import styles from '../_layoutArticle.module.scss'

async function page() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const base = await fetch(`${apiUrl}/api/classic` , {cache : 'no-store'})
    const data = await base.json() as IArticle[]
    
    console.log(data)
    

    return (
        <section className={styles.container_article}>
            {data.map((element)=>{
                return (<CardItem promo={element.promo} data={element} price={element.price} title={element.name} src={image} textButton='Add to the cart' />)
            })}
        </section>
    )
}

export default page
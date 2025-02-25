

import CardItem from '@/Component/global/CardItem/CardItem'
import React, { useEffect } from 'react'
import image from '../../../../public/Image/Article/electro_acoustique.png'
import { IArticle } from '../typeBass'
import next from 'next'
import styles from '../_layoutArticle.module.scss'

async function page() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const base = await fetch(`${apiUrl}/api/electro`, { next: { revalidate: 3600 } })
    const data = await base.json() as IArticle[]

    return (
        <section className={styles.container_article}>
            {data.map((element , index) => {
                return (<CardItem key={index} promo={element.promo} data={element} price={element.price} title={element.name} src={image} textButton='Add to the cart' />)
            })}
        </section>
    )
}

export default page
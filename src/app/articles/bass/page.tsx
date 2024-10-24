
import CardItem from '@/Component/global/CardItem/CardItem'
import React, { useEffect } from 'react'
import image from '../../../../public/Image/Article/guitare_bass.png'
import { IArticle } from '../typeBass'
import next from 'next'
import styles from '../_layoutArticle.module.scss'

async function page() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const base = await fetch(`${apiUrl}/api/bass`, { cache: 'no-store' })
    const data = await base.json() as IArticle[]

    return (
        <section className={styles.container_article}>
            {data.map((element) => {
                return (<CardItem promo={element.promo} title={element.name} data={element} price={element.price} src={image} textButton='Add to the cart' />)
            })}
        </section>
    )
}

export default page
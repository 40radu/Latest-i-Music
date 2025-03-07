// 'use client'


import React from 'react'
import styles from './_idArticle.module.scss'
import Button from '@/Component/global/Button/page'
import ImageZone from './ImageZone/ImageZone'
import { IArticle } from '../typeBass'
import { notFound } from 'next/navigation'
import PopularItems from '@/Component/Dashboard/Section/PopularItems/PopularItems'
import Link from 'next/link'
import IconShield from '@/Component/Icons/IconShield'
import IconReference from '@/Component/Icons/IconReference'
import IconDeliveryCar from '@/Component/Icons/IconDeliveryCar'
import PriceArticle from '@/Component/Articles/PriceArticle/PriceArticle'

// export const revalidate = 60

export async function generateStaticParams() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/allArticles`)
    const data = await res.json() as IArticle[]
    return data.map((element) => ({ id: element.id.toString() }))
}

async function getData(id: string) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/api/${id}`, { cache: 'no-store' })
        const data = await res.json() as IArticle[]
        if (data.length === 0) {
            return notFound()
        }
        return data
    } catch (error) {
        return notFound()
    }
}

interface IParams {
    params: Promise<{ id: string }>
}

async function page({ params }: IParams) {
    const ids = (await params).id
    const data = await getData(ids)
    const { id, price, name, category, promo } = data[0]

    return (
        <>

            <section className={styles.container}>
                <ImageZone category={category} />

                <div className={styles.descriZone}>
                    <div className={styles.titleZone}>
                        <h5>{name}</h5>
                        <p className={styles.category}>({category})</p>
                    </div>

                    <PriceArticle price={price} promo={promo} />

                    <div className={styles.container_button_add}>
                        <Button className='primary' value='Add to the cart' data={data[0]} />
                    </div>

                    <div className={styles.advantageZone}>
                        <div className={styles.wrapper}>
                            <IconShield height='30' width='30' strokeColor='rgb(28 220 28)' />
                            <p>
                                article warranty :<span> 3 years</span>
                            </p>
                        </div>
                        <div className={styles.wrapper}>
                            <IconDeliveryCar height='30' width='30' strokeColor='rgb(28 220 28)' />
                            <p>
                                delivery :<span> free of charge</span>
                            </p>
                        </div>
                        <div className={styles.wrapper}>
                            <IconReference width='30' height='30' strokeColor='rgb(28 220 28)' />
                            <p>
                                article warranty :<span> {id}</span>
                            </p>
                        </div>
                    </div>

                    <p className={styles.descriItem}>{name} is an ideal instrument for musicians of all levels. Its ergonomic neck makes it
                        comfortable to play, whether you're a beginner or a professional. With it's meticulous finish and classic design, it's the perfect
                        accompaniment to all your musical moments
                    </p>
                    <Link href={`/articles/${category}`} className={styles.linkCategory}>
                        <Button className='fourthly' value='view similar' />
                    </Link>
                </div>


            </section>

            <PopularItems />
        </>
    )
}

export default page
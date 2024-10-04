// 'use client'


import React from 'react'
import styles from './_idArticle.module.scss'
import Button from '@/Component/global/Button/page'
import referenceIcn from '../../../Icons/reference.svg'
import shieldIcn from '../../../Icons/shield.svg'
import carIcn from '../../../Icons/car.svg'
import Image from 'next/image'
import ImageZone from './ImageZone/ImageZone'
import { IArticle } from '../typeBass'
import { notFound } from 'next/navigation'
import PopularItems from '@/Component/Dashboard/Section/PopularItems/PopularItems'
import ShieldIcon from '@/Component/Icons/Shield/shieldIcon'

export const revalidate = 60 

export async function generateStaticParams() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/allArticles`)
    const data = await res.json() as IArticle[]
    return data.map((element) => ({ id: element.id.toString() }))
}

export async function getData(id: string) {
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
    params: {
        id: string
    }
}

// const products = [
//     {
//         label: "first product",
//         icon: ShieldIcon
//     },
//     {
//         label: "second product",
//         icon: ShieldIcon
//     },
// ]

async function page({ params }: IParams) {

    const data = await getData(params.id)
    const { id, price, name, category } = data[0]


    return (
        <>

            <section className={styles.container}>
                <ImageZone category={category} />

                <div className={styles.descriZone}>
                    <div className={styles.titleZone}>
                        <h5>{name}</h5>
                        <p className={styles.category}>({category})</p>
                    </div>

                    <p className={styles.price}>price : <span className={styles.number}>{price}.<span className={styles.lower}>00</span> $</span></p>

                    <Button className='third' value='Add to the cart' data={data[0]} />

                    <div className={styles.advantageZone}>
                        <div className={styles.wrapper}>
                            <Image src={shieldIcn} alt='' />
                            <p>
                                article warranty :<span> 3 years</span>
                            </p>
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={carIcn} alt='' />
                            <p>
                                delivery :<span> free of charge</span>
                            </p>
                        </div>
                        <div className={styles.wrapper}>
                            <Image src={referenceIcn} alt='' />
                            <p>
                                article warranty :<span> {id}</span>
                            </p>
                        </div>
                    </div>

                    <p className={styles.descriItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est omnis dolorem voluptatum modi voluptates dolorum reiciendis, atque cum recusandae vel soluta? Praesentium eaque velit quisquam enim ipsa quidem vitae natus!</p>
                    <Button className='fourthly' value='view similar'/>
                </div>


            </section>

            <PopularItems/>
        </>
    )
}

export default page
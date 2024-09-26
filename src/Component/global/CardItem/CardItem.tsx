'use client'

import React, { useEffect } from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import TitleCard from '../TitleCard/TitleCard'
import { ICardItem } from './typeCardItem'
import Price from '../Price/Price'
import Button from '../Button/page'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'
import { useRouter } from 'next/navigation'


function CardItem({ title, price, src, promo, data }: ICardItem) {

    // const storeBasket = useStoreBasket()
    // const router = useRouter()

    // function handleClickButton() {
    //     if (textButton === 'Add to the cart') {
    //         storeBasket.add(data)
    //     }

    //     if (textButton === 'view similar') {
    //         router.push(`/articles/${data.category}`)
    //     }

    // }
    return (
        <section className={styles.wrapper_card}>
            {promo && <div className={styles.promo}>-{promo}%</div>}

            <div className={styles.containerImg}>
                <Image src={src} alt='' className={styles.image} />
            </div>
            <div className={styles.title}>
                <p className={styles.name}>{title}</p>
                <p className={styles.category}><span>*</span>{data.category}</p>
            </div>
            <p className={styles.price}>{price}.<span>00</span> $</p>
            <div className={styles.info}>
                <p className={styles.stock}>In stock</p>
                <p className={styles.delivery}>free delivery</p>
            </div>
        </section>
    )
}

export default CardItem


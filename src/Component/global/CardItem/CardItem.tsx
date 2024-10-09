'use client'

import React from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import { ICardItem } from './typeCardItem'
import { useRouter } from 'next/navigation'


function CardItem({ title, price, src, promo, data }: ICardItem) {

    const router = useRouter()

    function handleClick () {
        router.push(`/articles/${data.id}`)
    }

    return (
        <section className={styles.wrapper_card} onClick={handleClick}>
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


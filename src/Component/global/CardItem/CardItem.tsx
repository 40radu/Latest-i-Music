'use client'

import React from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import { ICardItem } from './typeCardItem'
import { useRouter } from 'next/navigation'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'


function CardItem({ title, price, src, promo, data }: ICardItem) {

    const router = useRouter()
    const storeBasket = useStoreBasket()
    const newPrice = storeBasket.getNewPrice(price , promo!)

    function handleClick() {
              router.push(`/articles/${data.id}`)
    }

    function addArticle(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        console.log(data)
        storeBasket.add(data)

    }

    return (
        <section className={styles.wrapper_card} onClick={handleClick} >
            {promo && <div className={styles.promo}>-{promo}%</div>}

            <div className={styles.containerImg}>
                <Image src={src} alt='' className={styles.image} />
                <button className={styles.addBtn} onClick={addArticle}>
                    <svg width="16" height="16" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 1V7ZM7 4H1Z" fill="#B68888" fillOpacity="0.25" />
                        <path d="M4 1V7M7 4H1" stroke="#E11D07" strokeWidth="1.1" strokeLinecap="square" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={styles.title}>
                <p className={styles.name}>{title}</p>
                <p className={styles.category}><span>*</span>{data.category}</p>
            </div>
            {promo != undefined ?
                <p className={styles.price}>
                    <span className={styles.new}>{newPrice} $</span>
                    <span className={styles.older}>{price} $</span>
                </p>
                :
                <p className={styles.price}>{price} $</p>
            }
            <div className={styles.info}>
                <p className={styles.stock}>In stock</p>
                <p className={styles.delivery}>free delivery</p>
            </div>


        </section>
    )
}

export default CardItem


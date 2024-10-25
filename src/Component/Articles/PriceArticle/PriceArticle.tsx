'use client'

import React from 'react'
import styles from './_priceArticle.module.scss'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'

type Props = {
    price: number,
    promo: number | undefined,
}

function PriceArticle({ price, promo }: Props) {
    const { getNewPrice } = useStoreBasket()
    const newPrice = getNewPrice(price , promo!)
    return (
        <>
            {promo ?
                <p className={styles.price}>
                    Price : <span className={styles.new}>{newPrice} $</span> <span className={styles.older}>{price} $</span>
                </p> :
                <p className={styles.price}>Price : <span className={styles.noPromo}>{price}.00 $</span></p>
            }
        </>
    )
}

export default PriceArticle
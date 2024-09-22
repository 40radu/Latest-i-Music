'use client'

import React, { useEffect } from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import TitleCard from '../TitleCard/TitleCard'
import { ICardItem } from './typeCardItem'
import Price from '../Price/Price'
import Button from '../Button/page'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'


function CardItem({ title , price , src , textButton , isPromo  , data }: ICardItem) {

    const storeBasket = useStoreBasket()

    function handleClickButton () {
    
        storeBasket.add(data)
    //  basket.add(data)        
    // localStorage.setItem('basket' , 'value of basket')

    }
    return (
        <section className={styles.wrapper_card}>
            {isPromo && <div className={styles.promo}>-20%</div>}
            <Image src={src} alt='' className={styles.image} />
            <div className={styles.info}>
                {/* <TitleCard value={title} /> */}
                <p className={styles.descri}>{title}</p>
                <p className={styles.in_stock}>In stock</p>
                <Price value={price} />
            </div>
            
            <Button className='addBasket' value={textButton != null ? textButton : 'Add to the cart'} onClick={handleClickButton}/>
        </section>
    )
}

export default CardItem


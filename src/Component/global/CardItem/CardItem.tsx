import React from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import TitleCard from '../TitleCard/TitleCard'
import { ICardItem } from './typeCardItem'
import Price from '../Price/Price'
import Button from '../Button/page'

import exoImg from '../../../../public/Image/Dashboard/item-bass.png'



function CardItem({ title, descri }: ICardItem) {
    return (
        <section className={styles.wrapper_card}>
            <Image src={exoImg} alt='' className={styles.image} />
            <div className={styles.info}>
                <TitleCard value={title} />
                <p className={styles.descri}>{descri}</p>
                <p className={styles.in_stock}>In stock</p>
            </div>
            <Price value='385' />
            <Button className='primary' value='Add to the cart' />
        </section>
    )
}

export default CardItem


import React from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import TitleCard from '../TitleCard/TitleCard'
import { ICardItem } from './typeCardItem'
import Price from '../Price/Price'
import Button from '../Button/page'

import exoImg from '../../../../public/Image/Dashboard/item-bass.png'


function CardItem({ src }: ICardItem) {
    return (
        <section className={styles.wrapper_card}>
            <Image src={exoImg} alt='' />
            <TitleCard value='bass guitar' />
            <Price value='385'/>
            <Button className='primary' value='Add to the cart'/>
        </section>
    )
}

export default CardItem
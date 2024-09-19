import React from 'react'
import styles from './_cardItem.module.scss'
import Image from 'next/image'
import TitleCard from '../TitleCard/TitleCard'
import { ICardItem } from './typeCardItem'
import Price from '../Price/Price'
import Button from '../Button/page'

import exoImg from '../../../../public/Image/Article/guitare_bass.png'



function CardItem({ title , price , src , textButton , isPromo , onClickButton}: ICardItem) {
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
            
            <Button className='addBasket' value={textButton != null ? textButton : 'Add to the cart'} onClick={onClickButton}/>
        </section>
    )
}

export default CardItem


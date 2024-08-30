import React from 'react'
import styles from './_cardAdv.module.scss'
import deliveryIc from '../../../Icons/delivery.svg'
import qualityIc from '../../../Icons/quality.svg'
import priceIc from '../../../Icons/price.svg'
import Image from 'next/image'

interface ICardAdvantage {
    title: "delivery" | "quality" | "price";
    descri: string
}
function CardAdvantage({ title, descri }: ICardAdvantage) {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper_top}>
                <h5>{title}</h5>
                {title === 'delivery' ? <Image src={deliveryIc} alt='' /> :
                    title === 'price' ? <Image src={priceIc} alt='' /> :
                        title === 'quality' ? <Image src={qualityIc} alt='' /> : ''}
            </div>
            <p className={styles.descri}>
                "{descri}"
            </p>
        </div>
    )
}

export default CardAdvantage
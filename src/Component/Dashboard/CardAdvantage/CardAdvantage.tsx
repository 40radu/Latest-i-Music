import React from 'react'
import styles from './_cardAdv.module.scss'
import deliveryIc from '../../../Icons/delivery.svg'
import qualityIc from '../../../Icons/quality.svg'
import priceIc from '../../../Icons/money.svg'
import Image from 'next/image'
import IconDeliveryCarCircle from '@/Component/Icons/IconDeliveryCarCircle'
import IconQuality from '@/Component/Icons/IconQuality'
import IconPrice from '@/Component/Icons/IconPrice'

interface ICardAdvantage {
    title: "delivery" | "quality" | "price";
    descri: string
}
function CardAdvantage({ title, descri }: ICardAdvantage) {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper_top}>
                <h5>{title}</h5>
                {title === 'delivery' ? <IconDeliveryCarCircle strokeColor='#E11D07' height='48' width='48'/>:
                    title === 'price' ? <IconPrice width='48' height='48' strokeColor='#E11D07'/> :
                        title === 'quality' ? <IconQuality height='48' width='48' strokeColor='#E11D07' />: ''}
            </div>
            <p className={styles.descri}>
                "{descri}"
            </p>
        </div>
    )
}

export default CardAdvantage
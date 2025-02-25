

import TitleCard from '@/Component/global/TitleCard/TitleCard'
import styles from './_card.module.scss'
import { ICardDash } from './typeCard'
import basseImg from '../../../../public/Image/Dashboard/card-basse.png'
import guitareImg from '../../../../public/Image/Dashboard/card-guitare.png'
import ukuleleImg from '../../../../public/Image/Dashboard/card-ukulele.png'
import Image from 'next/image'

function CardDash({ descri, type, title }: ICardDash) {
    return (
        <div className={styles.card_container}>
            {type === 'guitar' ? <Image src={guitareImg} alt={type} /> : ''}
            {type === 'bass guitar' ? <Image src={basseImg} alt={type} /> : ''}
            {type === 'ukulele' ? <Image src={ukuleleImg} alt={type} /> : ''}
            <TitleCard value={title} />
            <p className={styles.descri}>
                {descri}
            </p>
        </div>
    )
}

export default CardDash
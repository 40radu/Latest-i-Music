"use client"

import TitleCard from '@/Component/global/TitleCard/TitleCard'
import React, { useEffect, useState } from 'react'
import styles from './_card.module.scss'
import { ICardDash } from './typeCard'
import basseImg from '../../../../public/Image/Dashboard/card-basse.png'
import guitareImg from '../../../../public/Image/Dashboard/card-guitare.png'
import ukuleleImg from '../../../../public/Image/Dashboard/card-ukulele.png'
import Image, { StaticImageData } from 'next/image'
import Button from '@/Component/global/Button/page'


function CardDash({ descri , type , title} : ICardDash) {
    const [src , setSrc] =  useState<StaticImageData | null >() 

    useEffect(()=>{
        if(type === 'bass guitar'){
            setSrc( basseImg)
        }

        if(type === 'guitar'){
            setSrc (guitareImg)
        }

        if(type === 'ukulele'){
            setSrc( ukuleleImg)
        }
    },[type])
    return (
        <div className={styles.card_container}>
            {src && <Image src={src} alt=''/>}
            <TitleCard value={title} />
            <p className={styles.descri}>
                {descri}
            </p>

            <Button className='secondary' value='Discover'/>
        </div>
    )
}

export default CardDash
import React from 'react'
import styles from './_titleCard.module.scss'
import { ITitleCard } from './TypeTitleCard'


function TitleCard({ value }: ITitleCard) {
    return (
        <h3 className={styles.title}>
            {value}
        </h3>
    )
}
export default TitleCard
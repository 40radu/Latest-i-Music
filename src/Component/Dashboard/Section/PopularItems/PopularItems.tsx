import React from 'react'
import styles from './_popularItems.module.scss'
import Title from '@/Component/global/Title/Title'
import CardItem from '@/Component/global/CardItem/CardItem'

function PopularItems() {
    return (
        <section className={styles.popular}>
            <Title value='popular articles' />
            <ul className={styles.wrapperItems}>
                <li>
                    <CardItem src='' />
                </li>
                <li>
                    <CardItem src='' />
                </li>
                <li>
                    <CardItem src='' />
                </li>
                <li>
                    <CardItem src='' />
                </li>
                <li>
                    <CardItem src='' />
                </li>
                <li>
                    <CardItem src='' />
                </li>
            </ul>
        </section>
    )
}

export default PopularItems
import Title from '@/Component/global/Title/Title'
import React from 'react'
import CardAdvantage from '../../CardAdvantage/CardAdvantage'
import styles from './_why.module.scss'


function Why() {
    return (
        <section className={styles.wrapperWhy}>
            <Title value='why us ?' />

            <ul >
                <li>
                    <CardAdvantage title='delivery' descri='We work with several logistics partners such as DPD, and delivery will take place within 4 working days of your order date. ' />
                </li>

                <li>
                    <CardAdvantage title='quality' descri='We offer you the best articles and all brands because we work with all departments in the world.' />
                </li>

                <li>
                    <CardAdvantage title='price' descri='We have decided to set the average prices higher than all the other sellers so that everyone can have at least one.' />
                </li>
            </ul>
        </section>
    )
}

export default Why
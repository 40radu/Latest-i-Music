import Title from '@/Component/global/Title/Title'
import React from 'react'
import styles from './_faq.module.scss'
import FaqItem from '@/Component/specifies/FaqItem/FaqItem'

function Faq() {
    return (
        <section className={styles.faqSection}>
            <Title value='faq' />
            <ul>
                <li><FaqItem question='Is delivery free of charge?' response='Delivery is free if you make a purchase over 950 £.' /></li>
                <li><FaqItem question='What methods of payment are accepted ?' response='We accept MasterCard, Paypal and Carte Bleue.' /></li>
                <li><FaqItem question='Can we pick up our parcels at the relay point ?' response='You can pick up your parcel at home or at a relay point of your choice.' /></li>
                <li><FaqItem question='Delivery time ?' response='Delivery takes 2-3 working days from the date of order.' /></li>
            </ul>
        </section>
    )
}

export default Faq
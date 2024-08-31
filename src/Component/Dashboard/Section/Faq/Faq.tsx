import Title from '@/Component/global/Title/Title'
import React from 'react'
import styles from './_faq.module.scss'
import FaqItem from '@/Component/specifies/FaqItem/FaqItem'

function Faq() {
    return (
        <section className={styles.faqSection}>
            <Title value='faq' />
            <ul>
                <li><FaqItem question='La livraison est elle gratuite ?' response='La livraison est gratuite si vous faites un achat plus de 950 £.' /></li>
                <li><FaqItem question='Quels sont les moyens de paiement accéptés ?' response='La livraison est gratuite si vous faites un achat plus de 950 £.' /></li>
                <li><FaqItem question='La livraison est elle gratuite ?' response='La livraison est gratuite si vous faites un achat plus de 950 £.' /></li>
                <li><FaqItem question='La livraison est elle gratuite ?' response='La livraison est gratuite si vous faites un achat plus de 950 £.' /></li>
            </ul>
        </section>
    )
}

export default Faq
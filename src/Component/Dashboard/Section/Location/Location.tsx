import React from 'react'
import styles from './_location.module.scss'
import Title from '@/Component/global/Title/Title'
import DetailsCard from '@/Component/Footer/DetailsCard/DetailsCard'
function Location() {
    return (
        <section className={styles.locationWrapper}>
            <div className={styles.container}>
                <Title value='find us' />
                <div className={styles.wrapperInfo}>
                    <DetailsCard descriSecond='rue 265 750' descriFirst='Avenue de la prairie' title='location' src='location' />
                    <DetailsCard descriSecond='rue 265 750' descriFirst='Avenue de la prairie' title='phone' src='phone' />
                </div>
            </div>
        </section>
    )
}

export default Location
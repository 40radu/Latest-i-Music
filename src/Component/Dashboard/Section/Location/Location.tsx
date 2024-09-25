import React from 'react'
import styles from './_location.module.scss'
import Title from '@/Component/global/Title/Title'
import DetailsCard from '@/Component/Footer/DetailsCard/DetailsCard'
function Location() {
    return (
        <section className={styles.locationWrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Title value='find us' />
                </div>
                <div className={styles.wrapperInfo}>
                    <DetailsCard descriSecond='rue 265 750' descriFirst='Avenue de la prairie' title='location' src='location' />
                    <DetailsCard descriSecond='+209 584 707' descriFirst='+205 584 780' title='phone' src='phone' />
                </div>
            </div>
        </section>
    )
}

export default Location
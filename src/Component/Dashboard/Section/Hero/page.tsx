import React from 'react'
import styles from './_hero.module.scss'
import Button from '@/Component/global/Button/page'

function Hero() {
    return (
        <section className={styles.hero} >
            <h1>Hey !  would you like to buy a new guitar?</h1>
            <p className={styles.descri}>
                If you're looking for a musical instrument, if it's a stringed instrument, you've come to the right place!

            </p>
            <div className={styles.banner_button}>
                <Button className='primary' value='Get in touch' />
                <Button className='secondary' value='About us' />
            </div>
        </section>
    )
}

export default Hero
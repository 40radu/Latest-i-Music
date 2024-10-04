import React from 'react'
import styles from './_hero.module.scss'
import Button from '@/Component/global/Button/page'
import Link from 'next/link'

function Hero() {
    return (
        <section className={styles.hero} >
            <h1>Hey !  would you like to buy a new guitar ?</h1>
            <p className={styles.descri}>
                If you're looking for a musical instrument, if it's a stringed instrument, you've come to the right place!

            </p>
            <div className={styles.banner_button}>
                <Link href='/articles'>
                    <Button className='primary' value="let's discover"/>
                </Link>
                <Link href='#history'>
                    <Button value='About us' className='secondary' />
                </Link>
            </div>
        </section>
    )
}

export default Hero
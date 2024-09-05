import React from 'react'
import styles from './_history.module.scss'
import Title from '@/Component/global/Title/Title'
import Button from '@/Component/global/Button/page'
import Image from 'next/image'
import imageHistory from '../../../../../public/Image/Dashboard/history.png'

function History() {
    return (
        <section className={styles.history}>
            <Title value='our history' />
            <div className={styles.wrapper}>
                <div className={styles.text_zone}>
                    <h4>
                        Why sell guitars?
                    </h4>
                    <p className={styles.descri}>
                        We're passionate about music, and in particular about
                        those who use guitars for more sound. As a result, we want
                        to share our love of guitars with everyone. So we created our
                        agency to sell guitars, and it's within everyone's reach.
                    </p>
                    <Button className='primary' value='About us' />
                </div>

                <Image src={imageHistory} alt='' className={styles.image}/>
            </div>
        </section>
    )
}

export default History
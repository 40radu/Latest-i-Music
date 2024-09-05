import React from 'react'
import styles from './_copyright.module.scss'
import Image from 'next/image'
import copyrightIc from '../../../Icons/Copyright/copyright.svg'


function Copyright() {
    return (
        <section className={styles.copyright}>
            <Image src={copyrightIc} alt='copyright' />
            <p>Copyright 2024</p>
        </section>
    )
}

export default Copyright
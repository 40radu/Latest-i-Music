import React from 'react'
import styles from './_copyright.module.scss'
import Image from 'next/image'
import copyrightIc from '../../../Icons/Copyright/copyright.svg'
import IconCopyright from '@/Component/Icons/IconCopyright'


function Copyright() {
    return (
        <section className={styles.copyright}>
            <IconCopyright width='20' height='20' strokeColor='white' fillColorPath='white'/>
            <p>Copyright 2024</p>
        </section>
    )
}

export default Copyright
"use client"

import React, { useEffect } from 'react'
import styles from './_navLink.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'

function NavArticle() {

    const pathname = usePathname()

    return (

        <div className={styles.container} >
            <ul className={styles.wrapperLinks}>

                <Link href="/articles/all_items" className={`${pathname === '/articles/all_items' ? styles.active_link : styles.link}`}>All</Link>
                <Link href="/articles/bass" className={`${pathname === '/articles/bass' ? styles.active_link : styles.link}`}>Bass</Link>
                <Link href="/articles/electric" className={`${pathname === '/articles/electric' ? styles.active_link : styles.link}`}>Electrique</Link>
                <Link href="/articles/ukulele" className={`${pathname === '/articles/ukulele' ? styles.active_link : styles.link}`}>ukulele</Link>
                <Link href="/articles/acoustic" className={`${pathname === '/articles/acoustic' ? styles.active_link : styles.link}`}>acoustique</Link>
                <Link href="/articles/electro-acoustic" className={`${pathname === '/articles/electro-acoustic' ? styles.active_link : styles.link}`}>electro-acoustique</Link>
                <Link href="/articles/classic" className={`${pathname === '/articles/classic' ? styles.active_link : styles.link}`}>classic</Link>

            </ul>
        </div>
    )
}

export default NavArticle
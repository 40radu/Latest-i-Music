"use client"

import React from 'react'
import styles from './_navLink.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavArticle() {

    const pathname = usePathname()

    return (

        <div className={styles.container}>
            <ul className={styles.wrapperLinks}>

                <Link href="/articles/all_items" className={`${pathname === '/articles/all_items' ? styles.active_link : styles.link}`}>All</Link>
                <Link href="/articles/bass" className={`${pathname === '/articles/bass' ? styles.active_link : styles.link}`}>Bass</Link>
                <Link href="#" className={`${pathname === '/articles/electric' ? styles.active_link : styles.link}`}>Electrique</Link>
                <Link href="#" className={`${pathname === '/articles/ukulele' ? styles.active_link : styles.link}`}>ukulele</Link>
                <Link href="#" className={`${pathname === '/articles/acoustique' ? styles.active_link : styles.link}`}>acoustique</Link>
                <Link href="#" className={`${pathname === '/articles/electro-acoustique' ? styles.active_link : styles.link}`}>electro-acoustique</Link>

            </ul>
        </div>
    )
}

export default NavArticle
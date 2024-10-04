'use client'

import Link from 'next/link'
import React from 'react'
import { INavLink } from './typeNavLink'
import styles from './_navLink.module.scss'
import { usePathname } from 'next/navigation'

function Navlink({ href, value }: INavLink) {

    const pathname  =  usePathname()
    
    return (
        <Link href={href} className={styles.link}>
            <p>{value}</p>
        </Link>
    )
}

export default Navlink

{/* <Link href="/articles/all_items" className={`${pathname === '/articles/all_items' ? styles.active_link : styles.link}`}>All</Link> */}

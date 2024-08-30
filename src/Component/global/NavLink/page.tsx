import Link from 'next/link'
import React from 'react'
import { INavLink } from './typeNavLink'
import styles from './_navLink.module.scss'

function Navlink({ href, value }: INavLink) {
    return (
        <Link href={href} className={styles.link}>
            <p>{value}</p>
        </Link>
    )
}

export default Navlink
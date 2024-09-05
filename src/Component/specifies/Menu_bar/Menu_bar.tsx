'use client'

import React, { useState } from 'react'
import styles from './_menu_bar.module.scss'
import Navlink from '@/Component/global/NavLink/page'
import Image from 'next/image'
import menu_barIc from '../../../Icons/menu_bar.svg'
import Link from 'next/link'

function Menu_bar() {
    const [showMenu, setShowMenu] = useState(false)

    function handleClick() {
        const body: HTMLBodyElement | null = document.querySelector('body');

        if (showMenu === false) {
            if (body) {
                body.style.overflow = 'hidden'
            }
        }

        if (showMenu === true) {
            if (body) {
                body.style.overflow = 'auto'
            }
        }
        setShowMenu(!showMenu)

    }
    return (

        <div className={styles.menu_bar}>
            <Image src={menu_barIc} alt='menu' className={styles.image} onClick={handleClick} />
            {showMenu &&
                <ul>
                    <Link href="/" onClick={handleClick}>home</Link>
                    <Link href="/articles" onClick={handleClick}>articles</Link>
                    <Link href="/contact" onClick={handleClick}>contact</Link>
                </ul>}
        </div>

    )
}

export default Menu_bar
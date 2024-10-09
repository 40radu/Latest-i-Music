'use client'

import React, { useState } from 'react'
import styles from './_menu_bar.module.scss'
import Image from 'next/image'
import menu_barIc from '../../../Icons/menu_bar.svg'
import Link from 'next/link'
import { useStoreStateNav } from '@/Service/HandleMenuBarBtnSearch/stateMenuSearch'

function Menu_bar() {
    const stateShowMenu = useStoreStateNav()
    const showMenu = stateShowMenu.menuBar

    function handleClick() {
        
        if(showMenu === false) {
            stateShowMenu.seeMenuBar()
        } else {
            stateShowMenu.hide()
        }

    }

    function hideMenu () {
        stateShowMenu.hide()
        
    }
    return (

        <div className={styles.menu_bar}>
            <Image src={menu_barIc} alt='menu' className={styles.image} onClick={handleClick} />
            {showMenu &&
                <ul id='linksNavigation'>
                    <Link href="/" onClick={hideMenu}>home</Link>
                    <Link href="/articles" onClick={hideMenu}>articles</Link>
                    <Link href="/contact" onClick={hideMenu}>contact</Link>
                </ul>}
        </div>

    )
}

export default Menu_bar
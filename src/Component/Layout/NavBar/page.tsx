'use client'

import React, { useEffect } from 'react'
import styles from './_nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logomobile from '../../../Icons/Logo/logo_mobile.svg'
import logoIc from '../../../Icons/Logo/logo.svg'
import SearchInput from '@/Component/SearchInput/page'
import Navlink from '@/Component/global/NavLink/page'
import Shopping from '@/Component/specifies/Shopping/page'
import SearchZone from '@/Component/specifies/SearchZone/SearchZone'
import Menu_bar from '@/Component/specifies/Menu_bar/Menu_bar'
import { useStoreStateNav } from '@/Service/HandleMenuBarBtnSearch/stateMenuSearch'
import { usePathname } from 'next/navigation'

function NavBar() {

    const stateMaskBody = useStoreStateNav()

    const showMaskBodyMenuBar= stateMaskBody.menuBar
    const showMaskBodyBasket= stateMaskBody.basket

    const pathname = usePathname()

    function hideMenuBar() {
        stateMaskBody.hide()
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            stateMaskBody.hide()
        })
    }, [])

    return (
        <section className={styles.container_nav}>
            {showMaskBodyMenuBar && <div onClick={hideMenuBar} className={styles.mask_body_nav} id='mask_body_nav'></div>}
            {showMaskBodyBasket && <div onClick={hideMenuBar} className={styles.mask_body_nav} id='mask_body_nav'></div>}

            <nav className={styles.navbar}>
                <Link href='/'>
                    <Image src={logoIc} alt='logo' className={styles.logo_first} />
                    <Image src={logomobile} alt='logo' className={styles.logo_mobile} />
                </Link>

                <ul className={styles.navLinks}>
                    {/* <Navlink href='/' value='home' />
                    <Navlink href='/articles/all_items' value='articles' />
                    <Navlink href='/contact' value='contact' /> */}

                    <Link href='/'  className={`${pathname === '/' ? styles.active_link : styles.link}`}>home</Link>
                    <Link href='/articles/all_items' className={`${pathname.includes('/articles/') ? styles.active_link : styles.link}`}>articles</Link>
                    <Link href='/contact'  className={`${pathname === '/contact' ? styles.active_link : styles.link}`}>contact</Link>
                    <SearchZone />
                    <Shopping />
                </ul >

                <ul className={styles.menu_bar}>
                    <SearchZone />
                    <Shopping />
                    <Menu_bar />

                </ul>

            </nav>

        </section>

    )
}

export default NavBar
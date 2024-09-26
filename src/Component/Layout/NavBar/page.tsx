'use client'

import React from 'react'
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

function NavBar() {
    return (
        <section className={styles.container_nav}>
            <div className={styles.mask_body_nav} id='mask_body_nav'></div>

            <nav className={styles.navbar}>
                <Link href='/'>
                    <Image src={logoIc} alt='logo'  className={styles.logo_first}/>
                    <Image src={logomobile} alt='logo' className={styles.logo_mobile}/> 
                </Link>

                <ul className={styles.navLinks}>
                    <Navlink href='/' value='home' />
                    <Navlink href='/articles/all_items' value='articles' />
                    <Navlink href='/contact' value='contact' />
                    <SearchZone />
                    <Shopping />
                </ul >

                <ul className={styles.menu_bar}>
                    <SearchZone />
                    <Shopping />
                    <Menu_bar/>
                </ul>

            </nav>

        </section>

    )
}

export default NavBar
import React from 'react'
import styles from './_nav.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logoIc from '../../../../public/Image/Logo/logo.png'
import SearchInput from '@/Component/SearchInput/page'
import Navlink from '@/Component/global/NavLink/page'
import Shopping from '@/Component/specifies/Shopping/page'

function NavBar() {
    return (
   
            <nav className={styles.navbar}>
                <Link href='/'>
                    <Image src={logoIc} alt='logo' />
                </Link>

                <SearchInput />

                <ul className={styles.navLinks}>
                    <Navlink href='/' value='home' />
                    <Navlink href='/articles' value='articles' />
                    <Navlink href='/contact' value='contact' />
                    <Shopping />
                </ul>
            </nav>

    )
}

export default NavBar
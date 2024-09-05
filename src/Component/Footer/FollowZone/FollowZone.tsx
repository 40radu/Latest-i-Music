
import styles from './_followZone.module.scss'
import Image from 'next/image'
import React from 'react'
import logo_mobile from '../../../Icons/Logo/logo_mobile.svg'
import logo from '../../../Icons/Logo/logo.svg'
import instaIc from '../../../Icons/SocialMedia/instagram.svg'
import linkedin from '../../../Icons/SocialMedia/linkedin.svg'
import facebookIc from '../../../Icons/SocialMedia/facebook.svg'
function FollowZone() {
    return (
        <section className={styles.followZone}>
             <Image src={logo} alt='logo' />
            <p className={styles.descri}>
                “Don't hesitate to follow us for more news at any time!”
            </p>
            <div className={styles.container_logo}>
                <Image src={linkedin} alt='logo linkedin'/>
                <Image src={instaIc} alt='logo insta'/>
                <Image src={facebookIc} alt='logo facebook'/>
            </div>
        </section>
    )
}

export default FollowZone
import React from 'react'
import styles from './_footer.module.scss'
import Faq from '@/Component/Dashboard/Section/Faq/Faq'
import Location from '@/Component/Dashboard/Section/Location/Location'
import FollowZone from '@/Component/Footer/FollowZone/FollowZone'
import FooterLink from '@/Component/Footer/FooterLink/FooterLink'
import Copyright from '@/Component/Footer/Copyright/Copyright'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Location />
      <div className={styles.latest}>
        <FollowZone />
        <FooterLink
          link1='electric guitar' href1='/articles/electric'
          title='Articles'
          link2='bass guitar' href2='/articles/bass'
          link4='electro-acoustique guitar' href4='/articles/electro-acoustic'
          link3='ukulele' href3='/articles/ukulele' />
        <FooterLink
          link1='acoustic guitar' href1='/articles/acoustic'
          title='Articles' link2='classic guitar' href2='/articles/classic' />
        <FooterLink
          link1='Terms of Service' href1=''
          title='others'
          link2='Privacy Policy' href2='' />
      </div>

      <Copyright />
    </footer>
  )
}

export default Footer

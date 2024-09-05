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
      <Location/>
      <div className={styles.latest}>
        <FollowZone/>
        <FooterLink link1='electric guitar' title='Articles' link2='bass guitar' link4='electro-acoustique guitar' link3='ukulele'/>
        <FooterLink link1='electric guitar' title='Articles' link2='bass guitar'/>
        <FooterLink link1='Terms of Service' title='others' link2='Privacy Policy'/>
      </div>

      <Copyright/>
    </footer>
  )
} 

export default Footer

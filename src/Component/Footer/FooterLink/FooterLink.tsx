import React from 'react'
import styles from './_footerLink.module.scss'

interface IFooterLink {
    title: string;
    link1: string;
    link2: string;
    link3?: string;
    link4?: string;
}

function FooterLink({ title, link1, link2, link3, link4 }: IFooterLink) {
    return (
        <div className={styles.footerLink}>
            <h5>{title}</h5>
            <ul className={styles.containerLinks}>
                <a href="#">   <li className={styles.link}> {link1}</li></a>
                <a href="#"> <li className={styles.link}> {link2}</li></a>
                <a href="#"> <li className={styles.link}> {link3}</li></a>
                <a href="#">  <li className={styles.link}> {link4}</li></a>
            </ul>
        </div>
    )
}

export default FooterLink
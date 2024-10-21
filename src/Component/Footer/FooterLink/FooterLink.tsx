import React from 'react'
import styles from './_footerLink.module.scss'

interface IFooterLink {
    title: string;
    link1: string;
    link2: string;
    link3?: string;
    link4?: string;
    href1: string;
    href2: string;
    href3?: string;
    href4?: string;
}

function FooterLink({ title, link1, href1, link2, href2, link3, href3, link4, href4 }: IFooterLink) {
    return (
        <div className={styles.footerLink} >
            <h5>{title}</h5>
            <ul className={styles.containerLinks}>
                <a href={href1}>   <li className={styles.link}> {link1}</li></a>
                <a href={href2}> <li className={styles.link}> {link2}</li></a>

                {link3 && <a href={href3}> <li className={styles.link}> {link3}</li></a>}
                {link4 && <a href={href4}>  <li className={styles.link}> {link4}</li></a>}
            </ul>
        </div>
    )
}

export default FooterLink
import React from 'react'
import styles from './_details.module.scss'
import IconLocation from '@/Component/Icons/IconLocation';
import IconPhone from '@/Component/Icons/IconPhone';

interface IDetails {
    src : "location" | "phone";
    descriFirst : string;
    descriSecond : string;
    title : "location" | "phone"

}

function DetailsCard({src , descriFirst ,descriSecond, title} : IDetails) {
  return (
    <div className={styles.details_card}>
        {
            src === 'location' ? <IconLocation width='32' height='29' fillColorPath='white'/>:""
        }
        {
            src === 'phone' ? <IconPhone width='29' height='29' fillColorPath='white'/> :""
        }
        <div className={styles.text_zone}>
            <h6>{title}</h6>
            <p className={styles.descri}>{descriFirst}</p>
            <p className={styles.descri}>{descriSecond}</p>
        </div>
    </div>
  )
}

export default DetailsCard
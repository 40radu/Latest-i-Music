import React from 'react'
import styles from './_details.module.scss'
import locationIc from '../../../Icons/location.svg'
import phoneIc from '../../../Icons/call.svg'
import Image from 'next/image';

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
            src === 'location' ? <Image src={locationIc} alt='icon location' className={styles.image}/> :""
        }
        {
            src === 'phone' ? <Image src={phoneIc} alt='icon phone' className={styles.image}/> :""
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
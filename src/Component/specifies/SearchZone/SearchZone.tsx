import Image from 'next/image'
import React from 'react'
import searchLogo from '../../../Icons/search.svg'
import styles from './_searchZone.module.scss'

function SearchZone() {
    return (
        <div className={styles.containerImg}>
            <Image src={searchLogo} alt='search' className={styles.image} />
        </div>
    )
}

export default SearchZone
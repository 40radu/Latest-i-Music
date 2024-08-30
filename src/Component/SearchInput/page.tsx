import React from 'react'
import styles from './_search.module.scss'
import searchIc from '../../Icons/search.svg'
import Image from 'next/image'

function SearchInput() {
  return (
    <section className={styles.banner_search}>
        <Image src={searchIc} alt='logo search'/>
        <input className={styles.input} type="search" placeholder='ex : electrique, basse, ...'/>
    </section>
  )
}

export default SearchInput
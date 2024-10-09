'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import shoppingIC from '../../../Icons/shopping.svg'
import styles from './_shopping.module.scss'
import BodyBasket from './BodyBasket/BodyBasket'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'
import { useStoreStateNav } from '@/Service/HandleMenuBarBtnSearch/stateMenuSearch'

function Shopping() {

  const storeBasket = useStoreBasket()
  const numberArticles = storeBasket.getNumberProduct()

  const storeState = useStoreStateNav()
  const showBasket = storeState.basket

  function handleClick() {
    if (showBasket === false) {
      storeState.seeBasket()
    } else {
      storeState.hide()
    }

  }

  useEffect(() => {
    storeBasket.loadData()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.nav_zone} onClick={handleClick}>
        <Image src={shoppingIC} alt='shopping icon' />
        <p className={styles.number}>{numberArticles}</p>
      </div>

      {showBasket && <BodyBasket closeBasket={handleClick} />}

    </div>
  )
}

export default Shopping
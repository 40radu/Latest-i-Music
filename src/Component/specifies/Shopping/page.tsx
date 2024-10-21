'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import shoppingIC from '../../../Icons/shopping.svg'
import styles from './_shopping.module.scss'
import BodyBasket from './BodyBasket/BodyBasket'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'
import { useStoreStateNav } from '@/Service/HandleMenuBarBtnSearch/stateMenuSearch'
import PromptPayment from './ResponsePayment/ResponsePayment'
import gsap from 'gsap'

function Shopping() {

  const storeBasket = useStoreBasket()
  const numberArticles = storeBasket.getNumberProduct()

  const storeState = useStoreStateNav()
  const [showBasket, setShowBasket] = useState<boolean>(false)

  const shopNavRef = useRef<HTMLDivElement>(null)

  const [seePaymentConfirm, setSeePaymentConfirm] = useState<boolean>(false)


  function seeBasket() {

    storeState.hide()
    const body = document.querySelector('body') as HTMLBodyElement

    if (showBasket === false) {
      if (body) {
        body.style.overflow = 'hidden'
      }
      setShowBasket(true)
    } else {
      setShowBasket(false)
      if (body) {
        body.style.overflow = 'initial'
      }
    }
  }

  function handleMouseEnter() {
    gsap.to(shopNavRef.current, {
      scale: 1.12,
      duration: 0.25,
      ease: 'sine',
    })
  }

  function handleMouseLeave() {
    gsap.to(shopNavRef.current, {
      scale: 1,
      duration: 0.5,
      ease: 'elastic',
      delay: 0.1
    })
  }

  function hidePaymentConfirm() {
    setSeePaymentConfirm(false)
  }

  function viewPaymentConfirm() {
    setSeePaymentConfirm(true)
  }

  useEffect(() => {
    storeBasket.loadData()

    if (numberArticles != 0) {
      gsap.to(shopNavRef.current, {
        rotateX: '90deg',
        duration: 0.25,
        delay: 0,
        ease: 'expo',
        onComplete: () => {
          gsap.to(shopNavRef.current, {
            rotateX: 0,
            duration: 0.5,
            ease: 'bounce'
          })
        }
      })
    }
  }, [numberArticles])

  return (
    <div className={styles.container} >
      <div className={styles.nav_zone} onClick={seeBasket} ref={shopNavRef} onTouchEnd={handleMouseLeave} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter} >
        <Image src={shoppingIC} alt='shopping icon' />
        <p className={styles.number}>{numberArticles}</p>
      </div>

      {showBasket && <BodyBasket closeBasket={seeBasket} viewPromptPayment={viewPaymentConfirm} />}

      {showBasket && <div onClick={seeBasket} className={styles.mask_body_nav} id='mask_body_nav'></div>}

      {seePaymentConfirm && <PromptPayment viewStatus={seePaymentConfirm} hidePromptPayment={hidePaymentConfirm} />}

    </div>
  )
}

export default Shopping
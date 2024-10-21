'use client'

import React, { useEffect, useRef } from 'react'
import styles from './_responsePayment.module.scss'
import removeIcn from '../../../../Icons/close.svg'
import Image from 'next/image'
import gsap from 'gsap'

type Props = {
  viewStatus: boolean,
  hidePromptPayment: () => void
}

function PromptPayment({ viewStatus, hidePromptPayment }: Props) {

  const promptPayment = useRef(null)

  useEffect(() => {
    gsap.to(promptPayment.current, {
      duration: 0.5,
      left: '50%',
      delay: 0.25,
      opacity: 1,
      ease: 'expo'
    })

    setTimeout(() => {
      if (viewStatus == true) {
        hidePromptPayment()
      }
    }, 4500)
  }, [])
  return (
    <div id='promptPayment' className={styles.status} ref={promptPayment}>
      <p>Payment done ! <br />A confirmation email has been sent to you !</p>

      <Image src={removeIcn} alt='close' onClick={hidePromptPayment} />
    </div>
  )
}

export default PromptPayment
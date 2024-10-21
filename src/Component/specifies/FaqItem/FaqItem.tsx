"use client"

import React, { useRef, useState } from 'react'
import styles from './_faqItem.module.scss'
import gsap from 'gsap'

type TFaqItem = {
    question: string,
    response: string
}

function FaqItem({ question, response }: TFaqItem) {

    const responseRef = useRef<HTMLParagraphElement>(null)
    const [statusResponse , setStatusResponse] = useState<boolean>(false)

    function handleClick() {
        if (statusResponse == false) {
            gsap.to(responseRef.current, {
                height : 'fit-content',
                opacity : 1,
                padding : '10px 0',
                duration : 0.25,
                ease: 'power4'
            })
            setStatusResponse(!statusResponse)
        } else {
            gsap.to(responseRef.current, {
                height : '0',
                opacity : 0,
                padding : '0',
                duration : 0.25,
                ease: 'sine'
            })
            setStatusResponse(!statusResponse)
        }
            
    }
    return (
        <div className={styles.wrapper}>
            <p className={styles.question} onClick={handleClick}>{question}</p>
            <p className={styles.response} ref={responseRef}>{response}</p>
        </div>
    )
}

export default FaqItem
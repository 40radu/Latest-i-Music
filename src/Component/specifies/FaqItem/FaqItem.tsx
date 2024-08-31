"use client"

import React, { useState } from 'react'
import styles from './_faqItem.module.scss'

type TFaqItem = {
    question: string,
    response: string
}

function FaqItem({ question, response }: TFaqItem) {

    const [showResponse , setShowResponse] = useState(false)

    function handleClick() {
        setShowResponse(!showResponse)
    }
    return (
        <div className={styles.wrapper}>
            <p className={styles.question} onClick={handleClick}>{question}</p>
            {showResponse && <p className={styles.response}>{response}</p>}
        </div>
    )
}

export default FaqItem

'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import styles from './_responseForm.module.scss'
import removeIcn from '../../../Icons/close.svg'
import gsap from 'gsap'

interface IResponseForm {
    hideResponse: () => void
    status: boolean
}

function ResponseForm({ hideResponse, status }: IResponseForm) {

    const response = useRef(null)

    useEffect(() => {
        gsap.to(response.current, {
            duration: 1,
            opacity: 1,
            delay: 0.25,
            left: '50%',
            ease: 'expo'
        })

        setTimeout(() => {
            if (status == true) {
                hideResponse()
            }
        }, 4500)

    }, [])

    return (
        <div id='responseForm' className={styles.statusResponse} ref={response}>
            <p>Message successfully received</p>
            <Image src={removeIcn} alt='' onClick={hideResponse} />
        </div>
    )
}

export default ResponseForm
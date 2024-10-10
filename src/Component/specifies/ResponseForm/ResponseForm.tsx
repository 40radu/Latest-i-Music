
import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './_responseForm.module.scss'
import removeIcn from '../../../Icons/close.svg'
import gsap from 'gsap'

function ResponseForm() {

    const response = useRef(null)

    function hideResponse() {
        gsap.to(response.current , {
            opacity : 0, 
            duration : 0.5
        })
    }

    return (
        <div id='responseForm' className={styles.statusResponse} ref={response}>
            <p>Message successfully received</p>
            <Image src={removeIcn} alt='' onClick={hideResponse} />
        </div>
    )
}

export default ResponseForm
'use client'

import React from 'react'
import styles from './_paymentMethod.module.scss'
import iconPaypal from '../../../../Icons/paypal.svg'
import iconMasterCard from '../../../../Icons/masterCard.svg'
import Image from 'next/image'


type Props = {
    name: 'Paypal' | 'MasterCard'
}

function handleClick () {

    // TODO 
        // const labelPaypal = document.querySelectorAll(`.${styles.label}  #paypal`)
        // labelPaypal.forEach((element)=>{
        //         const inputElement = element as HTMLInputElement
        //         console.log(inputElement)
        //         inputElement.focus
        // })

        // // console.log(labelPaypal)
}

function PaymentMethod({ name }: Props) {
    return (
        <label className={styles.label} htmlFor={name == 'MasterCard' ? 'masterCard' : 'paypal'} onClick={handleClick}>
            <input id={name == 'MasterCard' ? 'masterCard' : 'paypal'} type="radio" name='payment' value='paypal' required />
            {name}
            {name == 'MasterCard' ? <Image src={iconMasterCard} alt='masterCard' /> : <Image src={iconPaypal} alt='paypal' />}
        </label>
    )
}

export default PaymentMethod
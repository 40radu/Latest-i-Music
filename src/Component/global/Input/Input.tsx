import React from 'react'
import styles from './_input.module.scss'
import Image from 'next/image'
import userIc from '../../../Icons/for input/user.svg'
import emailIc from '../../../Icons/for input/email.svg'

type TInput = {
    type: 'text' | 'email',
    icon: 'user' | 'email',
    placeholder : 'enter your name' | 'enter your email'
}

function Input({ type, icon , placeholder}: TInput) {
    return (
        <div className={styles.container_input}>
            {icon === 'email' ? <Image src={emailIc} alt='email' /> : ''}
            {icon === 'user' ? <Image src={userIc} alt='user' /> : ''}
            <input className={styles.input} type={type} required placeholder={placeholder} />
        </div>
    )
}

export default Input
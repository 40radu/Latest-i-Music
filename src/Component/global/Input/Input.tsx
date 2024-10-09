import React from 'react'
import styles from './_input.module.scss'
import Image from 'next/image'
import userIc from '../../../Icons/for input/user.svg'
import IconEmail from '@/Component/Icons/IconEmail'
import IconUser from '@/Component/Icons/IconUser'

type TInput = {
    type: 'text' | 'email',
    icon: 'user' | 'email',
    placeholder : 'enter your name' | 'enter your email',
    inputName : string
}

function Input({ type, icon , placeholder , inputName}: TInput) {
    return (
        <div className={styles.container_input}>
            {icon === 'email' ? <IconEmail width='30' height='30' fillPathColor='rgba(0, 0, 0, 0.40)'/> : ''}
            {icon === 'user' ? <IconUser width='30' height='30' fillPathColor='rgba(0, 0, 0, 0.40)'/>: ''}
            <input className={styles.input} type={type} required placeholder={placeholder} name={inputName}/>
        </div>
    )
}

export default Input
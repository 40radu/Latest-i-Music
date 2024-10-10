import React from 'react'
import styles from './_input.module.scss'
import Image from 'next/image'
import userIc from '../../../Icons/for input/user.svg'
import IconEmail from '@/Component/Icons/IconEmail'
import IconUser from '@/Component/Icons/IconUser'
import { Value } from 'sass'

type TInput = {
    type: 'text' | 'email',
    icon: 'user' | 'email',
    placeholder : 'enter your name' | 'enter your email',
    inputName : 'name' | 'email', 
    onChange : (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void, 
    value : string
}

function Input({ type, icon , placeholder , inputName , onChange , value}: TInput) {
    return (
        <div className={styles.container_input}>
            {icon === 'email' ? <label htmlFor="emailInput"><IconEmail width='30' height='30' fillPathColor='rgba(0, 0, 0, 0.40)'/></label> : ''}
            {icon === 'user' ? <label htmlFor="userInput"><IconUser width='30' height='30' fillPathColor='rgba(0, 0, 0, 0.40)'/></label>: ''}
            <input 
            id={type == 'email' ? 'emailInput' : 'userInput'} 
            onChange={onChange} 
            className={styles.input} 
            type={type} 
            required 
            placeholder={placeholder} 
            name={inputName}
            value={value}/>

        </div>
    )
}

export default Input
'use client'

import React from 'react'
import styles from './_button.module.scss'
import { IButton } from './TypeButton'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'

function Button({ className, value, data, type = 'button', isDisable = false }: IButton) {
    const store = useStoreBasket()

    function handleClick() {

        if (value === 'Add to the cart') {
            store.add(data!)
        }
    }
    return (
        <button type={type} className={styles[className]} onClick={handleClick} disabled={isDisable}>
            <p>
                <span>{value}</span>
                <span>{value}</span>
            </p>
        </button>
    )
}

export default Button
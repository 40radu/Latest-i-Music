'use client'

import React from 'react'
import styles from './_button.module.scss'
import { IButton } from './TypeButton'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'

function Button({ className, value, data }: IButton) {
    const store = useStoreBasket()

    function handleClick() {

        if (value === 'Add to the cart') {
            store.add(data!)
        }
    }
    return (
        <button className={styles[className]} onClick={handleClick}>
            {value}
        </button>
    )
}

export default Button
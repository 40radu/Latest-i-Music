import React from 'react'
import styles from './_button.module.scss'
import { IButton } from './TypeButton'

function Button({ className , value , onClick}: IButton) {
    return (
        <button className={styles[className]} onClick={onClick}>
            {value}
        </button>
    )
}

export default Button
import React from 'react'
import styles from './_button.module.scss'
import { IButton } from './TypeButton'

function Button({ className , value }: IButton) {
    return (
        <button className={styles[className]}>
            {value}
        </button>
    )
}

export default Button
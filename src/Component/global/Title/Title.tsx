import React from 'react'
import styles from './_title.module.scss'
import { ITitle } from './typeTitle'

function Title({ value } : ITitle) {
    return (
        <div className={styles.title_wrapper}>
            <h2>{value}</h2>
        </div>
    )
}

export default Title
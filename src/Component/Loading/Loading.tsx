'use client'

import React from 'react'
import { PulseLoader, RingLoader } from 'react-spinners'
import styles from './_loading.module.scss'

function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <PulseLoader
                    color="#E11D07"
                    margin={5}
                    size={10}
                />
            </div>
        </div>
    )
}

export default Loading

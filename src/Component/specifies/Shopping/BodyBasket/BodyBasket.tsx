import React from 'react'
import styles from './_bodyBasket.module.scss'
import Button from '@/Component/global/Button/page'

function BodyBasket() {
    return (
        <div className={styles.basket_body} id='basket_body'>
            <h2>Basket</h2>
            <ul className={styles.wrapper_articles}>
                <li className={styles.article}>artile 1</li>
                <li className={styles.article} >artile 1</li>
                <li className={styles.article}>artile 1</li>
            </ul>
            <p className={styles.total}>total : <span> 0$ </span></p>
            <Button className='primary' value='buy' />
        </div>
    )
}

export default BodyBasket
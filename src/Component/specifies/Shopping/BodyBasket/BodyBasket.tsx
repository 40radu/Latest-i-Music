import React from 'react'
import styles from './_bodyBasket.module.scss'
import Button from '@/Component/global/Button/page'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'

function BodyBasket() {
    const storeBasket = useStoreBasket()
    const totalPrice = storeBasket.getTotalPrice()
    return (
        <div className={styles.basket_body} id='basket_body'>
            <h2>Basket</h2>
            <ul className={styles.wrapper_articles}>
                <li className={styles.article}>artile 1</li>
                <li className={styles.article} >artile 1</li>
                <li className={styles.article}>artile 1</li>
            </ul>
            <p className={styles.total}>total : <span> {totalPrice} $ </span></p>
            <Button className='primary' value='buy' />
        </div>
    )
}

export default BodyBasket
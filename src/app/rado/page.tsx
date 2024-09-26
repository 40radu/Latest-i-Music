import React from 'react'
import srcs from '../../../public/Image/Article/acoustic.png'
import Image from 'next/image'
import styles from './_rado.module.scss'

function page() {
    return (
        <section className={styles.wrapper_card}>
            <div className={styles.promo}>-20%</div>
            <div className={styles.containerImg}>
                <Image src={srcs} alt='' className={styles.image} />
            </div>
            <div className={styles.title}>
                <p className={styles.name}>Yamaha CX40</p>
                <p className={styles.category}><span>*</span>acoustic</p>
            </div>
            <p className={styles.price}>250.<span>00</span> $</p>
            <div className={styles.info}>
                <p className={styles.stock}>In stock</p>
                <p className={styles.delivery}>free delivery</p>
            </div>


            {/* <Button className='addBasket' value={textButton} onClick={handleClickButton} /> */}
        </section>
    )
}

export default page
import React from 'react'
import styles from './_idArticle.module.scss'
import Button from '@/Component/global/Button/page'
import defaultImg from '../../../../public/Image/Article/acoustic.png'
import referenceIcn from '../../../Icons/reference.svg'
import shieldIcn from '../../../Icons/shield.svg'
import carIcn from '../../../Icons/car.svg'
import Image from 'next/image'



async function page() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/0a`, { cache: 'no-store' })
    const data = await res.json()
    const {id , price , name , category} = data[0] 
    console.log(id)

    return (
        <section className={styles.container}>
            <div className={styles.imgZone}>
                <div className={styles.wrapper_mainImg}>
                    <Image src={defaultImg} alt='' />
                </div>
                <ul className={styles.wrapper_othersImg}>
                    <li><Image src={defaultImg} alt='' /></li>
                    <li><Image src={defaultImg} alt='' /></li>
                    <li><Image src={defaultImg} alt='' /></li>
                </ul>
            </div>

            <div className={styles.descriZone}>
                <div className={styles.titleZone}>
                    <h5>{name}</h5>
                    <p className={styles.category}>({category})</p>
                </div>

                <p className={styles.price}>price : <span className={styles.number}>{price}.<span className={styles.lower}>00</span> $</span></p>

                <Button className='primary' value='Add to the cart' />

                <div className={styles.advantageZone}>
                    <div className={styles.wrapper}>
                        <Image src={shieldIcn} alt='' />
                        <p>
                            article warranty :<span> 3 years</span>
                        </p>
                    </div>
                    <div className={styles.wrapper}>
                        <Image src={carIcn} alt='' />
                        <p>
                            delivery :<span> free of charge</span>
                        </p>
                    </div>
                    <div className={styles.wrapper}>
                        <Image src={referenceIcn} alt='' />
                        <p>
                            article warranty :<span> 3a</span>
                        </p>
                    </div>

                </div>

                <p className={styles.descriItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est omnis dolorem voluptatum modi voluptates dolorum reiciendis, atque cum recusandae vel soluta? Praesentium eaque velit quisquam enim ipsa quidem vitae natus!</p>
            </div>


        </section>
    )
}

export default page
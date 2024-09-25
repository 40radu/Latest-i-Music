import React, { useState } from 'react'
import styles from './_bodyBasket.module.scss'
import Button from '@/Component/global/Button/page'
import { useStoreBasket } from '@/Service/HandleBasket/handleBasket'
import imageUkulele from '../../../../../public/Image/Article/ukulele.png'
import imageElectric from '../../../../../public/Image/Article/electric.png'
import imageElectroAcoustic from '../../../../../public/Image/Article/electro_acoustique.png'
import imageBass from '../../../../../public/Image/Article/guitare_bass.png'
import imageClassic from '../../../../../public/Image/Article/classic.png'
import imageAcoustic from '../../../../../public/Image/Article/acoustic.png'
import iconRemove from '../../../../Icons/remove.svg'
import Image from 'next/image'
import closeIcon from '../../../../Icons/close.svg'

interface IBodyBasket {
    closeBasket : ()=>void
}

function BodyBasket( {closeBasket} : IBodyBasket) {
    const storeBasket = useStoreBasket()
    const totalPrice = storeBasket.getTotalPrice()
    const articles = storeBasket.basket

    function handleDelete(idArticle: string) {

        const allPrompt = document.querySelectorAll(`.${styles.prompt_delete}`)

        allPrompt.forEach((element) => {
            const promptElement = element as HTMLDivElement
            promptElement.style.display = 'none'
        })

        storeBasket.remove(idArticle)

    }

    function viewPromptRemove(idArticle: string) {

        const allPrompt = document.querySelectorAll(`.${styles.prompt_delete}`)

        const currentPrompt = document.getElementById(idArticle) as HTMLDivElement

        allPrompt.forEach((element) => {
            const promptElement = element as HTMLDivElement
            promptElement.style.display = 'none'
        })

        currentPrompt.style.display = 'flex'

    }

    function hidePromptRemove(idArticle: string) {

        const prompt = document.getElementById(idArticle) as HTMLDivElement
        prompt.style.display = 'none'

    }

    function decrementQuantity (idArticle : string) {
        storeBasket.changeQuantity(idArticle , -1)
    }

    function incrementQuantity(idArticle : string) {
        storeBasket.changeQuantity(idArticle , 1)
    }

    return (

        <div className={styles.basket_body} id='basket_body' >

            <h2>Basket</h2>

            <button onClick={closeBasket} className={styles.btn_close}><Image src={closeIcon} alt=''/></button>

            <ul className={styles.wrapper_articles}>

                {articles.length > 0 ?

                    articles.map((element, index) => {

                        return (
                            <li className={styles.article} key={index}>

                                {element.category === 'ukulele' ? <Image src={imageUkulele} alt='' className={styles.image} /> : ''}
                                {element.category === 'acoustic' ? <Image src={imageAcoustic} alt='' className={styles.image} /> : ''}
                                {element.category === 'bass' ? <Image src={imageBass} alt='' className={styles.image} /> : ''}
                                {element.category === 'classic' ? <Image src={imageClassic} alt='' className={styles.image} /> : ''}
                                {element.category === 'electric' ? <Image src={imageElectric} alt='' className={styles.image} /> : ''}
                                {element.category === 'electroAcoustic' ? <Image src={imageElectroAcoustic} alt='' className={styles.image} /> : ''}


                                <div className={styles.descri_center}>
                                    <p><span className={styles.title}>name</span> : {element.name}</p>
                                    <div className={styles.wrapper_quantity}>
                                        <span className={styles.title}>quantity</span> :
                                        <button onClick={()=>{decrementQuantity(element.id)}}>-</button>
                                        {element.quantity}
                                        <button onClick={()=>{incrementQuantity(element.id)}}>+</button>
                                    </div>
                                    <p><span className={styles.title}>reference</span> : {element.id}</p>
                                </div>
                                <p className={styles.price}>{element.price} $</p>

                                <button onClick={() => { viewPromptRemove(element.id) }} className={styles.btn_remove}><Image src={iconRemove} alt='' title='remove' /></button>

                                <div id={element.id} className={styles.prompt_delete} >
                                    <p className={styles.question}>Remove article ?</p>

                                    <div className={styles.wrapper_buttons}>
                                        <button onClick={() => { handleDelete(element.id) }} className={styles.btn_confirm}>Confirm</button>
                                        <button onClick={() => { hidePromptRemove(element.id) }}>Cancel</button>
                                    </div>
                                </div>

                            </li>
                        )
                    }) :

                    <li className={styles.text_empty}>Empty basket</li>
                }

            </ul>

            <p className={styles.total}>total : <span> {totalPrice} $ </span></p>

            <Button className='primary' value='buy' />
        </div>
    )
}

export default BodyBasket
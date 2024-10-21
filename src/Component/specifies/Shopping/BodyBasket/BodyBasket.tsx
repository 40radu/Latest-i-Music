'use client'

import React, { useEffect, useRef, useState } from 'react'
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
import gsap from 'gsap'
import PromptPayment from '../ResponsePayment/ResponsePayment'
import PaymentMethod from '../PaymentMethod/PaymentMethod'

interface IBodyBasket {
    closeBasket: () => void,
    viewPromptPayment: () => void
}

function BodyBasket({ closeBasket, viewPromptPayment }: IBodyBasket) {

    const storeBasket = useStoreBasket()
    const totalPrice = storeBasket.getTotalPrice()
    const articles = storeBasket.basket
    const [isBtnDisable, setIsBtnDisable] = useState<boolean>(true)
    const paymentMethod = useRef(null)
    const listArticle = useRef(null)
    const btnsConfirmation = useRef(null)
    const [hideBtnBuy, setHideBtnBuy] = useState<boolean>(true)
    const [hideBtnValidate, sethideBtnValidate] = useState<boolean>(true)

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

        allPrompt.forEach((element) => {
            const promptElement = element as HTMLDivElement
            if (element.id == idArticle) {
                promptElement.style.display = 'flex'
            } else {
                promptElement.style.display = 'none'
            }
        })
    }

    function hidePromptRemove() {

        const allPrompt = document.querySelectorAll(`.${styles.prompt_delete}`)
        allPrompt.forEach((element) => {
            const promptElement = element as HTMLDivElement
            promptElement.style.display = 'none'
        })

    }

    function decrementQuantity(idArticle: string) {
        storeBasket.changeQuantity(idArticle, -1)
    }

    function incrementQuantity(idArticle: string) {
        storeBasket.changeQuantity(idArticle, 1)
    }

    function seePaymentMethod() {
        gsap.to(paymentMethod.current, {
            height: '175px',
            duration: 0.5,
            opacity: 1,
            pointerEvents: 'initial'

        })

        gsap.to(listArticle.current, {
            height: '0',
            opacity: 0,
            duration: 0.25,
        })

        setHideBtnBuy(false)
    }

    function seeBtnConfirmation() {

        sethideBtnValidate(false)

        gsap.to(btnsConfirmation.current, {
            duration: 0,
            height: '44px',
            width: 'fit-content',
            pointerEvents: 'initial'
        })

        gsap.to(btnsConfirmation.current, {
            opacity: 1,
            duration: 0.25,
            ease: 'circ',
            delay: 0.25
        })
    }

    function cancelPayement() {

        gsap.to(btnsConfirmation.current, {
            duration: 0.25,
            height: '0',
            width: '0',
            pointerEvents: 'none',
            opacity: 0
        })

        setHideBtnBuy(true)

        if (hideBtnValidate == false) {
            sethideBtnValidate(true)
        }

        gsap.to(paymentMethod.current, {
            height: '0',
            duration: 0.25,
            opacity: 0,
            pointerEvents: 'none'

        })

        gsap.to(listArticle.current, {
            height: '335px',
            duration: 0.25,
            opacity: 1,
            ease: 'expo'

        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        seeBtnConfirmation()
    }

    function confirmPayment() {
        viewPromptPayment()
        storeBasket.reset()
        cancelPayement()
    }

    useEffect(() => {
        if (articles.length > 0) {
            setIsBtnDisable(false)
        } else {
            setIsBtnDisable(true)
        }
    }, [articles.length])

    return (
        <>

            <div className={styles.basket_body} id='basket_body' >

                <h2>Basket</h2>

                <button onClick={closeBasket} className={styles.btn_close}><Image src={closeIcon} alt='' /></button>

                <ul className={styles.wrapper_articles} ref={listArticle}>

                    {articles.length > 0 ?

                        articles.map((element, index) => {

                            return (
                                <li className={styles.article} key={index}>

                                    {element.category === 'ukulele' ? <Image src={imageUkulele} alt='' className={styles.image} /> : ''}
                                    {element.category === 'acoustic' ? <Image src={imageAcoustic} alt='' className={styles.image} /> : ''}
                                    {element.category === 'bass' ? <Image src={imageBass} alt='' className={styles.image} /> : ''}
                                    {element.category === 'classic' ? <Image src={imageClassic} alt='' className={styles.image} /> : ''}
                                    {element.category === 'electric' ? <Image src={imageElectric} alt='' className={styles.image} /> : ''}
                                    {element.category === 'electro-acoustic' ? <Image src={imageElectroAcoustic} alt='' className={styles.image} /> : ''}


                                    <div className={styles.descri_center}>
                                        <p><span className={styles.title}>name</span> : {element.name}</p>
                                        <div className={styles.wrapper_quantity}>
                                            <span className={styles.title}>quantity</span> :
                                            <button onClick={() => { decrementQuantity(element.id) }}>-</button>
                                            {element.quantity}
                                            <button onClick={() => { incrementQuantity(element.id) }}>+</button>
                                        </div>
                                        <p><span className={styles.title}>reference</span> : {element.id}</p>
                                    </div>

                                    <p className={styles.price}>{element.price} $</p>

                                    <button onClick={() => { viewPromptRemove(element.id) }} className={styles.btn_remove}><Image src={iconRemove} alt='' title='remove' /></button>

                                    <div id={element.id} className={styles.prompt_delete} >
                                        <p className={styles.question}>Remove article ?</p>
                                        <div className={styles.wrapper_buttons}>
                                            <button onClick={() => { handleDelete(element.id) }} className={styles.btn_confirm}>Confirm</button>
                                            <button onClick={hidePromptRemove}>Cancel</button>
                                        </div>
                                    </div>

                                </li>
                            )
                        }) :

                        <li className={styles.text_empty}>Empty basket</li>
                    }

                </ul>

                <p className={styles.total}>total : <span> {totalPrice} $ </span></p>

                {
                    hideBtnBuy && <>
                        <div onClick={seePaymentMethod} >
                            <Button className='primary' value='buy' isDisable={isBtnDisable} />
                        </div>
                    </>
                }

                <form className={styles.paymentMethod} ref={paymentMethod} onSubmit={handleSubmit}>

                    <ul className={styles.list}>
                        <PaymentMethod name='MasterCard' />
                        <PaymentMethod name='Paypal' />
                    </ul>

                    <input type="number" placeholder='Enter 9 numbers card' required name='number-code' className={styles.inputNumber} />

                    <div className={styles.containerBtn}>
                        {
                            hideBtnValidate && <>
                                <button type='submit' className={styles.btn_validate}>validate</button>
                            </>
                        }
                        {/* <div className={styles.wrapperConfirmation} ref={btnsConfirmation} id='confirmation'> */}

                        <button type='button' onClick={confirmPayment} className={styles.btn_confirm} ref={btnsConfirmation}> Confirm
                        </button>

                        {/* </div> */}
                        <button type='button' onClick={cancelPayement}>cancel</button>
                    </div>

                </form>

            </div>

        </>

    )
}

export default BodyBasket
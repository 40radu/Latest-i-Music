'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import searchLogo from '../../../Icons/search.svg'
import styles from './_searchZone.module.scss'
import Link from 'next/link'

function SearchZone() {

    const [showSearch, setShowSearch] = useState(false)
    const data = [{
        categories: 'electric guitar ',
        link: 'electric'
    }, {
        categories: 'electro-acoustic guitar',
        link: 'electro'
    }, {
        categories: 'classical guitar',
        link: 'classic'
    }, {
        categories: 'acoustic guitar',
        link: 'acoustic'
    }, {
        categories: 'bass guitar',
        link: 'bass'
    }, {
        categories: 'ukulele',
        link: 'ukulele'
    }]

    const [valueInput, setValueInput] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValueInput(e.target.value)
    }

    function handleClick() {
        const body = document.querySelector('body')

        setShowSearch(!showSearch)
        if (body) {
            if (body.style.overflow === 'hidden') {
                body.style.overflow = 'auto'

            } else {
                body.style.overflow = 'hidden'
            }
        }
    }

    return (
        <div className={styles.containerImg}>
            <label htmlFor="search_input">
                <Image src={searchLogo} alt='search' className={styles.image} onClick={handleClick} />
            </label>
            {
                showSearch &&

                <div className={styles.wrapper_search}>

                    <div className={styles.label_input_search}>
                        <Image src={searchLogo} alt='search' className={styles.image} />
                        <input type="search" id='search_input' placeholder='ex: electrique, classique ...' value={valueInput} onChange={handleChange} />
                    </div>

                    <ul className={styles.wrapper_link}>
                        {valueInput && (
                            data.filter((element) => element.categories.toLowerCase().includes(valueInput.toLowerCase())).length > 0 ?
                                data.filter((element) => element.categories.toLowerCase().includes(valueInput.toLowerCase())).map((element , index) => {

                                    return (<Link key={index} href={`/articles/${element.link}`} onClick={handleClick}><p>{element.categories}</p></Link>)
                                }) :
                                <a ><p className={styles.not_exist}>Not exists</p></a>
                        )}
                    </ul>

                </div>

            }

            {
                showSearch && <div className={styles.mask_body} onClick={handleClick}></div>
            }
        </div>
    )
}

export default SearchZone
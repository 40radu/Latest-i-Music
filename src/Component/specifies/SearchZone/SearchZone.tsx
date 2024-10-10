'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import searchLogo from '../../../Icons/search.svg'
import styles from './_searchZone.module.scss'
import Link from 'next/link'
import { IAdd } from '@/Service/HandleBasket/handleBasket'
import { useStoreStateNav } from '@/Service/HandleMenuBarBtnSearch/stateMenuSearch'

function SearchZone() {

    const stateShowSearch = useStoreStateNav()

    const showSearch = stateShowSearch.search

    const [allData, setAllData] = useState<IAdd[]>()
    const [valueInput, setValueInput] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValueInput(e.target.value)
    }

    function handleClick() {
        stateShowSearch.seeSearch()
    }

    function hideSearch() {
        stateShowSearch.hide()
    }

    useEffect(() => {
        async function getallData() {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const res = await fetch(`${apiUrl}/api/allArticles`)
            const data = await res.json()
            setAllData(data)
        }
        getallData()
    }, [])

    return (
        <div className={styles.containerImg}>
            <label htmlFor="search_input">
                <Image src={searchLogo} alt='search' className={styles.image} onClick={handleClick} />
            </label>
            {
                showSearch &&

                <div className={styles.wrapper_search}>

                    <div className={styles.label_input_search}>
                        <label htmlFor="search_input">
                            <Image src={searchLogo} alt='search' className={styles.image} />
                        </label>
                        <input type="search" id='search_input' placeholder='ex: electrique, classique ...' value={valueInput} onChange={handleChange} />
                    </div>

                    <ul className={styles.wrapper_link}>

                        {
                            valueInput && (
                                allData !== undefined ? (
                                    (allData.filter((element) => (element.category && element.category.toLowerCase().includes(valueInput.toLocaleLowerCase()))).length <= 0
                                        && allData.filter((element) => (element.id.toLowerCase().includes(valueInput.toLowerCase()))).length <= 0
                                        && allData.filter((element) => (element.name.toLowerCase().includes(valueInput.toLowerCase()))).length <= 0
                                    ) ?
                                        <a ><p className={styles.not_exist}>Not exists</p></a> : ''
                                )
                                    : ''
                            )
                        }


                        {
                            valueInput && (
                                allData !== undefined ?
                                    (
                                        allData.filter((element) => (element.category && element.category.toLowerCase().includes(valueInput.toLocaleLowerCase()))).
                                            filter((element, index) => (index == 0 || index == 10 || index == 20 || index == 30 || index == 40 || index == 50)).
                                            map((element, index) => (
                                                <Link key={index} href={`/articles/${element.category}`} onClick={hideSearch}><p>{element.category}</p></Link>
                                            ))
                                    )
                                    : ''
                            )
                        }

                        {
                            valueInput && (
                                allData !== undefined ?
                                    (
                                        allData.filter((element) => (element.id && element.id.toLowerCase().includes(valueInput.toLocaleLowerCase()))).
                                            map((element, index) => (
                                                <Link key={index} href={`/articles/${element.id}`} onClick={hideSearch}><p>{element.name} / {element.category}</p></Link>
                                            ))
                                    )
                                    : ''
                            )
                        }

                        {
                            valueInput && (
                                allData !== undefined ?
                                    (
                                        allData.filter((element) => (element.name && element.name.toLowerCase().includes(valueInput.toLocaleLowerCase()))).
                                            map((element, index) => (
                                                <Link key={index} href={`/articles/${element.id}`} onClick={hideSearch}><p>{element.name} / {element.category} </p></Link>
                                            ))
                                    )
                                    : ''
                            )
                        }
                    </ul>

                </div>

            }

            {
                showSearch && <div className={styles.mask_body} onClick={hideSearch}></div>
            }

        </div>
    )
}

export default SearchZone
'use client'

//TODO IMAGE FOR ARTICLE

import React, { useEffect, useState } from 'react'
import styles from './imageZone.module.scss'
import Image, { StaticImageData } from 'next/image'
import acousticImg1 from '../../../../../public/Image/Article/acoustic.png'
import acousticImg2 from '../../../../../public/Image/Article/acoustic2.png'
import acousticImg3 from '../../../../../public/Image/Article/acoustic3.png'
import electroAcousticImg1 from '../../../../../public/Image/Article/electro_acoustique.png'
import electroAcousticImg2 from '../../../../../public/Image/Article/electro_acoustique2.png'
import electroAcousticImg3 from '../../../../../public/Image/Article/electro_acoustique3.png'
import electricImg1 from '../../../../../public/Image/Article/electric.png'
import electricImg2 from '../../../../../public/Image/Article/electric2.png'
import electricImg3 from '../../../../../public/Image/Article/electric3.png'
import bassImg1 from '../../../../../public/Image/Article/guitare_bass.png'
import bassImg2 from '../../../../../public/Image/Article/guitare_bass2.png'
import bassImg3 from '../../../../../public/Image/Article/guitare_bass3.png'
import ukuleleImg1 from '../../../../../public/Image/Article/ukulele.png'
import ukuleleImg2 from '../../../../../public/Image/Article/ukulele2.png'
import ukuleleImg3 from '../../../../../public/Image/Article/ukulele3.png'
import classicImg1 from '../../../../../public/Image/Article/classic.png'
import classicImg2 from '../../../../../public/Image/Article/classic2.png'
import classicImg3 from '../../../../../public/Image/Article/classic3.png'
import { lchown } from 'fs'

interface IImageZone {
    category: "acoustic" | "bass" | "classic" | "electric" | "electro-acoustic" | "ukulele"
}

function ImageZone({ category }: IImageZone) {

    const [img1, setImg1] = useState<StaticImageData>()
    const [img2, setImg2] = useState<StaticImageData>()
    const [img3, setImg3] = useState<StaticImageData>()
    const [idElementLoupe, setIdElementLoupe] = useState('')
    const [idElementForActive, setIdElementForActive] = useState('')

    function displayNone(idElement: string) {
        const element = document.getElementById(`${idElement}`)
        if (element) {
            element.style.display = 'none'
        }
    }

    function displayFlex(idElement: string) {
        const element = document.getElementById(`${idElement}`)
        if (element) {
            element.style.display = 'flex'
        }
    }

    function setActiveImg(idElement: string) {
        const element = document.getElementById(`${idElement}`)
        if (element) {
            element.style.borderColor = 'rgba(0, 0, 0, 0.5)'
        }
    }

    function deleteActive(idElement: string) {
        const element = document.getElementById(`${idElement}`)
        if (element) {
            element.style.borderColor = 'rgba(217, 217, 217, 0.25)'
        }
    }

    useEffect(() => {

        setIdElementLoupe('loupe1')
        setActiveImg('overImg1')

        const loupe1 = document.getElementById('loupe1')
        const loupe2 = document.getElementById('loupe2')
        const loupe3 = document.getElementById('loupe3')

        if (category == 'acoustic') {
            setImg1(acousticImg1)
            setImg2(acousticImg2)
            setImg3(acousticImg3)
            if (loupe1) {
                loupe1.style.backgroundImage = "url('/Image/Article/acoustic.png')"
            }
            if (loupe2) {
                loupe2.style.backgroundImage = "url('/Image/Article/acoustic2.png')"
            }
            if (loupe3) {
                loupe3.style.backgroundImage = "url('/Image/Article/acoustic3.png')"
            }
        }
        if (category == 'classic') {
            setImg1(classicImg1)
            setImg2(classicImg2)
            setImg3(classicImg3)

            if (loupe1) {
                loupe1.style.backgroundImage = "url('/Image/Article/classic.png')"
            }
            if (loupe2) {
                loupe2.style.backgroundImage = "url('/Image/Article/classic2.png')"
            }
            if (loupe3) {
                loupe3.style.backgroundImage = "url('/Image/Article/classic3.png')"
            }
            
        }
        if (category == 'electric') {
            setImg1(electricImg1)
            setImg2(electricImg2)
            setImg3(electricImg3)
            if (loupe1) {
                loupe1.style.backgroundImage = "url('/Image/Article/electric.png')"
            }
            if (loupe2) {
                loupe2.style.backgroundImage = "url('/Image/Article/electric2.png')"
            }
            if (loupe3) {
                loupe3.style.backgroundImage = "url('/Image/Article/electric3.png')"
            }
        }
        if (category == 'ukulele') {
            setImg1(ukuleleImg1)
            setImg2(ukuleleImg2)
            setImg3(ukuleleImg3)
            if (loupe1) {
                loupe1.style.backgroundImage = "url('/Image/Article/ukulele.png')"
            }
            if (loupe2) {
                loupe2.style.backgroundImage = "url('/Image/Article/ukulele2.png')"
            }
            if (loupe3) {
                loupe3.style.backgroundImage = "url('/Image/Article/ukulele3.png')"
            }
        }
        if (category == 'electro-acoustic') {
            setImg1(electroAcousticImg1)
            setImg2(electroAcousticImg2)
            setImg3(electroAcousticImg3)
            if (loupe1) {
                loupe1.style.backgroundImage = "url('/Image/Article/electro_acoustique.png')"
            }
            if (loupe2) {
                loupe2.style.backgroundImage = "url('/Image/Article/electro_acoustique2.png')"
            }
            if (loupe3) {
                loupe3.style.backgroundImage = "url('/Image/Article/electro_acoustique3.png')"
            }
        }
        if (category == 'bass') {
            setImg1(bassImg1)
            setImg2(bassImg2)
            setImg3(bassImg3)
            if (loupe1) {
                loupe1.style.backgroundImage = "url('/Image/Article/guitare_bass.png')"
            }
            if (loupe2) {
                loupe2.style.backgroundImage = "url('/Image/Article/guitare_bass2.png')"
            }
            if (loupe3) {
                loupe3.style.backgroundImage = "url('/Image/Article/guitare_bass3.png')"
            }
        }

    }, [])

    function mouseMoveImg(event: React.MouseEvent<HTMLUListElement, MouseEvent>) {

        const containerImg = document.getElementById('contImgZoom') as HTMLDivElement
        const loupe = document.getElementById(`${idElementLoupe}`) as HTMLDivElement

        if (containerImg && loupe) {
            if (window.innerWidth > 993) {
                loupe.style.display = 'flex'

                const zoomNumber = 1.5

                const rect = containerImg.getBoundingClientRect();  // recupérer la position et la taille du conteneur img
                const x = event.clientX - rect.left;  // Position de la souris relative à img
                const y = event.clientY - rect.top;

                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                loupe.style.left = `${x - loupe.offsetWidth / 2}px`
                loupe.style.top = `${y - loupe.offsetHeight / 2}px`
                
                loupe.style.backgroundSize = `${rect.width * zoomNumber}px ${rect.height * zoomNumber}px`;
                loupe.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            }
        }
    }

    function mouseLeaveImg() {
        displayNone(idElementLoupe)
    }

    function changeImgFirst() {
        setIdElementLoupe('loupe1')
        displayFlex('mainImg1')
        displayNone('mainImg2')
        displayNone('mainImg3')

        setActiveImg('overImg1')
        deleteActive('overImg2')
        deleteActive('overImg3')
    }

    function changeImgSecond() {
        setIdElementLoupe('loupe2')
        displayFlex('mainImg2')
        displayNone('mainImg1')
        displayNone('mainImg3')

        setActiveImg('overImg2')
        deleteActive('overImg1')
        deleteActive('overImg3')
    }
    function changeImgThird() {
        setIdElementLoupe('loupe3')
        displayFlex('mainImg3')
        displayNone('mainImg1')
        displayNone('mainImg2')

        setActiveImg('overImg3')
        deleteActive('overImg1')
        deleteActive('overImg2')
    }

    return (
        <div className={styles.imgZone}>
            <ul className={styles.wrapper_othersImg}>
                <li id='overImg1' onClick={changeImgFirst}>{img1 && <Image src={img1} alt='' />}</li>
                <li id='overImg2' onClick={changeImgSecond}>{img2 && <Image src={img2} alt='' />}</li>
                <li id='overImg3' onClick={changeImgThird}>{img3 && <Image src={img3} alt='' />}</li>
            </ul>

            <ul onMouseLeave={mouseLeaveImg} onMouseMove={mouseMoveImg} id='contImgZoom' className={styles.wrapper_mainImg}>
                <li id='mainImg1'>{img1 && <Image src={img1} alt='' />}<div id='loupe1' className={styles.loupe}></div></li>
                <li id='mainImg2' >{img2 && <Image src={img2} alt='' />}<div id='loupe2' className={styles.loupe}></div></li>
                <li id='mainImg3'>{img3 && <Image src={img3} alt='' />}<div id='loupe3' className={styles.loupe}></div></li>
            </ul>
        </div>
    )
}

export default ImageZone
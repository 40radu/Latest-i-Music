"use client"

import React from 'react'
import Title from '@/Component/global/Title/Title'
import CardItem from '@/Component/global/CardItem/CardItem'
import { SwiperSlide, Swiper, } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, A11y } from 'swiper/modules';
import imgElectricArticle from '../../../../../public/Image/Article/electric.png'
import imgAcoustic from '../../../../../public/Image/Article/acoustic.png'
import imgUkulele from '../../../../../public/Image/Article/ukulele.png'
import imgBass from '../../../../../public/Image/Article/guitare_bass.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import  from './_popularItems.module.scss'/


function PopularItems() {
        


    return (
        <section className='popular'>
            <div className='title'>
                <Title value='popular articles' />
            </div>
            <Swiper
                className='wrapperAll'
                cssMode={true}
                slidesPerView={'auto'}
                spaceBetween={0}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                // a11y={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, A11y]}

                // breakpoints={{
                    
                //     768: {
                //       slidesPerView: 2,
                //       spaceBetween: 10,
                //     }, 
                //     1025 : {
                //         slidesPerView : 'auto'
                //     }
                   
                //   }}

                // breakpoints={{1024 : {slidesPerView : 2 , spaceBetween : 50}}}
                
                
                >
                <SwiperSlide className="wrapperItems">
                    <CardItem price={548} src={imgElectricArticle} title='Gibson SG' textButton='view similar'/>
                </SwiperSlide >
                <SwiperSlide className="wrapperItems">
                    <CardItem price={442} src={imgAcoustic} title='Martin D 41L LH' textButton='view similar' />
                </SwiperSlide ><SwiperSlide className="wrapperItems">
                    <CardItem price={455} src={imgBass} title='Takamine GB30CE' textButton='view similar' />
                </SwiperSlide><SwiperSlide className="wrapperItems">
                    <CardItem price={330} src={imgElectricArticle} title='Ibanez Q54' textButton='view similar'/>
                </SwiperSlide>
                <SwiperSlide className="wrapperItems">
                    <CardItem price={45} src={imgUkulele} title='MAHALO MA1SKBK' textButton='view similar'/>
                </SwiperSlide>
                <SwiperSlide className="wrapperItems">
                    <CardItem price={430} src={imgAcoustic} title='Yamaha CX40' textButton='view similar'/>
                </SwiperSlide><SwiperSlide className="wrapperItems">
                    <CardItem price={497} src={imgBass} title='Epiphone Jack' textButton='view similar'/>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default PopularItems
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

 function PopularItems({title} : {title? : 'new products'}) {
    return (
        <section className='popular'>
            <div className='title'>
                <Title value={title ? title : 'popular articles'} />
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
                    <CardItem price={548} src={imgElectricArticle} title='Gibson SG' textButton='view similar' data={{ id: '1d', price: 548, name: 'Gibson SG', category: 'electric' }}/>
                </SwiperSlide >
                <SwiperSlide className="wrapperItems">
                    <CardItem price={499} src={imgAcoustic} title='Martin D 41L LH' textButton='view similar' data={{ id: '4a', price: 499, name: 'Martin LX1L', category: 'acoustic' }}/>
                </SwiperSlide ><SwiperSlide className="wrapperItems">
                    <CardItem price={497} src={imgBass} title='ALOHA 20C' textButton='view similar' data={{ id: '9b', price: 497, name: 'Epiphone Jack', category: 'bass' }
}/>
                </SwiperSlide><SwiperSlide className="wrapperItems">
                    <CardItem price={330} src={imgElectricArticle} title='Ibanez Q54' textButton='view similar' data={{ id: '3d', price: 330, name: 'Ibanez Q54', category: 'electric' }}/>
                </SwiperSlide>
                <SwiperSlide className="wrapperItems">
                    <CardItem price={45} src={imgUkulele} title='MAHALO MA1SKBK' textButton='view similar'  data={{ id: '2f', price: 45, name: 'MAHALO MA1SKBK', category: 'ukulele' }}/>
                </SwiperSlide>
                <SwiperSlide className="wrapperItems">
                    <CardItem price={430} src={imgAcoustic} title='Yamaha CX40' textButton='view similar' data={{ id: '3a', price: 430, name: 'Yamaha CX40', category: 'acoustic' }} />
                </SwiperSlide><SwiperSlide className="wrapperItems">
                    <CardItem price={489} src={imgBass} title='Yamaha TRBX174   ' textButton='view similar' data={{id: '5b', price: 489, name: 'Yamaha TRBX174', category: 'bass' }}/>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default PopularItems
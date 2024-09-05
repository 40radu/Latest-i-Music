"use client"

import React from 'react'
import Title from '@/Component/global/Title/Title'
import CardItem from '@/Component/global/CardItem/CardItem'
import { SwiperSlide, Swiper, } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, A11y } from 'swiper/modules';

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
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide >
                <SwiperSlide className="wrapperItems">
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide ><SwiperSlide className="wrapperItems">
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide><SwiperSlide className="wrapperItems">
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide>
                <SwiperSlide className="wrapperItems">
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide>
                <SwiperSlide className="wrapperItems">
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide><SwiperSlide className="wrapperItems">
                    <CardItem descri='description zone' title='guitare' />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default PopularItems
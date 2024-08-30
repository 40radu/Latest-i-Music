"use client"

import React from 'react'
import Title from '@/Component/global/Title/Title'
import CardItem from '@/Component/global/CardItem/CardItem'
import { SwiperSlide, Swiper, } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './_popularItems.module.scss'


function PopularItems() {
    return (
        <section className={styles.popular}>
            <div className={styles.title}>
                <Title value='popular articles' />
            </div>
            <Swiper
                className={styles.wrapperAll}
                cssMode={true}
                slidesPerView={'auto'}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                // a11y={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, A11y]}
                
                >
                <SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide >
                <SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide ><SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide><SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide>
                <SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide>
                <SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide><SwiperSlide className={styles.wrapperItems}>
                    <CardItem src='' />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default PopularItems
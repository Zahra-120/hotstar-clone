import React from 'react'
import './MyCarousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import kgf from '../../assets/KGF.jpg';
import avengers from '../../assets/Marvel_Avengers.jpg';
import modernFamily from '../../assets/Modern_Family.jpg';
import spiderMan from '../../assets/Spider_Man.jpg';

export default function MyCarousel() {
  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='image' src={modernFamily} alt="Modern Family" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={spiderMan} alt="Spider Man" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={kgf} alt="KGF" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={avengers} alt="Avengers" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}



import { React, useState } from 'react';
import {
  DishesWrapper,
  HeaderDishes,
  TitleDishes,
  SpanSLideTitle,
  UnderLine,
  MainColor,
} from './styles/index';
import '../../../images/menubg.jpg';
import './styles/style.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

import { Autoplay, Pagination, Navigation } from 'swiper';

const PopularDishes = () => {
  return (
    <DishesWrapper className='menuBg'>
      <HeaderDishes>
        <TitleDishes>
          Popularne <MainColor> Dania</MainColor>
        </TitleDishes>
        <UnderLine></UnderLine>
      </HeaderDishes>
      <div className='swiperWrapper'>
        <Swiper
          spaceBetween={80}
          slidesPerView={3}
          className='swiperBox'
          initialSlide={2}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
        >
          {/* <SwiperSlide className='SlideWrapper startSlide'></SwiperSlide> */}
          <SwiperSlide className='SlideWrapper'>
            <div className='firstSlide slides'>
              <SpanSLideTitle>Pizza Włoska</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SlideWrapper'>
            <div className='SecoundSlide slides'>
              <SpanSLideTitle>Burger z frytkami</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SlideWrapper'>
            <div className='thirdSlide slides'>
              <SpanSLideTitle>Shusi</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SlideWrapper'>
            <div className='fourthSlide slides'>
              <SpanSLideTitle>Stek</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SlideWrapper'>
            <div className='fifthSlide slides'>
              <SpanSLideTitle>Krewetki na ostro</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SlideWrapper'>
            <div className='sixthSlide slides'>
              <SpanSLideTitle>Sałatka Cezara</SpanSLideTitle>
            </div>
          </SwiperSlide>
          <SwiperSlide className='SlideWrapper'>
            <div className='seventhSlide slides'>
              <SpanSLideTitle>Makaron</SpanSLideTitle>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='SlideWrapper' /> */}
        </Swiper>
      </div>
    </DishesWrapper>
  );
};

export default PopularDishes;

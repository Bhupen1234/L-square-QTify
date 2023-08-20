import React, { useEffect } from "react";

import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    
       
        console.log( swiper.slideTo(0,500))
   
  }, [data]);
  return <></>
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation  className={styles.leftNavigation}/>
        <CarouselRightNavigation className={styles.rightNavigation}/>
   
        {
           data.map((ele)=>( <SwiperSlide key={ele.id}>{renderCardComponent(ele)}</SwiperSlide>))
        }
      </Swiper>
    </div>
  );
};

export default Carousel;

import React from 'react';
import "./carousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";




import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Carousel() {
  return (
    <section className='h-[600px]'>
      <Swiper
        slidesPerView={1}
        className='h-[70%] w-full max-[0 auto] bg-none'
        spaceBetween={30}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >

        {/* .swiper-slide-content::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  top: 100px;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255) 100%);
} */}
        <SwiperSlide><div className='swiper-slide-content absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-black to-white opacity-70'><img src={banner1} className='slide-img w-full object-cover ' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-black to-white opacity-70'><img src={banner2} className='slide-img w-full object-cover ' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-black to-white opacity-70'><img src={banner3} className='slide-img w-full object-cover ' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-black to-white opacity-70'><img src={banner4} className='slide-img w-full object-cover ' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-b from-black to-white opacity-70'><img src={banner5} className='slide-img w-full object-cover ' /></div></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carousel;

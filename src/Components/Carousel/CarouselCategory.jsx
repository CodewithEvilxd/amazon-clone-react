import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from 'react';


const CarouselCategory = () => {
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const handleSlideChange = (swiper) => {
    setIsNextDisabled(swiper.isEnd);
    setIsPrevDisabled(swiper.isBeginning);
  };

  return (
    <div className='text-black mb-6 bg-white m-4 relative group '>
      <div className='ml-4 pt-4 font-medium text-lg'>Best Sellers in Books</div>
      <Swiper
        className='bg-white p-3 relative mr-12 '
        spaceBetween={10}
        slidesPerView={7}
        loop={false}
        scrollbar={{
          hide: true,
          dragSize: "250px",
          draggable: true
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
          disabledClass: ".swiper-button-disabled"
        }}
        breakpoints={{
          768: {
            slidesPerView: 8
          }
        }}
        modules={[Scrollbar, Navigation]}
        onSlideChange={handleSlideChange}
      >

        <div className={`cursor-pointer shadow-2xl next-btn absolute right-4 top-1/2 transform -translate-y-1/2 z-10 h-20 w-14 text-red-800 bg-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ${isNextDisabled ? 'swiper-button-disabled opacity-50' : ''}`}><GrNext fontSize={"2rem"} /></div>
        <div className={`cursor-pointer shadow-2xl prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 h-20 w-14 text-red-800 bg-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ${isPrevDisabled ? 'swiper-button-disabled opacity-50' : ''}`}><GrPrevious fontSize={"2rem"} /></div>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/414vz-WNrUL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/61M2130f5EL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/61BWsc9eGbL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/814mI0-rkxL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/91Ldk5Qz9sL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/71pL+3nMzfL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/81Xy1ugiWeL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/81RBTG28sCL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/812eE1lO0dL._AC_SY200_.jpg"} /></SwiperSlide>
        <SwiperSlide><img className='' src={"https://m.media-amazon.com/images/I/61XUtQ7NTgL._AC_SY200_.jpg"} /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

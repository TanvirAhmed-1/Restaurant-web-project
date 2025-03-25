
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from "../assets/home/slide1.jpg"
import img2 from "../assets/home/slide2.jpg"
import img3 from "../assets/home/slide3.jpg"
import img4 from "../assets/home/slide4.jpg"
import img5 from "../assets/home/slide5.jpg"


const Slider = () => {
    return (
<div className='md:w-10/12 mx-auto'>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView:1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-full object-cover overflow-hidden' src={img1} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover overflow-hidden' src={img2} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover overflow-hidden' src={img3} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover overflow-hidden' src={img4} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full object-cover overflow-hidden' src={img5} alt="" srcset="" />
        </SwiperSlide>
  

       
      </Swiper>
</div>
    );
};

export default Slider;
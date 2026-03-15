import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import catagorey1 from "../../../assets/assets/home/slide1.jpg";
import catagorey2 from "../../../assets/assets/home/slide2.jpg";
import catagorey3 from "../../../assets/assets/home/slide3.jpg";
import catagorey4 from "../../../assets/assets/home/slide4.jpg";
import catagorey5 from "../../../assets/assets/home/slide5.jpg";
import SectionTittle from '../../SectionTittle/SectionTittle';

const Category = () => {
    return (
        <section>
            <SectionTittle
            SubHading={"order online "}
            heading={"from 11.00am to 10.00pm"}
            >
               
            </SectionTittle>
            <div className="my-8">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={catagorey1} alt="" srcset="" /></SwiperSlide>

                <SwiperSlide><img src={catagorey2} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={catagorey3} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={catagorey4} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={catagorey5} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={catagorey3} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={catagorey2} alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={catagorey1} alt="" srcset="" /></SwiperSlide>
            </Swiper>
        </div>
        </section>
    );
};

export default Category;

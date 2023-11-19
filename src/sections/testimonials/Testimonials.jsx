
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper";

import React from 'react'
import './testimonials.css'
import testimonials from './data'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h2>What My Client Say</h2>
        <p>
          These are unbiased testimonials from some of my clients 
        </p>
        <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601:{slidesPerView:2},
          1025:{slidesPerView:3},
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
        </div>
    </section>
  )
}

export default Testimonials;







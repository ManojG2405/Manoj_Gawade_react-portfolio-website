import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR3,
    name: "Mayuresh R",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing eli Aliquam culpa distinctio molestias accusantium accusamus deserunt porro cum cumque recusandae magni iusto eveniet"
  },
  {
    avatar: AVATAR2,
    name: "Vivek Naik",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing eli Aliquam culpa distinctio molestias accusantium accusamus deserunt porro cum cumque recusandae magni iusto eveniet"
  },
  {
    avatar: AVATAR4,
    name: "Aniket Rawool",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing eli Aliquam culpa distinctio molestias accusantium accusamus deserunt porro cum cumque recusandae magni iusto eveniet"
  },
  {
    avatar: AVATAR1,
    name: "Priyanka B",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing eli Aliquam culpa distinctio molestias accusantium accusamus deserunt porro cum cumque recusandae magni iusto eveniet"
  },
  {
    avatar: AVATAR2,
    name: "Akshay Redkar",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing eli Aliquam culpa distinctio molestias accusantium accusamus deserunt porro cum cumque recusandae magni iusto eveniet"
  },
  {
    avatar: AVATAR1,
    name: "Mugdha Sutar",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing eli Aliquam culpa distinctio molestias accusantium accusamus deserunt porro cum cumque recusandae magni iusto eveniet"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={60}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }} >

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="AVATAR" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section >
  );
};

export default Testimonials;

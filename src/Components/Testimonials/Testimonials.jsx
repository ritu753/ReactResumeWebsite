import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/avatar-1.svg';
import Image3 from '../../assets/avatar-3.svg';
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial" id="testimonials">
      <div className="section-title">
        <h2>Clients & Reviews</h2>
      </div>
      <Swiper className="row"
       modules={[ Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{ clickable: true }}>
        {data.map((item) => (
          <SwiperSlide className="col text-center mb-8 bg" key={item.id}>
            <div className="client-img flex items-center justify-center mb-5">
              <img src={item.image} className='h-20' alt={item.title} />
            </div>
            <h4 className='text-xl font-bold'>{item.title}</h4>
            <h6 className='text-[#5E5C7F] mb-8'>{item.subtitle}</h6>
            <div className="comment relative bg-white max-w-[800px] mx-auto shadow-2xl p-6 mb-9 rounded-3xl text-[#5E5C7F]">
              <p>{item.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

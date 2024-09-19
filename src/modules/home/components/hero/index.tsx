"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import "./slider.css"
import 'swiper/css/pagination';
const Hero = () => {
  const slides = [
    { id: 0, title: 'Slide 5', description: 'This is the fourth slide', imageUrl: '/bg-3.jpg' },
    { id: 1, title: 'Slide 1', description: 'This is the first slide', imageUrl: '/image3.png' },
    { id: 4, title: 'Slide 4', description: 'This is the fourth slide', imageUrl: '/bg-3.jpg' },
    { id: 2, title: 'Slide 2', description: 'This is the second slide', imageUrl: '/bg-2.jpg' },
    { id: 3, title: 'Slide 3', description: 'This is the third slide', imageUrl: '/bg-1.jpg' },
  ];

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[75vh] w-full flex flex-col relative items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              {/* <h2 className="text-white bottom-10 text-4xl font-bold">{slide.title}</h2>
              <p className="text-white mt-4 text-xl">{slide.description}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

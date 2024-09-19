"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from "next/image"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const distributorLogos = [
  { name: "Distributor 1", logo: "/logo1.png" },
  { name: "Distributor 2", logo: "/logo2.png" },
  { name: "Distributor 3", logo: "/logo3.png" },
  { name: "Distributor 4", logo: "/logo4.png" },
  { name: "Distributor 5", logo: "/logo5.png" },
  { name: "Distributor 6", logo: "/logo6.png" },
  { name: "Distributor 7", logo: "/logo7.png" },
  { name: "Distributor 8", logo: "/logo8.png" },
]

export default function DistributorLogos() {
  return (
    <div className="content-container py-12">
      <h2 className="text-center text-2xl font-medium mb-8">Our Distributors</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {distributorLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={logo.logo}
                alt={logo.name}
                width={150}
                height={100}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

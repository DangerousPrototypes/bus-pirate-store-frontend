"use client"
import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  // Add this line


export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge medium:text-5xl">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        pagination={{ clickable: true }}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        className="!px-10"
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

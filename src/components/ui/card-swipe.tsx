"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  slideShadows: boolean
}

export const CardSwipe: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
  .swiper {
    width: 120px;
    height: 150px;
    padding-bottom: 5px;
  }
  
  @media (min-width: 768px) {
    .swiper {
      width: 150px;
      height: 188px;
    }
  }
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-cover: cover;
  }
  `
  return (
    <div className="w-full flex justify-center items-center">
      <style>{css}</style>
      <Swiper
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        rewind={true}
        cardsEffect={{
          slideShadows: slideShadows,
        }}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        speed={1000}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="size-full">
              <Image
                src={image.src}
                width={500}
                height={500}
                className="size-full object-cover"
                alt={image.alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

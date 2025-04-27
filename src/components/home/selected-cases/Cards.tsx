"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SLIDER_LIST } from "@/utils/defaults";
import Image from "next/image";

const Cards = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative mx-auto w-full">
      <Swiper
        modules={[Autoplay]}
        effect="slide"
        spaceBetween={20}
        freeMode={true}
        loop={true}
        centeredSlides={true}
        slidesPerView="auto"
        ref={swiperRef}
        grabCursor={true}
        speed={6000} // Much higher speed for smoother scrolling
        autoplay={{
          delay: 1, // No delay between transitions
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper overflow-hidden w-full">
        {/* Double the slides for smoother looping */}
        {[...SLIDER_LIST, ...SLIDER_LIST].map((obj, idx) => (
          <SwiperSlide
            key={idx}
            className="!flex !flex-col !gap-5 transition-all duration-300 ease-in !w-[273.6px] max-w-[273.6px]">
            <div
              className="relative h-full w-full overflow-hidden rounded-3xl bg-gray"
              style={{ aspectRatio: "0.733" }}>
              <Image
                src={obj.image}
                alt={obj.label}
                className="object-cover object-center rounded-3xl"
                width={300}
                height={300}
                priority={idx < 5} // Prioritize first few images
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
              />
            </div>
            <div>
              <p className="text-sm text-black">{obj.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;

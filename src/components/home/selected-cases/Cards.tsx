/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const Cards = ({ list }: { list: any }) => {
  const swiperRef = useRef(null);
  // Sanity image URL builder
  const builder = imageUrlBuilder(client);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function urlFor(source: any) {
    return builder.image(source);
  }
  const techMap = list.props.selectedCases || [];

  return (
    <div className="relative mx-auto w-full">
      <Swiper
        modules={[Autoplay]}
        effect="slide"
        spaceBetween={20}
        freeMode={true}
        loop={true}
        centeredSlides={false}
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
        {techMap?.length > 0 &&
          [...techMap, ...techMap].map((obj, idx) => {
            const imageSource = obj.mainImage
              ? urlFor(obj.mainImage)?.url()
              : "/placeholder-image.jpg";
            return (
              <SwiperSlide
                key={idx}
                className="!flex !flex-col !gap-5 transition-all duration-300 ease-in !w-[273.6px] max-w-[273.6px]">
                <div
                  className="relative h-full w-full overflow-hidden rounded-3xl bg-gray"
                  style={{ aspectRatio: "0.733" }}>
                  <Image
                    src={imageSource}
                    alt={imageSource}
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
                  <p className="text-sm text-black">({obj.title})</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Cards;

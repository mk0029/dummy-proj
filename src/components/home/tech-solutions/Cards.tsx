"use client";

import { TECH_CARDS } from "@/utils/defaults";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = () => {
  return (
    <section className="mt-12 sm:mt-16 md:mt-28 lg:mt-32">
      <div className="flex flex-col gap-4 lg:flex-row ">
        {TECH_CARDS.map((card, index) => (
          <Link key={index} href={card.href} className="flex flex-1">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-lighter-gray">
              <div className="relative aspect-[1/0.8] lg:aspect-[1/1.1] h-full w-full overflow-hidden rounded-t-md">
                {card.type === "image" ? (
                  <Image
                    src={card.src}
                    alt={card.alt || "Card Image"}
                    fill
                    className="object-cover transition-all duration-300"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 100vw"
                    loading="lazy"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={card.poster}
                    className="h-full w-full object-cover object-center">
                    <source src={card.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="flex w-full flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-10 text-center text-xs md:text-lg lg:min-h-[170px] lg:py-0">
                <p className="mb-1 font-light">{card.title}</p>
                <h3 className="m-0 text-center font-sans text-base font-normal tracking-[-0.24px] md:text-[20px] md:tracking-[-0.18px]">
                  {card.description}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;

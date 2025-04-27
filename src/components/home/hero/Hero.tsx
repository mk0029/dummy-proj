import React from "react";
import ImgCard from "./ImgCard";

const Hero = () => {
  return (
    <div className="container-full mt-12 sm:mt-16 md:mt-28 lg:mt-32">
      <h1 className="text-center font-normal leading-none text-2xl md:text-custom-3xl">
        E-commerce for today’s needs and tomorrow’s ambitions.
      </h1>
      <div className="mt-10 md:mt-14">
        <ImgCard />
      </div>
    </div>
  );
};

export default Hero;

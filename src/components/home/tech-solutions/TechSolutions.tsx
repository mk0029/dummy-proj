import React from "react";
import Cards from "./Cards";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TechSolutions = ({ cards }: { cards: any }) => {
  return (
    <div className=" mt-1 sm:mt-16 md:mt-28 lg:mt-32">
      <div className="mx-auto w-full max-w-[1180px] lg:mb-24 px-5">
        <h2 className="text-center font-light mb-2 md:mb-4 text-base md:text-2xl">
          Supporting growing brands with tech solutions.
        </h2>
        <h3 className=" text-2xl sm:text-3xl !leading-[1.06] md:text-5xl lg:text-custom-6xl tracking-[-0.47px] md:!tracking-[-1.95px] font-light text-center">
          Cutting-edge e-commerce, sleek design, and innovative technology.
        </h3>
      </div>
      <div className="container-full">
        <Cards cards={cards} />
      </div>
    </div>
  );
};

export default TechSolutions;

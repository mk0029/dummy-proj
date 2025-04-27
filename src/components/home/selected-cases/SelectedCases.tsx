/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/selected-cases.js
import Cards from "./Cards";

const SelectedCases = ({ cards: list }: { cards: any }) => {
  return (
    <section className="mt-12 sm:mt-16 md:mt-28 lg:mt-32">
      <div className="mx-auto px-4 lg:px-[18px]">
        <div className="flex flex-col gap-5 md:gap-8 h-full w-full justify-center">
          <div className="flex flex-col gap-2 px-4">
            <h4 className="font-sans text-md lg:text-md font-light m-0">
              Selected cases
            </h4>
            <h2 className="font-sans sm:text-[24px] md:text-3xl xl:text-3xl font-light m-0 text-xl tracking-[-0.24px] md:tracking-[-0.36px] lg:text-base">
              We earned the trust from leading brands
            </h2>
          </div>
          <Cards list={list || []} />
        </div>
      </div>
    </section>
  );
};

export default SelectedCases;

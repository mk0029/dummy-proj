import Link from "next/link";
import React from "react";
import Icons from "../common/component/Icons";

const BuildTogether = () => {
  return (
    <section className="mt-12 sm:mt-16 md:mt-28 lg:mt-32 xl:my-40">
      <div className="container-full">
        <div className="mx-auto flex max-w-[693px] flex-col items-center sm:gap-3">
          <h3 className="font-sans text-lg md:text-2xl font-light mb-0 text-center">
            Let’s build something that lasts—together.
          </h3>
          <h3 className="font-sans font-normal mx-auto text-center text-sm leading-6 md:text-lg md:!leading-8">
            We help you create scalable, high-performing e-commerce
            experiences—whether you need a new partner or are rethinking your
            platform.
          </h3>
          <Link
            scroll={false}
            href="/"
            className="group max-sm:mt-3 flex w-fit items-center gap-4 rounded-full bg-black py-2 pl-4 pr-2 text-white common-smoothness border border-solid border-transparent hover:border-black hover:bg-transparent hover:text-black active:duration-75 active:scale-95 max-sm:text-sm">
            Ready for what’s next? Let’s talk
            <span className="relative flex size-5 items-center justify-center overflow-hidden rounded-full bg-white border border-black ">
              {/* Arrow sliding right */}
              <Icons
                icon="arrow-right"
                className="absolute size-2.5 translate-x-0 group-hover:transition-all group-hover:duration-300 group-hover:translate-x-6 inline-block "
              />
              <Icons
                icon="arrow-right"
                className="absolute size-2.5 group-hover:delay-100 group-hover:transition-all group-hover:duration-300 group-hover:translate-x-0 -translate-x-6 inline-block "
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuildTogether;

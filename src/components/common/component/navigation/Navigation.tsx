"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icons from "../Icons";
import { NAV_LINK_LIST } from "@/utils/defaults";
import FixedNav from "./FixedNav";

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    <nav className="container-full h-[70px] md:h-20 px-3 lg:px-0 relative z-50">
      <div className="flex items-center justify-between relative h-full">
        <Link href="/">
          <Icons icon="header-logo" className="w-auto h-5" />
        </Link>
        <div className="flex gap-x-4 text-black max-md:hidden">
          {NAV_LINK_LIST.map((obj, index) => (
            <Link
              key={index}
              href={obj.url}
              className="py-1 px-4 text-lg capitalize relative underline-custom">
              {obj.title}
            </Link>
          ))}
        </div>
        <div className="w-fit md:hidden relative z-30">
          <button
            onClick={() => setIsNavVisible(!isNavVisible)}
            className=" fixed right-4 top-4 z-50 flex h-10 items-center justify-center rounded-full border border-light-gray/75 bg-white px-4 text-base text-black backdrop-blur-lg transition-all duration-500 focus:outline-none"
            type="button">
            Menu
          </button>
        </div>
        <FixedNav />
        <div
          onClick={() => setIsNavVisible(!isNavVisible)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-lg md:hidden common-smoothness z-10 ${
            isNavVisible ? "" : "opacity-0 pointer-events-none"
          }`}></div>

        <div
          className={`overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 backdrop-blur-xl transition-all duration-200 w-[calc(100%-32px)] fixed top-20 left-1/2 -translate-x-1/2 z-40 common-smoothness ${
            isNavVisible ? " " : "-translate-y-6 opacity-0 pointer-events-none"
          }`}>
          <div className="relative flex flex-col gap-2 p-4">
            <Link
              onClick={() => setIsNavVisible(!isNavVisible)}
              className="block rounded-md px-3 py-2 text-base text-black"
              href="/">
              Home
            </Link>{" "}
            {NAV_LINK_LIST.map((obj, index) => (
              <Link
                onClick={() => setIsNavVisible(!isNavVisible)}
                key={index}
                className="block rounded-md px-3 py-2 text-base text-black capitalize"
                href={obj.url}>
                {obj.title}
              </Link>
            ))}
          </div>
          <div className="p-6">
            <span className="block text-sm text-black">
              E-commerce for today’s needs and tomorrow’s ambitions.
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

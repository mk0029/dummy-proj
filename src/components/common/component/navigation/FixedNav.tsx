"use client";

import { NAV_LINK_LIST } from "@/utils/defaults";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FixedNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300) {
        if (currentScrollY < lastScrollY) {
          // scrolling up
          setShowNav(true);
        } else {
          // scrolling down
          setShowNav(false);
        }
      } else {
        setShowNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const className =
    "rounded-full py-1 px-4 text-base font-normal text-black hover:bg-black hover:text-white capitalize common-smoothness";

  return (
    <div
      className={`fixed gap-2 left-1/2 -translate-x-1/2 px-3 py-2 rounded-full bg-[#dddddd80] flex w-fit z-50 backdrop-blur-2xl custom-smoothness !duration-700 max-md:hidden ${
        !showNav ? "top-0 -translate-y-full" : "top-6 "
      }`}>
      <Link className={className} href="/">
        Home
      </Link>
      {NAV_LINK_LIST.map((obj, index) => (
        <Link key={index} className={className} href={obj.url}>
          {obj.title}
        </Link>
      ))}
    </div>
  );
};

export default FixedNav;

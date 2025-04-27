import Link from "next/link";
import Icons from "./Icons";
import { FOOTER_LIST } from "@/utils/defaults";

const Footer = () => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-28 lg:mt-32 xl:mt-60">
      <div className="animate-fade-in-up opacity-100">
        <div className="mx-auto px-4 lg:px-[18px]">
          <div className="grid grid-cols-6 text-sm">
            {/* Logo */}
            <div className="col-span-6 border-l border-black pb-6 sm:pb-10 md:pb-16 lg:pb-24 xl:pb-32 lg:col-span-2 lg:border-l-0 lg:border-r">
              <div className="pl-4 lg:pl-0">
                <Link aria-label="Home" href="/">
                  <Icons
                    className="w-[200px] md:w-[250px] xl:w-[338px] h-auto"
                    icon="footer-logo"
                  />
                </Link>
              </div>
            </div>

            {/* Address */}

            <div className="col-span-6 border-l border-black px-4 pb-6 sm:pb-10 md:pb-16 lg:pb-24 xl:pb-32  lg:col-span-2 lg:border-l-0 lg:border-r">
              <p>
                Österlånggatan 69
                <br />
                503 37 Borås Sweden
                <br />
                <br />© Rivercode 2025 - All rights reserved
              </p>
            </div>

            {/* Contact */}
            <div className="col-span-6 border-l border-black px-4 pb-6 sm:pb-10 md:pb-16 lg:pb-24 xl:pb-32  lg:col-span-2 lg:border-l-0">
              <div className="flex xl:flex-col gap-2 text-xs uppercase md:gap-4">
                {FOOTER_LIST.map((obj, i) => (
                  <Link
                    key={i}
                    className="w-fit rounded-full bg-black px-2.5 py-1 text-white common-smoothness border border-transparent border-solid hover:border-black hover:text-black hover:bg-transparent"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={obj.href}>
                    {obj.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

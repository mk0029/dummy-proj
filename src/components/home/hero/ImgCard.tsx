import React from "react";
import Image from "next/image";

const ImgCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-4">
      {/* Image Block */}
      <div className="relative z-10 overflow-hidden rounded-3xl bg-gray md:col-span-2 aspect-[5/6] hidden md:block">
        <div className="relative h-full w-full">
          <Image
            alt="Droplet Image"
            src="https://a.storyblok.com/f/327902/3840x3840/817aece543/rivercode_image_droplet_compressed.webp"
            fill
            priority
            sizes="(min-width: 1280px) 50vw, (min-width: 768px) 100vw"
            className="rounded-lg object-cover transition-all duration-300"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Video Block */}
      <div className="relative z-10 overflow-hidden rounded-3xl bg-gray aspect-[2/2] md:aspect-[5/6] md:col-span-2">
        <video
          autoPlay
          loop
          playsInline
          muted
          poster="https://a.storyblok.com/f/327902/1852x1846/2046f13bd2/droplet-poster.webp"
          className="absolute top-0 left-0 h-full w-full object-cover object-center">
          <source
            src="https://a.storyblok.com/f/327902/x/88a02e18a3/droplets-1440p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ImgCard;

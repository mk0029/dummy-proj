/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/tech-solutions.js or pages/index.js (depending on your route structure)
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

const Cards = ({ cards }: { cards: any }) => {
  const techMap = cards.props.techCards || [];
  return (
    <section className="mt-12 sm:mt-16 md:mt-28 lg:mt-32">
      <div className="flex flex-col gap-4 lg:flex-row">
        {techMap.length > 0 &&
          techMap?.map((card: any, index: number) => {
            // Handle both image and video content types
            const isVideo = card.contentType === "video";

            // Generate image URL or use video thumbnail
            const imageSource = isVideo
              ? card.videoThumbnail
                ? urlFor(card.videoThumbnail).url()
                : "/placeholder-image.jpg"
              : card.mainImage
              ? urlFor(card.mainImage).url()
              : "/placeholder-image.jpg";

            // Video URL if applicable
            const videoUrl = isVideo && card.video?.asset?.url;

            return (
              <Link
                key={index}
                href={card.slug?.current ? `/${card.slug.current}` : "/"}
                className="flex flex-1">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-lighter-gray common-smoothness hover:shadow-[0_0_40px_-20px_#000]">
                  <div className="relative aspect-[1/0.8] lg:aspect-[1/1.1] h-full w-full overflow-hidden rounded-t-md">
                    {isVideo && videoUrl ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={imageSource}
                        className="h-full w-full object-cover object-center">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={imageSource}
                        alt={card.title || "Tech Solution"}
                        fill
                        className="object-cover transition-all duration-300"
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 100vw"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="flex w-full flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-10 text-center text-xs md:text-lg lg:min-h-[170px] lg:py-0">
                    <p className="mb-1 font-light capitalize">
                      {card.badge || card.title}
                    </p>
                    <h3 className="m-0 text-center font-sans text-base font-normal tracking-[-0.24px] md:text-[20px] md:tracking-[-0.18px]">
                      {card.description}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default Cards;

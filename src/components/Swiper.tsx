"use client";

import { hatton } from "@/fonts";
import { Product } from "@/types";
import { register } from "swiper/element";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { SwiperRef } from "swiper/react";
import { Arrow } from "@/icons";

interface Props {
  products: Product[];
  title: string;
  className?: string;
}

export default function Swiper({ products, title, className }: Props) {
  const swiperRef = useRef<SwiperRef>(null);
  useEffect(() => {
    register();
  }, []);
  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePreviousSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };
  return (
    <div className={`px-6 relative ${className}`}>
      <button
        onClick={handlePreviousSlide}
        className="absolute left-6 z-20 top-1/2 -translate-y-1/2 rotate-180 bg-white/80 p-3 rounded-full hidden sm:block"
      >
        <Arrow className="w-6 h-6" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-6 z-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hidden sm:block"
      >
        <Arrow className="w-6 h-6" />
      </button>
      <h2
        className={`${hatton.className} tracking-wider uppercase text-4xl md:text-5xl text-center py-12`}
      >
        {title}
      </h2>
      {/* @ts-ignore */}
      <swiper-container ref={swiperRef} loop="true" slides-per-view="auto">
        {products.map((leotard) => (
          //@ts-ignore
          <swiper-slide
            key={leotard.name}
            style={{
              display: "flex",
              width: "fit-content",
            }}
          >
            <article
              key={leotard.name}
              className="sm:w-[300px] w-[250px] flex flex-col gap-4 items-center"
            >
              <Image
                src={leotard.image}
                alt={leotard.name}
                width={500}
                height={500}
                className="h-60 w-auto"
              />
              <p
                className={`${hatton.className} text-2xl text-center w-[250px]`}
              >
                {leotard.name}
              </p>
              <span className="font-extralight text-xl mt-auto">
                {leotard.price}
              </span>
            </article>
            {/* @ts-ignore */}
          </swiper-slide>
        ))}
        {/* @ts-ignore */}
      </swiper-container>
    </div>
  );
}

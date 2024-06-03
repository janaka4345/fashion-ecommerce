"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { cn } from "../lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
export default function CustomCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        setApi={setApi}
        className="mx-auto  bg-red-500"
      >
        {/* <!-- Carousel wrapper --> */}
        <CarouselContent className=" relative ml-0  h-[30svh] w-full  rounded-lg sm:h-[70svh]">
          {/* <!-- Items --> */}
          {carousalItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="relative duration-700 ease-in-out"
            >
              <Image
                fill
                src={item.src}
                className=" h-full w-full object-cover"
                alt="images"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="relative flex h-5 w-full justify-center bg-yellow-500">
          <CarouselPrevious
            variant="none"
            className=" relative border-none bg-transparent"
          />
          <div className=" flex items-center justify-center space-x-3">
            {[...Array(count)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  console.log(api);
                  api.scrollTo(i);
                }}
                type="button"
                className={cn("h-3 rounded-full", {
                  "w-4 bg-gray-800": current === i + 1,
                  "w-3 bg-gray-500": current != i + 1,
                })}
                aria-label={`slide${i}`}
              ></button>
            ))}
          </div>
          <CarouselNext
            variant="none"
            className="relative border-none bg-transparent"
          />
        </div>
      </Carousel>
    </>
  );
}

const carousalItems = [
  {
    id: 1,
    src: "/cat1.jpg",
  },
  {
    id: 2,
    src: "/cat2.jpg",
  },
  {
    id: 3,
    src: "/cat1.jpg",
  },
  {
    id: 4,
    src: "/cat2.jpg",
  },
  {
    id: 5,
    src: "/cat1.jpg",
  },
];

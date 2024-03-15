"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
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
        className="mx-auto mt-14    bg-red-500"
      >
        {/* <!-- Carousel wrapper --> */}
        <CarouselContent className=" relative  h-[60svh] w-fit rounded-lg">
          {/* <!-- Item 1 --> */}
          <CarouselItem className="  duration-700 ease-in-out">
            <img
              src="/carousel-1.svg"
              className=" h-full w-full object-cover"
              alt="images"
            />
          </CarouselItem>
          {/* <!-- Item 2 --> */}
          <CarouselItem className="  duration-700 ease-in-out">
            <img
              src="/carousel-2.svg"
              className="ml-4 h-full w-full object-cover"
              alt="images"
            />
          </CarouselItem>
          {/* <!-- Item 3 --> */}
          <CarouselItem className="  duration-700 ease-in-out">
            <img
              src="/carousel-3.svg"
              className="ml-4 h-full w-full object-cover"
              alt="images"
            />
          </CarouselItem>
          {/* <!-- Item 4 --> */}
          <CarouselItem className="  duration-700 ease-in-out">
            <img
              src="/carousel-4.svg"
              className="ml-4 h-full w-full object-cover"
              alt="images"
            />
          </CarouselItem>
          {/* <!-- Item 5 --> */}
          <CarouselItem className="  duration-700 ease-in-out">
            <img
              src="/carousel-5.svg"
              className="ml-4 h-full w-full object-cover"
              alt="images"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="relative flex h-5 w-full justify-center bg-green-500">
          <CarouselPrevious className="left-1/4 border-none bg-transparent" />
          <div className=" flex items-center justify-center space-x-3">
            {[...Array(count)].map((_, i) => (
              <button
                onClick={() => {
                  console.log(api);
                  api.scrollTo(i);
                }}
                type="button"
                className={cn("h-3 rounded-full", {
                  "w-4 bg-gray-800": current === i + 1,
                  "w-3 bg-gray-500": current != i + 1,
                })}
                aria-label="Slide 1"
              ></button>
            ))}

            {/* <button
              onClick={() => api.scrollTo(1)}
              type="button"
              className="h-3 w-3 rounded-full bg-red-500"
              aria-label="Slide 2"
            ></button>
             <button
              type="button"
              className="h-3 w-3 rounded-full bg-black"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-black"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full bg-black"
              aria-label="Slide 5"
            ></button> */}
          </div>
          <CarouselNext className="left-3/4 border-none bg-transparent" />
        </div>
      </Carousel>
    </>
  );
}

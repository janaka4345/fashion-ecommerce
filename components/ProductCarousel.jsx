"use client";

import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";

export default function ProductCarousel({ images = [] }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      className="mx-auto h-full w-full max-w-screen-2xl"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative flex  aspect-square  items-center justify-center p-0">
                <Image
                  className="h-full w-full object-contain "
                  src={image.url}
                  alt={image.alt}
                  // width={100}
                  // height={100}
                  fill
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" flex items-center justify-center space-x-3 pt-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => {
              api.scrollTo(i);
            }}
            type="button"
            className="relative h-20 w-[20%] rounded-sm"
            aria-label={`slide${i}`}
          >
            <Image
              className={cn(
                "h-full w-full object-contain transition-all duration-300",
                {
                  "scale-125": current === i + 1,
                  " after:absolute after:inset-0 after:bg-black/65":
                    current != i + 1,
                },
              )}
              src={image.url}
              alt={image.alt}
              // width={100}
              // height={100}
              fill
            />
          </button>
        ))}
      </div>
    </Carousel>
  );
}

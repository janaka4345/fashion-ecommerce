"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
export default function TestCartComp() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("ran1");
    console.log({ api, current, count });

    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      // console.log("ran2");
      // console.log({ api, current, count });
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className=" mt-52">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          // loop: "true",
        }}
        className="Carousel mx-auto h-52 w-full  max-w-sm "
      >
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent className="CarouselContent">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="CarouselItem translate-y-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex aspect-square h-32 items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

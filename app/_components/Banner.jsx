import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Banner() {
  return (
    <section className="flex   flex-col gap-4 bg-green-200 sm:flex-row ">
      <div className="min-h-28 sm:w-1/3">hi</div>
      <div className="mx-8 sm:w-2/3">
        <Carousel className=" w-full">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className=" p-1 ">
                  <Card className="m-0 h-80">
                    <CardContent className="flex  items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

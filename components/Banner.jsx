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
    <section className="flex  w-full flex-row gap-4 bg-green-200 ">
      <div className="w-1/2">hi</div>
      <div className="w-1/2">
        <Carousel className="w-full max-w-xs">
          <CarouselContent className="w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className=" p-1">
                  <Card className="m-0">
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

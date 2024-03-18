import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="mt-10 grid h-[60svh] w-full grid-cols-2 grid-rows-3 gap-2 px-4 sm:grid-cols-3 sm:grid-rows-2">
      <div className="group  relative col-start-1 col-end-3  row-start-1 row-end-2 flex flex-col items-center justify-center overflow-hidden    sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2">
        {/* TODO lint images */}
        <Image
          className="absolute inset-0 -z-50 object-cover duration-300 group-hover:scale-125"
          src="/cat1.jpg"
          fill
        ></Image>
        <h1 className="text-lg text-white">Leather Belt</h1>
        <Button>Shop Now</Button>
      </div>
      <div className="group relative col-start-1 col-end-2 row-start-2 row-end-3  flex flex-col items-center justify-center overflow-hidden  sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2">
        <Image
          className="absolute inset-0 -z-50 object-cover duration-300 group-hover:scale-125"
          src="/cat2.jpg"
          fill
        ></Image>
        <h1 className="text-lg text-white">Leather Belt</h1>
        <Button>Shop Now</Button>
      </div>
      <div className="group relative col-start-2 col-end-3 row-start-2 row-end-3  flex flex-col items-center justify-center overflow-hidden  sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3">
        <Image
          className="absolute inset-0 -z-50 object-cover duration-300 group-hover:scale-125"
          src="/cat3.jpg"
          fill
        ></Image>
        <h1 className="text-lg text-white">Leather Belt</h1>
        <Button>Shop Now</Button>
      </div>
      <div className="group relative col-start-1 col-end-3 row-start-3 row-end-4  flex flex-col items-center justify-center overflow-hidden  sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-3">
        <Image
          className="absolute inset-0 -z-50 object-cover duration-300 group-hover:scale-125"
          src="/cat4.jpg"
          fill
        ></Image>
        <h1 className="text-lg text-white">Leather Belt</h1>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
}

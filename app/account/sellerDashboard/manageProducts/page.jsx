import PriceCard from "../../../../components/PriceCard";
import { Button } from "../../../../components/ui/button";
import { product } from "../../../testall/_data/data";

export default function page() {
  return (
    <div className="group relative  h-fit w-fit cursor-pointer  ">
      <div className="absolute inset-0 z-50 hidden flex-col  items-center justify-center gap-4 px-4 group-hover:flex  group-hover:bg-red-300/50">
        <Button className="w-full hover:bg-black">Edit</Button>
        <Button className="w-full hover:bg-black">Delete</Button>
      </div>
      <PriceCard product={product} />
    </div>
  );
}

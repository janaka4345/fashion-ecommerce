import CustomCarousel from "@/components/CustomCarousel";
export default function Banner() {
  return (
    <section className=" flex flex-col gap-2 bg-green-200 sm:flex-row  sm:gap-4">
      <div className=" w-full bg-purple-400 sm:w-1/3">hi</div>
      <div className="relative w-full bg-blue-400 sm:w-2/3">
        <CustomCarousel />
      </div>
    </section>
  );
}

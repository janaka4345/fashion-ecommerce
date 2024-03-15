import CustomCarousel from "@/components/CustomCarousel";
export default function Banner() {
  return (
    <section className="flex   flex-col gap-4 bg-green-200 sm:flex-row ">
      <div className="min-h-28 sm:w-1/3">hi</div>
      <div className="mx-8 sm:w-2/3">
        <CustomCarousel />
      </div>
    </section>
  );
}

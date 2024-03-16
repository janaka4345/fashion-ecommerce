export default function Categories() {
  return (
    <div className="mt-10 grid h-[60svh] w-full grid-cols-2 grid-rows-3 gap-2 px-4 sm:grid-cols-3 sm:grid-rows-2">
      <div className="col-start-1 col-end-3 row-start-1 row-end-2 bg-green-500 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2"></div>
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-green-500 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2"></div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 bg-green-500 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3"></div>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 bg-green-500 sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-3"></div>
    </div>
  );
}

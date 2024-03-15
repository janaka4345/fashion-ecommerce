import { Icon } from "./Icons";

export default function Cart() {
  return (
    <div className="relative flex flex-col items-center justify-center ">
      <Icon className=" h-8 w-8" name="shopping-cart" />
      <div className="absolute -end-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900">
        20
      </div>
    </div>
  );
}

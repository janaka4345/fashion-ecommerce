import { Icon } from "./Icons";

export default function Cart() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Icon className=" h-8 w-8" name="shopping-cart" />
      <h3>$0.00</h3>
    </div>
  );
}

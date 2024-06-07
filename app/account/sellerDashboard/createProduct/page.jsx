import { auth } from "../../../../auth";
import { getCategory } from "../../../../serverActions/category/getCategory";
import CreateProduct from "../../_components/CreateProduct";

export default async function page() {
  const categories = await getCategory();
  const session = await auth();
  // console.log(categories);
  return (
    <div className="w-full bg-green-400">
      <CreateProduct
        categories={categories?.response}
        session={session?.user}
      />
    </div>
  );
}

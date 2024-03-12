import { Icon } from "./Icons";

export default function Header() {
  return (
    <section className="flex flex-row items-center justify-between gap-2 bg-red-500  pt-10">
      <div className=" w-1/3 ">
        <form className="mx-auto max-w-md px-4">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon name="search" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            {/* <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
          </div>
        </form>
      </div>
      <div className=" h-40 w-1/3 bg-green-500 ">logo</div>
      <div className=" w-1/3 ">
        <Icon className=" h-10 w-10" name="shopping-cart" />
      </div>
    </section>
  );
}

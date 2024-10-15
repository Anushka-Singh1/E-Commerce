import React from "react";
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import { useFilterContext } from "../Context/FilterContext";

function SortSection() {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-full">
        <div className="w-1/2 md:w-1/4 text-center">
          <button
            className={`rounded-lg m-2 ${
              grid_view
                ? "bg-fuchsia-800 text-white"
                : "bg-gray-400 text-fuchsia-800"
            }`}
            onClick={setGridView}
          >
            <HiViewGrid className="h-4 w-6 m-2" />
          </button>
          <button
            className={`rounded-lg ${
              !grid_view
                ? "bg-fuchsia-800 text-white"
                : "bg-gray-400 text-fuchsia-800"
            }`}
            onClick={setListView}
          >
            <MdViewList className="h-4 w-6 m-2" />
          </button>
        </div>
        <div className="w-0 md:w-1/4 self-center text-center hidden md:block">
          <p>{filter_products ? filter_products.length : 0} Products Found</p>
        </div>
        <div className="w-1/2 md:w-1/4 text-center">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="p-2 rounded-lg bg-fuchsia-800 text-white"
              onChange={sorting}
            >
              <option value="price-lowest">Price (Lowest)</option>
              <option value="price-highest">Price (Highest)</option>
              <option value="name-a">Name (A-Z)</option>
              <option value="name-z">Name (Z-A)</option>
            </select>
          </form>
        </div>
      </div>
      <div className="self-center text-center md:hidden">
        <p>{filter_products ? filter_products.length : 0} Products Found</p>
      </div>
    </div>
  );
}

export default SortSection;

import React from "react";
import FilterSection from "../Components/FilterSection";
import SortSection from "../Components/SortSection";
import MainProductList from "../Components/MainProductList";

function Products() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 pl-[2.5%] pr-[2.5%] pb-[2.5%] pt-48 h-screen overflow-hidden">
        <div className="lg:col-span-1 bg-gray-200 p-4 sticky top-0 rounded-xl overflow-auto max-h-screen">
          <FilterSection />
        </div>
        <div className="lg:col-span-5 bg-gray-100 rounded-xl scrollbar-hide overflow-auto">
          <div className="product-view-sort">
            <div className="sticky shadow-md top-0 p-4 rounded-t-md bg-gray-100 z-[99999] overflow-hidden">
              <div className="bg-gray-100 h-8 lg:h-10 rounded-xl ">
                <SortSection />
              </div>
            </div>
            <div className="p-4 overscroll-auto focus:overscroll-contain">
              <MainProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

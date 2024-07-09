import React from 'react'
import FilterSection from '../Components/FilterSection'
import SortSection from '../Components/SortSection'
import MainProductList from '../Components/MainProductList'

function Products() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 pl-[2.5%] pr-[2.5%] pb-[2.5%] pt-56 h-screen overflow-hidden">
        <div className="lg:col-span-1 bg-gray-200 p-4 sticky top-0 rounded-xl overflow-auto">
            <FilterSection />    
        </div>
        <div className="lg:col-span-5 bg-gray-100 sticky rounded-xl overflow-auto">
          <div className="product-view-sort">
            <div className="sticky top-0 overflow-hidden bg-gray-100 p-4">
              <div className="sort-filter h-24 lg:h-28 rounded-xl">
                <SortSection/>
              </div>
            </div>
            <div className="main-product p-4 overflow-hidden bg-amber-300">
              <MainProductList/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products

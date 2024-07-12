import React from 'react';
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import { useFilterContext } from '../Context/FilterContext';

function SortSection() {
  const { grid_view, setGridView, setListView, filter_products } = useFilterContext();
  
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="w-1/4 text-left ml-4">
        <button className={`rounded-lg m-2 ${grid_view ? "bg-black text-white" : "bg-gray-400 text-black"}`}
           onClick={setGridView}>
          <HiViewGrid className='h-4 w-6 m-2'/>
        </button>
        <button className={`rounded-lg ${!grid_view ? "bg-black text-white" : "bg-gray-400 text-black"}`}
        onClick={setListView}>
          <MdViewList className='h-4 w-6 m-2'/>
        </button>
      </div>
      <div className="w-1/4 text-center hidden md:block">
        <p>{filter_products.length} Products Found</p>
      </div>
      <div className="w-1/4 text-right mr-4">abc</div>
    </div>
  );
}

export default SortSection;

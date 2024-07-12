import React from 'react';
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import { useFilterContext } from '../Context/FilterContext';

function SortSection() {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();
  
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
        <p>{filter_products ? filter_products.length : 0} Products Found</p>
      </div>
      <div className="w-1/4 text-right mr-8">
        <form action='#'>
          <label htmlFor='sort'></label>
          <select name='sort' id='sort' className='p-2 rounded-lg' onChange={sorting}>
            <option value='price-lowest'>Price (Lowest)</option>
            <option value='price-highest'>Price (Highest)</option>
            <option value='name-a'>Name (A-Z)</option>
            <option value='name-z'>Name (Z-A)</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default SortSection;

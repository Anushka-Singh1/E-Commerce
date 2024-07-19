import React from 'react';
import { useFilterContext } from '../Context/FilterContext';

function FilterSection() {
  const {
    filters: { text, category, company, colors },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  // To get data of each field
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if(property === 'colors') {
     return (newVal=["All", ...new Set([].concat(...newVal))]);
    }
    else{
      return (newVal = ["All", ...new Set(newVal)]);
    }
  };
 
  // Filter section unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className='border-2 border-black focus:outline-none focus:border-fuchsia-800 focus:ring-0'
            type="text"
            name="text"
            placeholder='Search...'
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div>
        <h3 className='text-center mb-2 mt-2 font-serif'>Category</h3>
        <div className="flex flex-col bg-fuchsia-800 rounded-lg text-white">
          {categoryOnlyData.map((curElem, index) => {
            const isSelected = category === curElem;
            return (
              <button
                key={index}
                type='button'
                onClick={updateFilterValue}
                name="category"
                value={curElem}
                className={`focus:outline-none focus:border-fuchsia-800 focus:ring-0 my-1 font-serif ${isSelected ? 'bg-white text-fuchsia-800' : ''}`}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className='text-center mb-2 mt-2 font-serif'>Company</h3>
        <div className="flex justify-center">
          <form action='#' className="w-4/5">
            <select
              className="w-full border-2 border-black focus:outline-none focus:border-fuchsia-800 focus:ring-0"
              name="company"
              id='company'
              onChange={updateFilterValue}
              value={company}
            >
              {companyData.map((curElem, index) => {
                return (
                  <option
                    key={index}
                    name="company"
                    value={curElem}
                    className={company === curElem ? 'bg-fuchsia-800 text-white' : ''}
                  >
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div>
        <h3 className='text-center mb-2 mt-2 font-serif'>Colors</h3>
<div className="flex flex-wrap justify-center">
  {colorsData.map((curElem, index) => {
    const isSelected = colors === curElem;
    return (
      <button 
        key={index}
        type='button'
        onClick={updateFilterValue}
        name="colors"
        value={curElem}
        className={`focus:outline-none focus:border-fuchsia-800 focus:ring-0 my-1 font-serif rounded-full h-4 w-4 mx-1 ${isSelected ? 'ring-2 ring-fuchsia-800' : ''}`}
        style={{
          backgroundColor: curElem
        }}
      >
      </button>
              );
            })}
            </div>
        </div>
       </div>
    </>
  );
}

export default FilterSection;

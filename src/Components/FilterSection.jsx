import React from 'react'
import { useFilterContext } from '../Context/FilterContext'

function FilterSection() {
  const {
    filters: { text },
    updateFilterValue
  } = useFilterContext();

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className='border-2 border-black focus:outline-none focus:border-fuchsia-800 focus:ring-0'
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
        />
      </form>
    </div>
  );
}

export default FilterSection

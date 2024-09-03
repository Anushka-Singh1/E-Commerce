// import React from 'react';
// import { useFilterContext } from '../Context/FilterContext';
// import GridView from './GridView';
// import ListView from './ListView';

// function MainProductList() {
//   const { filter_products, grid_view } = useFilterContext();


//   if (grid_view) {
//     return <GridView products={filter_products} />;
//   } else {
//     return <ListView products={filter_products} />;
//   }
// }

// export default MainProductList;

import React from 'react';
import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';

function MainProductList() {
  const { filter_products, grid_view } = useSelector((state) => state.filters);

  if (grid_view) {
    return <GridView products={filter_products} />;
  } else {
    return <ListView products={filter_products} />;
  }
}

export default MainProductList;

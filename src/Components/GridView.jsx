import React from 'react';
import ProductCard from './ProductCard';

function GridView({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-auto">
      {products.map((curElem) => (
        <ProductCard key={curElem.id} {...curElem} />
      ))}
    </div>
  );
}

export default GridView;

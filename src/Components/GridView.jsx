import React from "react";
import ProductCard from "./ProductCard";

function GridView({ products }) {
  if (!products || !Array.isArray(products)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sticky grid grid-cols-1 min-[720px]:grid-cols-2 lg:grid-cols-3 gap-4 h-full overflow-auto">
      {products.map((curElem) => (
        <ProductCard key={curElem.id} {...curElem} />
      ))}
    </div>
  );
}

export default GridView;

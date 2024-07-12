import React from 'react';
import FormatPrice from '../Helper/PriceFormat';
import { NavLink } from 'react-router-dom';

function ListView({ products }) {
  return (
    <div className="products-container h-full overflow-auto">
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div key={id} className="flex flex-row lg:flex-nowrap gap-4 bg-gray-400 m-4 p-4 rounded-lg">
            <img src={image} alt={name} className="w-1/3 h-auto object-cover rounded-lg" />
            <div className="product-details flex flex-col justify-between p-4">
              <h1 className="text-xl font-semibold font-serif mb-2">{name}</h1>
              <FormatPrice price={price} />
              <p className="text-base">{description}</p>
              <NavLink to={`/SingleProduct/${id}`}>
              <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-lg mt-4">View Product</button>
              </NavLink>
             
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;

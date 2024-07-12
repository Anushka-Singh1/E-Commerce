import React from 'react';
import FormatPrice from '../Helper/PriceFormat';
import { NavLink } from 'react-router-dom';

function ListView({ products }) {
  return (
    <div className="products-container h-full overflow-auto">
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div key={id} className="flex flex-col md:flex-row gap-4 bg-gray-400 m-4 p-4 rounded-lg">
            <img src={image} alt={name} className="w-full md:w-1/3 h-auto object-cover rounded-lg" />
            <div className="product-details flex flex-col justify-between p-4 w-full">
              <h1 className="text-lg md:text-xl font-semibold font-serif mb-2">{name}</h1>
              <div className="text-base md:text-lg text-fuchsia-600 font-bold mb-2">
                <FormatPrice price={price} />
              </div>
              <p className="text-sm md:text-base mb-2">{description}</p>
              <NavLink to={`/SingleProduct/${id}`}>
                <button className="bg-fuchsia-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-fuchsia-600 transition duration-300">
                  View Product
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;

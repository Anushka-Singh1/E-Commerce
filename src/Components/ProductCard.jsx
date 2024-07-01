import React from 'react';
import { NavLink } from 'react-router-dom';

function ProductCard({ id, name, image, price, category }) {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <NavLink to={`/SingleProduct/${id}`}>
          <div className="bg-fuchsia-100 rounded-lg text-lg text-black px-10 py-4 font-serif text-center flex items-center justify-center w-full max-w-[300px]">
            <div className="relative w-full flex justify-center items-center">
              <img
                src={image}
                alt={name}
                className="h-40 w-56 border-4 border-fuchsia-800 shadow-md rounded-lg transition duration-300 ease-in-out"
              />
              <div className="absolute top-2 right-2 bg-white opacity-50 text-grey font-semibold text-sm px-3 py-1 rounded-lg shadow-md">
                {category}
              </div>
              <div className="absolute inset-0 bg-fuchsia-900 bg-opacity-50 flex flex-col gap-2 items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                <div>{name}</div>
                <div className="text-lg font-semibold">Price: {price}</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ProductCard;

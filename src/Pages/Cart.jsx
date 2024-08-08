import React from 'react';
import { useCartContext } from '../Context/cartContext';
import FormatPrice from '../Helper/PriceFormat';

function Cart() {
  const { cart } = useCartContext();

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <div className='mt-36 ml-10 mr-10'>
          <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 bg-gray-200 p-4 font-serif'>
            <h2 className='text-lg font-semibold col-span-1'>Image</h2>
            <h2 className='text-lg font-semibold col-span-1'>Name</h2>
            <h2 className='text-lg font-semibold hidden sm:block col-span-1'>Price</h2>
            <h2 className='text-lg font-semibold hidden sm:block col-span-1'>Quantity</h2>
            <h2 className='text-lg font-semibold hidden sm:block col-span-1'>Color</h2>
          </div>
          {cart.map((product) => {
            const { id, name, amount, image, price, activeColor } = product;
            return (
              <div key={id} className='grid grid-cols-2 sm:grid-cols-5 gap-4 bg-gray-100 rounded-lg p-4 font-serif items-center'>
                <img src={image} alt={name} className='w-24 h-24 object-cover rounded-lg col-span-1' />
                <p className='text-lg col-span-1'>{name}</p>
                <p className='text-lg hidden sm:block col-span-1'><FormatPrice price={price}/></p>
                <p className='text-lg hidden sm:block col-span-1'>{amount}</p>
                <div className='flex items-center col-span-1 hidden sm:block'>
                  <div
                    className='w-4 h-4 rounded-full'
                    style={{ backgroundColor: activeColor }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;

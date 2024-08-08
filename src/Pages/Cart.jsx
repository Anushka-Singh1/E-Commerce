import React from 'react';
import { useCartContext } from '../Context/cartContext';
import FormatPrice from '../Helper/PriceFormat';
import CartAmountToggle from '../Components/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';


function Cart() {
  const { cart, removeItem } = useCartContext();

  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <div className='mt-36 ml-10 mr-10'>
          <div className='grid grid-cols-4 sm:grid-cols-6 gap-6 bg-gray-200 p-4 font-serif'>
            <h2 className='text-lg font-semibold col-span-2'>Item</h2>
            <h2 className='text-lg font-semibold hidden sm:block'>Price</h2>
            <h2 className='text-lg font-semibold hidden sm:block'>Quantity</h2>
            <h2 className='text-lg font-semibold hidden sm:block'>Subtotal</h2>
            <h2 className='text-lg font-semibold'>Remove</h2>
          </div>
          {cart.map((product) => {
            const { id, name, amount, image, price, activeColor } = product;
            return (
              <div key={id} className='grid grid-cols-4 sm:grid-cols-6 gap-5 bg-gray-100 rounded-lg p-4 font-serif items-center'>
                <div className='col-span-2 flex items-center'>
                  <img src={image} alt={name} className='w-24 h-24 object-cover rounded-lg mr-4' />
                  <div>
                    <p className='text-lg'>{name}</p>
                    <div className='flex items-center mt-1'>
                      <p className='text-lg mr-2'>Color:</p>
                      <div
                        className='w-4 h-4 rounded-full'
                        style={{ backgroundColor: activeColor }}
                      ></div>
                    </div>
                  </div>
                </div>
                <p className='text-lg hidden sm:block'><FormatPrice price={price}/></p>
                <p className='text-lg hidden sm:block'><CartAmountToggle
                  amount={amount}
                  setDecrease={setDecrease}
                  setIncrease={setIncrease}
                /></p>
                <p className='text-lg hidden sm:block'><FormatPrice price={price * amount}/></p>
                <div className='flex justify-left'>
                  <button onClick={()=>removeItem(id)}>
                    <FaTrash className='text-red-500 hover:text-red-700 cursor-pointer' />
                  </button>
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

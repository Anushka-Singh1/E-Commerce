import React from 'react';
import { useCartContext } from '../Context/cartContext';
import FormatPrice from '../Helper/PriceFormat';
import CartAmountToggle from '../Components/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Cart() {
  const { cart, removeItem, clearCart, setDecrease, setIncrease, total_amount, shipping_fee } = useCartContext();
  const{isAuthenticated, user}=useAuth0();

  
  if(cart.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-2xl font-semibold'>Your cart is empty</h2>
        <NavLink to='/Products'>
          <button className='bg-fuchsia-800 text-white px-4 py-2 rounded-lg mt-4'>
            Go to Products
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <div className='mt-36 ml-10 mr-10'>
        <div className='flex justify-end my-2 font-serif text-gray-800 underline italic'>
          {isAuthenticated && <h2 className='text-m font-medium'>Welcome, {user.name}!</h2>}
        </div>
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
                <div className='text-lg hidden sm:block'><CartAmountToggle
                  amount={amount}
                  setDecrease={()=>setDecrease(id)}
                  setIncrease={()=>setIncrease(id)}
                /></div>
                <p className='text-lg hidden sm:block'><FormatPrice price={price * amount}/></p>
                <div className='flex justify-left'>
                  <button onClick={() => removeItem(id)}>
                    <FaTrash className='text-red-500 hover:text-red-700 cursor-pointer' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="border-t-2 border-gray-400 my-4 mx-10" />
        <div className="flex justify-between mx-10">
          <NavLink to='/Products'>
            <button className='bg-fuchsia-800 text-white px-4 py-2 rounded-lg'>
              Continue Shopping
            </button>
          </NavLink>
          <button onClick={clearCart} className="bg-fuchsia-800 text-white px-4 py-2 rounded-lg">
            Clear Cart
          </button>
        </div>
        <div className="flex justify-end mx-10 mt-4">
  <div className="space-y-4 bg-gray-100 p-4 font-serif ">
    <div className="flex justify-between">
      <p>Subtotal:</p>
      <p><FormatPrice price={total_amount}/></p>
    </div>
    <div className="flex justify-between gap-4">
      <p>Shipping Fee:</p>
      <p><FormatPrice price={shipping_fee}/></p>
    </div>
    <hr className="border-t-2 border-gray-400 my-4 " />
    <div className="flex justify-between">
      <p>Total:</p>
      <p><FormatPrice price={total_amount + shipping_fee}/></p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Cart;

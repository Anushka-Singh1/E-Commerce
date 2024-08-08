import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function CartAmountToggle({amount, setDecrease, setIncrease}) {
  return (
    <>
      <div className='flex justify-item-center gap-4 mt-4 mb-4'>
        <button onClick={setDecrease} className=''><FaMinus className='h-6'/></button>
        <span>{amount}</span>
        <button onClick={setIncrease} className=''><FaPlus className='h-4'/></button>
      </div>
      {/* <NavLink to='/cart' className='bg-fuchsia-800 text-white px-4 py-2 rounded-lg mt-4'>Add to Cart</NavLink> */}
    </>
  )
}

export default CartAmountToggle

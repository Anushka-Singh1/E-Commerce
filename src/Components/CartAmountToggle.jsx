import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

function CartAmountToggle({amount, setDecrease, setIncrease}) {
  return (
    <>
      <div className='flex justify-item-center gap-4 mt-4 mb-4'>
        <button onClick={setDecrease} className=''><FaMinus className='h-6'/></button>
        <span>{amount}</span>
        <button onClick={setIncrease} className=''><FaPlus className='h-4'/></button>
      </div>
    </>
  )
}

export default CartAmountToggle

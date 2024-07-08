import React, { useState } from 'react';
import CartAmountToggle from './CartAmountToggle';

function AddToCart({ product }) {
    const { id, colors, stock } = product;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };


  const setDecrease = () => {
    amount >1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <>
      <p className="mb-4">Colors:</p>
      <div className="flex gap-2">
        {colors.map((curColor, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(curColor)}
            className={`w-6 h-6 rounded-full border-2 
              ${activeColor === curColor ? 'opacity-100 border-black' : 'opacity-70 border-transparent'}`}
            style={{ backgroundColor: curColor }}>
          </button>
        ))}
      </div>
      {/** Add to Cart */}
      <CartAmountToggle
       amount={amount}
       setDecrease={setDecrease}
       setIncrease={setIncrease}
       />
    </>
  );
}

export default AddToCart;

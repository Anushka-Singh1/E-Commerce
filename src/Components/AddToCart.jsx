import React, { useState } from 'react';

function AddToCart({ product }) {
    const { id, colors, stock } = product;
  const [activeColor, setActiveColor] = useState(colors[0]);
 

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div>
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
    </div>
  );
}

export default AddToCart;

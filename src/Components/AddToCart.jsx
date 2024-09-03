// import React, { useState } from "react";
// import CartAmountToggle from "./CartAmountToggle";
// import { NavLink } from "react-router-dom";
// import { useCartContext } from "../Context/cartContext";

// function AddToCart({ product }) {
//   const { addToCart } = useCartContext();
//   const { id, colors, stock } = product;
//   const [activeColor, setActiveColor] = useState(colors[0]);
//   const [amount, setAmount] = useState(1);

//   console.log("AddToCart product:", product); //debugging

//   const handleColorClick = (color) => {
//     setActiveColor(color);
//   };

//   const setDecrease = () => {
//     amount > 1 ? setAmount(amount - 1) : setAmount(1);
//   };

//   const setIncrease = () => {
//     amount < stock ? setAmount(amount + 1) : setAmount(stock);
//   };

//   return (
//     <>
//       <p className="mb-4">Colors:</p>
//       <div className="flex gap-2">
//         {colors.map((curColor, index) => (
//           <button
//             key={index}
//             onClick={() => handleColorClick(curColor)}
//             className={`w-6 h-6 rounded-full border-2 
//               ${
//                 activeColor === curColor
//                   ? "opacity-100 border-black"
//                   : "opacity-70 border-transparent"
//               }`}
//             style={{ backgroundColor: curColor }}
//           ></button>
//         ))}
//       </div>
//       <CartAmountToggle
//         amount={amount}
//         setDecrease={setDecrease}
//         setIncrease={setIncrease}
//       />
//       <NavLink
//         to="/cart"
//         onClick={() => addToCart(id, amount, activeColor, product)}
//         className="bg-fuchsia-800 text-white px-4 py-2 rounded-lg mt-4"
//       >
//         Add to Cart
//       </NavLink>
//     </>
//   );
// }

// export default AddToCart;

import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToCart } from "./Slices/CartSlice";
import  {addToCart}  from "../store/Slices/CartSlice";

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const { id, colors, stock } = product;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const setDecrease = () => {
    setAmount(amount > 1 ? amount - 1 : 1);
  };

  const setIncrease = () => {
    setAmount(amount < stock ? amount + 1 : stock);
  };

  return (
    <>
      <p className="mb-4">Colors:</p>
      <div className="flex gap-2">
        {colors.map((curColor, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(curColor)}
            className={`w-6 h-6 rounded-full border-2 
              ${
                activeColor === curColor
                  ? "opacity-100 border-black"
                  : "opacity-70 border-transparent"
              }`}
            style={{ backgroundColor: curColor }}
          ></button>
        ))}
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink
        to="/cart"
        onClick={() => dispatch(addToCart({ id, amount, activeColor, product }))}
        className="bg-fuchsia-800 text-white px-4 py-2 rounded-lg mt-4"
      >
        Add to Cart
      </NavLink>
    </>
  );
}

export default AddToCart;


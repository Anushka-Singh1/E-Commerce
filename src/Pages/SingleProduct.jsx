// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useProductContext } from '../Context/ProductContext';
// import PageNavigation from '../Components/PageNavigation';
// import SinglePageImage from '../Components/SinglePageImage';
// import FormatPrice from '../Helper/PriceFormat';
// import { FaTruckFast } from "react-icons/fa6";
// import { TbReplace } from "react-icons/tb";
// import { PiShieldCheckeredFill } from "react-icons/pi";
// import Star from '../Components/Star';
// import AddToCart from '../Components/AddToCart';

// const API = "https://api.pujakaitem.com/api/products";

// function SingleProduct() {
//   const { singleProduct, isSingleLoading, getSingleProduct } = useProductContext();
//   const { id } = useParams();

//   const {
//     id: productId, name, company, price, description, category, stock, stars, reviews, image
//   } = singleProduct;

//   useEffect(() => {
//     getSingleProduct(`${API}?id=${id}`);
//   }, []);

//   if (isSingleLoading) {
//     return <div className="p-4 mx-[5vh] mt-4 bg-fuchsia-100 rounded-lg font-serif font-semibold text-center">......loading</div>;
//   }

//   const icons = [
//     { icon: <FaTruckFast className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "Fast Delivery" },
//     { icon: <TbReplace className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "Easy Replacement" },
//     { icon: <FaTruckFast className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "Free Shipping" },
//     { icon: <PiShieldCheckeredFill className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "2 months warranty" }
//   ];

//   return (
//     <div className="p-6 mt-40">
//       <PageNavigation title={name} />
//       <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-6">
//         {/* Left Side: Images */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <SinglePageImage images={image} />
//         </div>

//         {/* Right Side: Details */}
//         <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md mr-[1.5%]">
//           <h1 className="text-2xl mb-4">{name}</h1>
//           <Star stars={stars} reviews={reviews}/>
//           <p className="text-gray-700 mb-4">MRP: <span className="font-bold"><del> <FormatPrice price={price + 2500} /></del></span></p>
//           <p className="text-fuchsia-600 mb-4">Deal of the Day: <span className="font-bold"><FormatPrice price={price} /></span></p>
//           <p className="text-gray-700 mb-4">{description}</p>
          
//           <div className="flex flex-wrap justify-between items-center m-6 gap-4">
//             {icons.map((item, index) => (
//               <div className="flex flex-col items-center text-center" key={index}>
//                 {item.icon}
//                 <span className="mt-2">{item.text}</span>
//               </div>
//             ))}
//           </div>
//           <p className="text-gray-700 mb-4">Available: <span className="font-bold">{stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>
//           <p className="text-gray-700 mb-4">Brand: <span className="font-bold">{company}</span></p>
//           <hr className="border-2 border-black my-4 w-90 max-w-[100%]"/>
//           {stock>0 && <AddToCart product={singleProduct} />}
//         </div>
       
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/Slices/ProductSlice';
import PageNavigation from '../Components/PageNavigation';
import SinglePageImage from '../Components/SinglePageImage';
import FormatPrice from '../Helper/PriceFormat';
import { FaTruckFast } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { PiShieldCheckeredFill } from "react-icons/pi";
import Star from '../Components/Star';
import AddToCart from '../Components/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleProduct, isSingleLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(`${API}?id=${id}`));
  }, [dispatch, id]);

  if (isSingleLoading) {
    return <div className="p-4 mx-[5vh] mt-4 bg-fuchsia-100 rounded-lg font-serif font-semibold text-center">......loading</div>;
  }

  // Destructure singleProduct properties
  const {
    name,
    image,
    stars,
    reviews,
    price,
    description,
    stock,
    company
  } = singleProduct || {};

  // Ensure singleProduct is defined before rendering the component
  if (!singleProduct) {
    return <div>Error: Product not found</div>;
  }

  const icons = [
    { icon: <FaTruckFast className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "Fast Delivery" },
    { icon: <TbReplace className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "Easy Replacement" },
    { icon: <FaTruckFast className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "Free Shipping" },
    { icon: <PiShieldCheckeredFill className="h-8 w-8 bg-gray-300 p-2 rounded-lg" />, text: "2 months warranty" }
  ];

  return (
    <div className="p-6 mt-40">
      <PageNavigation title={name} />
      <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-6">
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <SinglePageImage images={image} />
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md mr-[1.5%]">
          <h1 className="text-2xl mb-4">{name}</h1>
          <Star stars={stars} reviews={reviews} />
          <p className="text-gray-700 mb-4">
            MRP: <span className="font-bold"><del><FormatPrice price={price + 2500} /></del></span>
          </p>
          <p className="text-fuchsia-600 mb-4">
            Deal of the Day: <span className="font-bold"><FormatPrice price={price} /></span>
          </p>
          <p className="text-gray-700 mb-4">{description}</p>
          
          <div className="flex flex-wrap justify-between items-center m-6 gap-4">
            {icons.map((item, index) => (
              <div className="flex flex-col items-center text-center" key={index}>
                {item.icon}
                <span className="mt-2">{item.text}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            Available: <span className="font-bold">{stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </p>
          <p className="text-gray-700 mb-4">Brand: <span className="font-bold">{company}</span></p>
          <hr className="border-2 border-black my-4 w-90 max-w-[100%]" />
          {stock > 0 && <AddToCart product={singleProduct} />}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;


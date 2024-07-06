import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import PageNavigation from '../Components/PageNavigation';
import SinglePageImage from '../Components/SinglePageImage';

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { singleProduct, isSingleLoading, getSingleProduct } = useProductContext();
  const { id } = useParams();

  const {
    id: productId, name, company, price, description, category, stock, stars, reviews, image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="p-4 mx-[5vh] mt-4 bg-fuchsia-100 rounded-lg font-serif font-semibold text-center">......loading</div>;
  }

  return (
    <div className="p-6 mt-40">
      <PageNavigation title={name} />
      <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-6">
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <SinglePageImage images={image} />
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="text-lg text-fuchsia-600 mb-4"><span className="font-bold">Price:</span> ${price}</p>
          <p className="text-md text-gray-700 mb-4"><span className="font-bold">Category:</span> {category}</p>
          <p className="text-md text-gray-700 mb-4"><span className="font-bold">Company:</span> {company}</p>
          <p className="text-md text-gray-700 mb-4"><span className="font-bold">Stock:</span> {stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          <p className="text-md text-gray-700 mb-4"><span className="font-bold">Stars:</span> {stars}</p>
          <p className="text-md text-gray-700 mb-4"><span className="font-bold">Reviews:</span> {reviews}</p>
          <p className="text-md text-gray-700 mb-4"><span className="font-bold">Description:</span> {description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

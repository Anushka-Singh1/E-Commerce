import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';


const API ="https://api.pujakaitem.com/api/products";
function SingleProduct() {
  const {singleProduct, isSingleLoading, getSingleProduct} = useProductContext();
  const {id} = useParams();
  const {
    id: productId, name, company, price, description , category, stock, stars, reviews} = singleProduct;
    console.log(singleProduct);
  
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])
  return (
    <div>
      SingleProduct
    </div>
  )
}

export default SingleProduct

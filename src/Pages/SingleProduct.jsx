import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import PageNavigation from '../Components/PageNavigation';


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
    <div className='h-[100vh]'>
      <PageNavigation title={name}/>
    </div>
  )
}

export default SingleProduct

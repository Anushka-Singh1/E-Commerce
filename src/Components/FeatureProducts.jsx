import React from 'react';
import { useProductContext } from '../Context/ProductContext';
import ProductCard from '../Components/ProductCard';

function FeatureProducts() {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return <div className="p-4 mx-[5vh] mt-4 bg-fuchsia-100 rounded-lg font-serif font-semibold text-center">......loading</div>;
    }

    return (
        <>
            <div className='bg-fuchsia-100 rounded-lg mx-[5vh]'>
                <div className="text-2xl font-semibold font-serif text-center text-black mb-8 mt-4 pt-4">
                    Our Featured Products...
                </div>
                <div className="flex flex-col md:flex-row justify-between p-4 mx-[5vh] mt-4 bg-fuchsia-100 rounded-lg">
                    {featureProducts.map((curElem) => (
                        <ProductCard key={curElem.id} {...curElem} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default FeatureProducts;

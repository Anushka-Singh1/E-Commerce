import React from 'react';
import { useProductContext } from '../Context/ProductContext';

function ProductCard({ children }) {
    return (
        <div className="bg-fuchsia-100 rounded-lg text-lg text-black px-10 py-4 font-serif text-center flex items-center justify-center w-full max-w-[300px]">
            {children}
        </div>
    );
}

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
                    {featureProducts.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-full">
                            <ProductCard>
                                <div className="relative w-full flex justify-center items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-56 border-4 border-fuchsia-800 shadow-md rounded-lg transition duration-300 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-fuchsia-900 bg-opacity-50 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                                        {item.name}
                                    </div>
                                </div>
                            </ProductCard>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FeatureProducts;

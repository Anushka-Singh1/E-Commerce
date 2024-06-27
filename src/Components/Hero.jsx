import React from "react";
import HeroImage from "../assets/Hero.png";

function Hero({ myData }) {
  const { heading } = myData;
  return (
    <>
      <div className="container mx-auto mt-40 md:mt-40 lg:mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-fuchsia-100 w-full p-10 rounded-lg">
          <div className="hero-section-data p-8">
            <h1 className="text-4xl font-bold mt-12 md:mt-6">{heading}</h1>
            <p className="text-xl mt-2 font-serif antialiased text-justify">
              Shop confidently with our premium collection of market-leading
              products. Enjoy seamless online shopping, unbeatable prices, and
              fast, reliable delivery on every order.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-lg mt-6">
              Shop Now
            </button>
          </div>
          <div className="hero-section-image">
            <img
              src={HeroImage}
              alt="hero"
              className="w-full md:w-[70%] h-[80%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

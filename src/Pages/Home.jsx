import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services';
import Trusts from '../Components/Trusts';
import FeatureProducts from '../Components/FeatureProducts';

function Home() {
  const data= {
    heading: "Welcome to our store",
  };
  return (
    <>
      <Hero myData={data}/>
      <FeatureProducts/>
      <Services/>
      <Trusts/>
    </>
  );
};

export default Home

import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services';
import Trusts from '../Components/Trusts';

function Home() {
  const data= {
    heading: "Welcome to our store",
  };
  return (
    <>
      <Hero myData={data}/>
      <Services/>
      <Trusts/>
    </>
  );
};

export default Home

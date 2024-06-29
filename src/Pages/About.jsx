import React from 'react'
import Hero from '../Components/Hero'
// import { useContext } from 'react';
// import { AppContext } from '../Context/ProductContext';

function About() {
  // const myName=useContext(AppContext)
  const data= {
    heading: "Hey want to know about us?",
  };
  return (
    <>
      {/* {myName} */}
      <Hero myData={data}/>
    </>
  )
}

export default About

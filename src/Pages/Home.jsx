import React from 'react'
import Hero from '../Components/Hero'

function Home() {
  const data= {
    heading: "Welcome to our store",
  };
  return (
    <>
      <Hero myData={data}/>
    </>
  )
}

export default Home

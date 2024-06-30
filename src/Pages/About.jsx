import React from 'react'
import Hero from '../Components/Hero'

function About() {
  const data= {
    heading: "Hey want to know about us?",
  };
  return (
    <>
      <Hero myData={data}/>
    </>
  )
}
export default About

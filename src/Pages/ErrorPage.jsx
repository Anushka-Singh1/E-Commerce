import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../assets/Error.jpg';

function ErrorPage() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full">
  
      <img 
        src={Image} 
        alt="error" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

   
      <div className="relative flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-50 p-4">
        <div className="text-center font-bold text-white font-serif text-3xl md:text-5xl mb-4 md:mb-8">
          Oops! Page not found
        </div>
        
        <NavLink to="/">
          <button className="bg-transparent hover:bg-fuchsia-800 text-fuchsia-800 font-semibold hover:text-white py-2 px-3 border border-fuchsia-900 hover:border-transparent rounded-lg">
            Go Back
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;

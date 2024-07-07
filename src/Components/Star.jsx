import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar} from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

function Star({ stars, reviews }) {
   
    const ratingStar = Array.from({ length: 5 }, (_, index) => {
      const number = index + 0.5;
      return (
        <span key={index}>
          {stars >= index + 1 ? (
            <FaStar className='text-yellow-400' /> 
          ) : stars >= number ? (
            <FaRegStarHalfStroke className='text-yellow-400' /> 
          ) : (
            <CiStar className='text-yellow-400' /> 
          )}
        </span>
      );
    });
    return (
      <div className="flex items-center mb-2">
        {ratingStar}
        <span className="text-gray-600 ml-2">{reviews} reviews</span>
      </div>
    );
}

export default Star

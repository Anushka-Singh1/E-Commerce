import React from 'react';
import { FaCube, FaDigitalOcean, FaReddit, FaHive } from "react-icons/fa";

function TrustCard({ children }) {
  return (
    <div className='bg-fuchsia-800 rounded-lg text-lg text-white px-10 py-6 font-serif text-center flex items-center justify-center w-full max-w-[300px]'>
      {children}
    </div>
  );
}

function Trusts() {
  const trustItems = [
    { icon: <FaCube className='h-6 w-6' />, label: 'Cube.io' },
    { icon: <FaDigitalOcean className='h-6 w-6' />, label: 'Digital Ocean' },
    { icon: <FaReddit className='h-6 w-6' />, label: 'Fedex.io' },
    { icon: <FaHive className='h-6 w-6' />, label: 'FaHive.io' },
  ];

  return (
    <div className='flex flex-col md:flex-row justify-between p-6 mx-auto mt-4 bg-fuchsia-100 md:mx-24 gap-4'>
      {trustItems.map((item, index) => (
        <div key={index} className='flex flex-col items-center w-full'>
          <TrustCard>
            <div className='flex items-center gap-2'>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </TrustCard>
        </div>
      ))}
    </div>
  );
}

export default Trusts;

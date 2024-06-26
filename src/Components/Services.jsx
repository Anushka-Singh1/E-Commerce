import React from 'react';

function ServiceCard({ children }) {
  return (
    <div className='bg-fuchsia-800 rounded-lg text-lg text-white px-10 py-6 font-serif'>
      {children}
    </div>
  );
}

function Services() {
  return (
    <div className='flex flex-col md:flex-row justify-between p-2 mx-auto mt-4 bg-fuchsia-100 md:mx-24'>
      {/* First Column */}
      <div className='flex flex-col items-start m-14'>
        <ServiceCard>Quality Assured Products</ServiceCard>
      </div>
      
      {/* Middle Column */}
      <div className='flex flex-col gap-y-10 items-center mt-2 mb-2'>
        <ServiceCard>Amazing Shopping Experience</ServiceCard>
        <ServiceCard>Fast and Safe Delivery assured</ServiceCard>
      </div>
      
      {/* Last Column */}
      <div className='flex flex-col items-end m-14'>
        <ServiceCard>Easy Return Policies</ServiceCard>
      </div>
    </div>
  );
}

export default Services;

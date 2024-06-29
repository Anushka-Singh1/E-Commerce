import React from "react";

const style1 = "flex md:flex-col items-start m-4 md:m-14";
const style2 = "flex flex-col md:flex-col gap-y-10 items-center m-4 md:m-0";
const style3 = "flex md:flex-col items-end m-4 md:m-14";

function ServiceCard({ children }) {
  return (
    <div className="bg-fuchsia-100 rounded-lg text-lg text-black px-10 py-6 font-serif">
      {children}
    </div>
  );
}

function Services() {
  return (
    <div className="mx-[5vh] mt-4">
      <div className="flex flex-col justify-between p-4 bg-fuchsia-900 rounded-lg">
        <h2 className="text-2xl font-semibold font-serif text-center text-white mb-8 mt-4">
          Our Top Services !
        </h2>

        <div className="flex flex-col items-center md:flex-row justify-between">
          {/* First Column */}
          <div className={style1}>
            <ServiceCard>Quality Assured Products</ServiceCard>
          </div>

          {/* Middle Column */}
          <div className={style2}>
            <ServiceCard>Amazing Shopping Experience</ServiceCard>
            <ServiceCard>Fast and Safe Delivery assured</ServiceCard>
          </div>

          {/* Last Column */}
          <div className={style3}>
            <ServiceCard>Easy Return Policies</ServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

import React from 'react';
import { NavLink } from 'react-router-dom';

const style = "bg-gray-400 h-[4vh] flex items-center fixed top-[16vh] left-[3%] right-[3%] z-[99999] rounded-lg px-[2rem]";

function PageNavigation({ title }) {
  return (
    <>
      <div className={style}>
        <div className="flex items-center justify-start w-full">
          <NavLink to="/">Home</NavLink> / {title}
        </div>
      </div>
    </>
  );
}

export default PageNavigation;

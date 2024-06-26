import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Detail } from '../Constant/ContactUs_Fields'; 
import Image from '../assets/Contact.png';

const Style1 = "flex flex-wrap -mx-3 mb-1";
const Style2 = "w-full px-3";
const Style3 = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1";
const Style4 = "appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

function Contact() {
  const [state, handleSubmit] = useForm("meojjnyr"); 

  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold font-serif text-center text-black mb-4">
          Thank you for contacting us!
        </h2>
        <p className="text-lg font-serif text-center text-gray-700">
          We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-20 md:mt-36 ml-1 mr-1 md:ml-[10vw] md:mr-[10vw] font-serif bg-gray-100 rounded-lg">
      
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 p-10">
        <img
          src={Image}
          alt="Contact Us"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section for Form */}
      <div className="w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-nav_color p-4 rounded-lg">
          <div className="px-3 py-1 text-center">
            <div className="font-bold text-2xl text-black mb-4">Feel Free To Contact Us!</div>
          </div>
          <div className={Style1}>
            {Detail.map((item, index) => (
              <div className={Style2} key={index}>
                <label className={Style3} htmlFor={item.name}>
                  {item.label}
                </label>
                {item.type === "textarea" ? (
                  <textarea
                    className={Style4}
                    id={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                ) : (
                  <input
                    className={Style4}
                    id={item.name}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                )}
                <ValidationError 
                  prefix={item.label} 
                  field={item.name}
                  errors={state.errors}
                />
              </div>
            ))}
          </div>
          <div className='flex justify-center items-center'>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-transparent hover:bg-fuchsia-800 text-fuchsia-800 font-semibold hover:text-white py-2 px-3 border border-fuchsia-900 hover:border-transparent rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

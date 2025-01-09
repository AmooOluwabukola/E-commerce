import React from "react";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:ml-5 xl:ml-0  sm:grid-cols-2 sm:gap-[2rem] lg:grid-cols-4 mt-2 gap-[20px] md:gap-[3rem] lg:gap-[3rem] xl:gap-[5rem] ">
            <div className="lg:py-4 lg:mb-11 ">
              <h5 className=" text-lg font-bold mb-4 ">Harbikesfootwear</h5>
              <p className="text-[12px] md:text-lg">
                Harbikesfootwear, Walk with Class.
              </p>
              <p className="text-[12px] md:text-lg">(+234) 123 456 789</p>
              <p className="text-[12px] md:text-lg">harbike88@gmail.com</p>
            </div>
            <div className="lg:py-4 ">
              <h5 className="md:text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 md:text-[16px] text-[12px]">
                <li>
                  <Link to="/product">Shop Men's</Link>
                </li>
                <li>
                  <Link to="/about">Shop Women's</Link>
                </li>
                <li>
                  <Link to="/about">Help & Support</Link>
                </li>
                <li>
                  <Link to="/about">Size Guide</Link>
                </li>
              </ul>
            </div>
            <div className="md:py-4 ">
              <h5 className="md:text-lg font-bold mb-2 md:mb-4">Newsletter</h5>
              <p className="text-[12px] md:text-lg"> Be the first to know about exclusive offers, new arrivals,and more!   </p>
          
              <form  className='md:w-full w-[90%] relative mt-3 z-[10]'>
              <div className='md:w-full w-[100%] relative'>
                <input
                  type="email"
                  placeholder="Email"
           
                  className="border p-2 rounded-lg bg-transparent text-white font-spaceGrotesk xl:w-full md:w-full w-[80%] pr-16"
           
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full  px-4 bg-white rounded-r-lg"
                >
           <LuSend className="text-black text-2xl" />
                </button>
              </div>
            </form>
            </div>
            <div className="py-4 ">
              <h5 className="md:text-lg font-bold mb-4">Contact Us</h5>
              <div className="flex gap-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaSquareInstagram  className="md:text-2xl"/>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook  className="md:text-2xl"/>
                </a>
                <a href="tel:+234123456789" target="_blank" rel="noopener noreferrer">
                  <IoCallSharp  className="md:text-2xl"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center mt-3 pb-5 lg:text-[16px] text-[12px]">  © 2024 Harbikes Footwear. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;

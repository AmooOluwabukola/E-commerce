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
          <div className="grid grid-cols-1 lg:ml-5 xl:ml-0  sm:grid-cols-2 sm:gap-[1rem] lg:grid-cols-4 mt-2 gap-[20px] md:gap-[1rem] lg:gap-[3rem] xl:gap-[5rem] ">
            <div className="py-4 mb-11 ">
              <h5 className="text-2xl font-bold mb-4">Harbikesfootwear</h5>
              <p>
                Crafted with the finest materials, we combine style and comfort
                to provide premium footwear for every occasion and ensure that
                every step you take is one of confidence and ease.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, commodi?
              </p>
            </div>
            <div className="py-4 ">
              <h5 className="text-lg font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
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
            <div className="py-4 ">
              <h5 className="text-lg font-bold mb-4">NewsLetter</h5>
              <p> Be the first to know about exclusive offers, new arrivals,and more!   </p>
          
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
              <h5 className="text-lg font-bold mb-4">Contact Us</h5>
              <div className="flex gap-3">
                <FaSquareInstagram  className="lg:text-2xl"/>
                <FaFacebook  className="lg:text-2xl"/>
                <IoCallSharp  className="lg:text-2xl"/>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center mt-3">  © 2024 Harbikes Footwear. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;

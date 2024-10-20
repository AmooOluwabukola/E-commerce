import React, { useState } from 'react';
import { FaHome, FaSearch, FaUserCircle, FaShoppingCart, FaBox, FaBell, FaMapMarkerAlt, FaHeadset, FaInfoCircle, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Added new icons
import { Link } from 'react-router-dom';
import Heroimg from '../assets/shoe.jpeg'
import Hero from './Hero';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // For hamburger menu on mobile

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
    <div >

    <nav className="text-black bg-white shadow-md mb-[5rem] fixed w-full"  >
      {/* Brand Name, Cart, and Hamburger Menu for both Mobile and Desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Brand Name */}
        <Link to="/" className=" text-2xl font-bold">Harbikesfootwear</Link>
        

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <FaBars className="text-2xl  cursor-pointer" onClick={toggleHamburger} />
        </div>

      

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8 items-center">
         
          <Link to="/products" className=" hover:text-blue-500">Product</Link>
          
         
          <Link to="/support" className=" hover:text-blue-500">Customer Support</Link> {/* Customer Support */}
          <Link to="/about" className=" hover:text-blue-500">About</Link> {/* About */}
          <div className="relative flex items-center">
            <span className="mr-2">John Doe</span>
            <FaUserCircle
              className="cursor-pointer text-2xl"
              onClick={toggleDropdown}
            />
            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-10 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-20">
                <Link
                  to="/notifications"
                  className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <FaBell className="mr-3" /> Notifications
                </Link>
                <Link
                  to="/addresses"
                  className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <FaMapMarkerAlt className="mr-3" /> Addresses
                </Link>
                <Link
                  to="/live-support"
                  className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <FaHeadset className="mr-3" /> Live Support
                </Link>
                <Link
                  to="/about"
                  className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <FaInfoCircle className="mr-3" /> About
                </Link>
                <Link
                  to="/logout"
                  className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                >
                  <FaSignOutAlt className="mr-3" /> Log Out
                </Link>
              </div>
            )}
          
          </div>
             {/* Cart Icon */}
        <Link to="/order" className=" hover:text-blue-500 relative">
          <FaShoppingCart className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">3</span>
        </Link>
        </div>
      </div>

      {/* Hamburger Dropdown for Mobile */}
      {isHamburgerOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4">
          <div className="space-y-4">
          
            <Link to="/notifications" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaBell className="mr-3" /> Notifications
            </Link>
            <Link to="/addresses" className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaMapMarkerAlt className="mr-3" /> Addresses
            </Link>
            <Link to="/live-support" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaHeadset className="mr-3" /> Live Support
            </Link>
            <Link to="/about" className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaInfoCircle className="mr-3" /> About
            </Link>
            <Link to="/logout" className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaSignOutAlt className="mr-3" /> Log Out
            </Link>
          </div>
        </div>
      )}

      {/* Bottom Navigation for Mobile  And tab*/}
      <div className="lg:hidden fixed z-20 inset-x-0 bottom-0 bg-white shadow-md">
        <div className="flex justify-around py-2">
          
          <Link to="/products" className="flex flex-col items-center">
            <FaBox className="text-xl text-gray-800" />
            <span className="text-sm text-gray-600">Product</span>
          </Link>
      
        <Link to="/cart" className="text-gray-800 hover:text-blue-500 relative ">
          <FaShoppingCart className="text-xl" />
          <span className="text-sm text-gray-600">Cart</span>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">3</span>
        </Link>
          <Link to="/search" className="flex flex-col items-center">
            <FaSearch className="text-xl text-gray-800" />
            <span className="text-sm text-gray-600">Search</span>
          </Link>
          <div onClick={toggleDropdown} className="flex flex-col items-center cursor-pointer">
            <FaUserCircle className="text-xl text-gray-800" />
            <span className="text-sm text-gray-600">Profile</span>
          </div>
        </div>
      </div>
    </nav>
  
    </div>
     
 
    
    </>
   
  );
};

export default Navbar;

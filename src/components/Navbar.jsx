import React, { useState } from 'react';
import { FaHome,FaChevronDown, FaSearch, FaUserCircle, FaShoppingCart, FaBox, FaBell, FaMapMarkerAlt, FaHeadset, FaInfoCircle, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Added new icons
import { Link } from 'react-router-dom';
import Accountdropdown from './Accountdropdown'
import Cartdropdown from './Cartdropdown';
// import Heroimg from '../shop/'
import Hero from './Hero';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // For hamburger menu on mobile

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <>
    <div >

    <nav className="text-black bg-white shadow-md mb-[5rem] z-20 fixed w-full"  >
      {/* Brand Name, Cart, and Hamburger Menu for both Mobile and Desktop */}
      <Link to="/" className="lg:hidden text-2xl font-bold flex justify-center my-3">Harbikesfootwear</Link>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center gap-1">
          <FaBars className="text-2xl  cursor-pointer" onClick={toggleHamburger} />
        </div>
        {/* Brand Name */}
           <div>
           <Link to="/" className="hidden lg:block text-2xl font-bold">Harbikesfootwear</Link> 
           <div className="flex lg:hidden justify-between gap-2">
           <FaUserCircle className=" text-2xl text-gray-800"   onClick={toggleDropdown} />
 {/* Dropdown */}
 {isDropdownOpen && (
              <Accountdropdown/>
            )}
              <div  className=" hover:text-blue-500 relative">
          <FaShoppingCart className="text-2xl"  onClick={toggleCart}/>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">3</span>
          {isCartOpen && (
          <Cartdropdown/>
        )}
        </div>
            </div>        
          
           </div>
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link to="/product" className=" hover:text-blue-500">Product</Link>
          <Link to="/support" className=" hover:text-blue-500">Customer Support</Link> {/* Customer Support */}
          <Link to="/about" className=" hover:text-blue-500">About</Link> {/* About */}
          <div className="relative flex items-center " >
            <span className="mr-1">My Account</span>
            <FaChevronDown className="cursor-pointer mt-1 "  onClick={toggleDropdown}/>
          </div>
             {/* Cart Icon */}
        <div  className=" hover:text-blue-500 relative">
          <FaShoppingCart className="text-2xl"  onClick={toggleCart}/>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">3</span>
          {isCartOpen && (
          <Cartdropdown/>
        )}
        </div>
       
        </div>
      </div>

      {/* Hamburger Dropdown for Mobile */}
      {isHamburgerOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4">
          <div className="space-y-4">
          
            <Link to="/notifications" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaBell className="mr-3" /> Product
            </Link>
            <Link to="/live-support" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaHeadset className="mr-3" /> Customer Support
            </Link>
            <Link to="/about" className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
              <FaInfoCircle className="mr-3" /> About
            </Link>
           
          </div>
        </div>
      )}
    </nav>
    </div>
     
 
    
    </>
   
  );
};

export default Navbar;

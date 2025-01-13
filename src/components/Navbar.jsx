import React, { useState, useContext } from "react";
import { FaChevronDown, FaBars, FaHeadset, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Accountdropdown from "./Accountdropdown";
import Cartdropdown from "./Cartdropdown";
import { AiOutlineProduct } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { CartContext } from "./shop/CartContext";
import Hero from "./Hero";

const Navbar = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  console.log(cartItems);
  console.log('Cart Items in Navbar:', cartItems);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // for account dropdown
  const [isCartOpen, setIsCartOpen] = useState(false); // for cart
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // For hamburger menu

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
      <main>
        <nav className="text-black bg-white shadow-md mb-[5rem] z-20 fixed w-full">
          <Link to="/" className="lg:hidden text-2xl font-bold flex justify-center my-3">
            Harbikesfootwear
          </Link>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden flex items-center gap-1">
              {isHamburgerOpen ? (
                <FaTimes
                  className="text-2xl cursor-pointer"
                  onClick={toggleHamburger}
                />
              ) : (
                <FaBars
                  className="text-2xl cursor-pointer"
                  onClick={toggleHamburger}
                />
              )}
            </div>
            <div>
              <Link to="/" className="hidden lg:block text-2xl font-bold">
                Harbikesfootwear
              </Link>
              <div className="flex lg:hidden justify-between gap-2">
                <IoSearchOutline className=" text-2xl text-gray-800" />
                <FiUser
                  className=" text-2xl text-gray-800"
                  onClick={toggleDropdown}
                />
                {/* Account Dropdown */}
                {isDropdownOpen && <Accountdropdown />}
                {/* Cart for mobile */}
                <div className="cursor-pointer relative" onClick={toggleCart}>
                  <IoCartOutline className="text-2xl" />
                  {/* Number of items in the cart */}
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                    {cartItems.length}
                  </span>
                  {isCartOpen && <Cartdropdown cartItems={cartItems} />}
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8 items-center">
              {/* Product */}
              <Link to="/product" className="hover:text-red-600">
                Product
              </Link>
              {/* Customer Support */}
              <Link to="/support" className="hover:text-red-600">
                Customer Support
              </Link>
              {/* About */}
              <Link to="/about" className="hover:text-red-600">
                About
              </Link>
              {/* Account */}
              <div className="relative flex items-center ">
                <span className="mr-1">My Account</span>
                <FaChevronDown className="cursor-pointer mt-1" onClick={toggleDropdown} />
                {isDropdownOpen && <Accountdropdown />}
              </div>
              <div className="flex justify-between">
                <IoSearchOutline className="text-2xl text-gray-800" />
                {/* Cart Icon */}
                <div className="cursor-pointer relative" onClick={toggleCart}>
                  <IoCartOutline className="text-2xl" />
                  {/* Number of items in the cart */}
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                    {cartItems.length}
                  </span>
                  {isCartOpen && <Cartdropdown />}
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger Dropdown for Mobile */}
          {isHamburgerOpen && (
            <div className="lg:hidden bg-white shadow-lg py-4">
              <div className="space-y-4">
                <Link to="/product" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <AiOutlineProduct className="mr-3" /> Product
                </Link>
                <Link to="/live-support" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <FaHeadset className="mr-3" /> Customer Support
                </Link>
                <Link to="/about" className="px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center">
                  <FcAbout className="mr-3 text-black" /> About
                </Link>
              </div>
            </div>
          )}
        </nav>
      </main>
    </>
  );
};

export default Navbar;
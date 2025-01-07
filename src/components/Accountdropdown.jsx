import React from "react";
import { FaHome,FaChevronDown, FaSearch, FaUserCircle, FaShoppingCart, FaBox, FaBell, FaMapMarkerAlt, FaHeadset, FaInfoCircle, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Added new icons
import { Link } from 'react-router-dom';
const Accountdropdown= () => {
    

    return(
        <>
         <div className="absolute right-3 lg:top-10 mt-10 lg:mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-20">
                        <Link
                          to="/notifications"
                          className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                        >
                          <FaBell className="mr-3" /> Register
                        </Link>
                        <Link
                          to="/addresses"
                          className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                        >
                          <FaMapMarkerAlt className="mr-3" /> Login
                        </Link>
                        <Link
                          to="/live-support"
                          className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                        >
                          <FaHeadset className="mr-3" /> Shopping Cart
                        </Link>
                        <Link
                          to="/about"
                          className=" px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center"
                        >
                          <FaInfoCircle className="mr-3" /> Checkout
                        </Link>
                      </div>
        </>
    )
}

export default Accountdropdown
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaChevronDown, FaSearch, FaUserCircle, FaShoppingCart, FaBox, FaBell, FaMapMarkerAlt, FaHeadset, FaInfoCircle, FaSignOutAlt, FaBars } from 'react-icons/fa'; // Added new icons
import { orderlist } from '../db'; 
import { TbCurrencyNaira } from "react-icons/tb";

const Cartdropdown = () => {
    const orderItems = orderlist; 
    const handleCheckout = () => {
      alert("Proceeding to checkout...");
    };
  
    const calculateTotal = () => {
      return orderItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
  
    return (
        <>
             <main className="absolute right-0 lg:top-10 mt-2 w-60 bg-white rounded-md shadow-lg py-2 z-20">
                                    {/* <Link
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
                                    </Link> */}
                                     <div className="grid grid-cols-1 gap-4">
                                            {orderItems.map(item => (
                                              <div key={item.id} className="flex items-center border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-200">
                                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-2" />
                                                <div className="flex-grow">
                                                  <h2 className=" font-semibold">{item.name}</h2>
                                                  <p className='text-sm'>Quantity: {item.quantity}</p>
                                                  <p className="text-[10px] font-bold text-start p-2 flex">
                                                     Price: <TbCurrencyNaira className="text-[12px] mt-[0.6px]"/>{item.price.toFixed(2)}
                                                      </p>
                                                      <p className="text-[12px] font-bold text-start p-2 flex">
                                                     Total: <TbCurrencyNaira className="text-[12px]"/>{(item.price * item.quantity).toFixed(2)}
                                                      </p>
                                              
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                  </main>
      
        </>
    )

}

export default Cartdropdown
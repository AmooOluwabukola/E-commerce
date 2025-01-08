import React,  { useState } from 'react';
import { orderlist } from '../db'; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RiDeleteBin6Line } from "react-icons/ri";
const Order = () => {
  const [orderItems, setOrderItems] = useState(orderlist);


  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  
  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = orderItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setOrderItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = orderItems.filter(item => item.id !== id);
    setOrderItems(updatedItems);
  };

  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col font-roboto text-black">
        <h1 className='lg:text-3xl text-[2rem] mt-[5rem] mb-[2rem] font-bold text-center w-full my-2'>
          CART
        </h1>

       {/* Scrollable Container for Headers and Items */}
       <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[600px]">
            {/* Column Headers */}
            <div className="grid grid-cols-5 gap-4 font-bold border-b-2 pb-2">
              <div className="text-center">Image</div>
              <div className="text-center">Item Name</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Unit Price</div>
              <div className="text-center">Total</div>
            </div>

            {/* Order Items */}
            {orderItems.map(item => (
              <div key={item.id} className="grid grid-cols-5 gap-4 border-b-2 py-4">
                {/* Image */}
                <div className="flex justify-center items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded" />
                </div>
                {/* Item Name */}
                <div className="flex justify-center items-center">
                  <h2 className="text-lg ">{item.name}</h2>
                </div>
                {/* Quantity Controls */}
                <div className="flex justify-center items-center">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 bg-gray-200 rounded-lg text-sm sm:text-base"
                  >
                    -
                  </button>
                  <p className="mx-2 text-sm sm:text-base">{item.quantity}</p>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-lg text-sm sm:text-base"
                  >
                    +
                  </button>
                  <RiDeleteBin6Line 
                    onClick={() => handleDeleteItem(item.id)}
                    className="ml-2 cursor-pointer text-red-500 text-sm sm:text-base"
                  />
                </div>
                {/* Unit Price */}
                <div className="flex justify-center items-center">
                  <p className="text-[16px] ">₦{item.price.toFixed(2)}</p>
                </div>
                {/* Total Price */}
                <div className="flex justify-center items-center">
                  <p className="text-[16px] ">₦{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Total and Checkout Button */}
        <p className="text-[16px] font-bold text-2xl text-end mt-3">
            Total: ₦{calculateTotal()}
          </p>
        <div className="mt-8 flex justify-between items-center">
         
          <Link to='/checkout'>
            <button 
              className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#df0c12]"
              onClick={handleCheckout}
            >
             Continue Shopping
            </button>
          </Link>
          <Link to='/checkout'>
            <button 
              className="px-4 py-2 bg-[#df0c12] text-white font-semibold rounded-lg shadow hover:bg-[#df0c12]"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
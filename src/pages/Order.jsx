import React from 'react';
import { orderlist } from '../db'; 
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Order = () => {
  const orderItems = orderlist; 
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white my-10">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="grid grid-cols-1 gap-4">
        {orderItems.map(item => (
          <div key={item.id} className="flex items-center border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-200">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p className="text-[16px] font-bold text-start p-2 flex">
                 Price: <TbCurrencyNaira className="text-2xl "/>{item.price.toFixed(2)}
                  </p>
                  <p className="text-[16px] font-bold text-start p-2 flex">
                 Total: <TbCurrencyNaira className="text-2xl "/>{(item.price * item.quantity).toFixed(2)}
                  </p>
          
            </div>
          </div>
        ))}
      </div>
      <p className="text-[16px] font-bold text-start text-2xl p-2 flex">
                 Total: <TbCurrencyNaira className="text-2xl "/>{calculateTotal()}
                  </p>
    <Link to='/checkout'>
    <button 
        className="mt-4 px-4 py-2 bg-[#df0c12] text-white font-semibold rounded-lg shadow hover:bg-[#df0c12]"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </Link>
     
    </div>
  );
};

export default Order;
import React from 'react';
import { Link } from 'react-router-dom';
import { orderlist } from '../db'; 
import { RiDeleteBin6Line } from "react-icons/ri";
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
             <main className="absolute right-0 lg:top-10 mt-1 w-[300px] bg-white  py-2 z-20 overflow-y-auto">
                                     <div className="">
                                            {orderItems.map(item => (
                                              <div key={item.id} className="flex items-center border-b  p-4  duration-200 overflow-y-auto">
                                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-2" />
                                                <div className="flex-grow">
                                                  <div className="flex justify-between items-center">
                                                  <h2 className="text-[14px] lg:text-[16px] font-semibold">{item.name}</h2>
                                                  <RiDeleteBin6Line />
                                                  </div>
                                                
                                                  <p className='text-sm'>Quantity: {item.quantity}</p>
                                                  <p className="text-[12px]  text-start flex">
                                                     Price: ₦{item.price.toFixed(2)}
                                                      </p>
                                                      <p className="text-[12px]  font-bold text-start">
                                                     Total: ₦{(item.price * item.quantity).toFixed(2)}
                                                      </p>
                                              
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                         <p className="text-[16px] font-bold text-start text-2xl p-2 flex">
                                                         Total: ₦{calculateTotal()}
                                                          </p>
                                                          <div className="flex gap-5  ml-3">
                                                          <Link to='/order'>
                                                        
                                                        <button 
                                                            className="mt-4 px-4 py-2 bg-[#c4c1c2] text-white font-semibold rounded-lg shadow hover:bg-black"
                                                         
                                                          >
                                                       View Cart
                                                          </button>
                                                        </Link>  
                                                        <Link to='/checkout'>
                                                        <button 
                                                            className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-[#c4c1c2]"
                                                            onClick={handleCheckout}
                                                          >
                                                            Checkout
                                                          </button>
                                                        </Link>  
                                                            </div>
                                                      
                                  </main>
      
        </>
    )

}

export default Cartdropdown
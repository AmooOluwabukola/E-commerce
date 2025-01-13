import React, { useContext } from "react";
import { CartContext } from "./shop/CartContext";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

const Cartdropdown = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="absolute top-14 right-0 w-96 bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-bold">Cart</h3>
      <div className="max-h-[300px] overflow-y-auto">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mr-4" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}, Color: {item.color}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button 
                  className="text-gray-600"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  className="text-gray-600"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <span className="ml-2 text-gray-600">
                  <TbCurrencyNaira />
                  {item.price * item.quantity}
                </span>
                <button 
                  className="ml-2 text-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-lg font-bold">
          <TbCurrencyNaira />
          {total}
        </div>
        <div className="flex space-x-3">
          <Link to="/cart" className="bg-blue-600 text-white px-4 py-2 rounded-md">View Cart</Link>
          <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded-md">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Cartdropdown;
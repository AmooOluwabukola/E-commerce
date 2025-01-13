import React, { useState, useContext } from "react";
import { CartContext } from "./shop/CartContext";

const CartModal = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleAddToCart = () => {
    if (size && color) {
      addToCart({ ...product, size, color });
    } else {
      alert("Please select size and color!");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <div className="mb-4">
          <label className="block mb-2">Size</label>
          <select 
            className="w-full border rounded-md px-3 py-2" 
            value={size} 
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">Select Size</option>
            {product.sizes.map((sizeOption, index) => (
              <option key={index} value={sizeOption}>{sizeOption}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Color</label>
          <select 
            className="w-full border rounded-md px-3 py-2" 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Select Color</option>
            {product.colors.map((colorOption, index) => (
              <option key={index} value={colorOption}>{colorOption}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button 
            className="bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
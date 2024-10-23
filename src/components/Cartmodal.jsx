import React from 'react';

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Select Size and Color</h2>
        <form>
          <label htmlFor="size" className="block mb-2">Select Size:</label>
          <select id="size" name="size" className="border rounded mb-4 w-full">
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>

          <label htmlFor="color" className="block mb-2">Select Color:</label>
          <select id="color" name="color" className="border rounded mb-4 w-full">
            <option value="">Select Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>

          <button type="button" onClick={onClose} className="bg-red-700 text-white px-4 py-2 rounded">Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default CartModal;
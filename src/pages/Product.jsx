import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdTune, MdAdd } from 'react-icons/md';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { TbCurrencyNaira } from "react-icons/tb";
import { product } from "../db";
import { FaRegStar } from "react-icons/fa";

const Product = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  // Filter options array
  const filterOptions = ['Default', 'Category 1', 'Category 2', 'Category 3'];

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(false); // Hide dropdown after selection
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSize("");
    setColor("");
  };

  const handleAddToCart = () => {
    // Logic to handle adding to cart can be added here
    console.log(`Added to cart: ${selectedProduct.title}, Size: ${size}, Color: ${color}`);
    closeModal(); // Close modal after adding to cart
  };

  return (
    <>
         <Navbar />
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col font-roboto text-black ">
          <h1 className='lg:text-3xl text-[2rem] mt-[5rem] '>
            Products
          </h1>
          <form action="" className="w-[100%] flex gap-5 mb-5">
            <div className="relative lg:w-[80%]">
              <input
                type="text"
                placeholder="Search your preference"
                className="pl-10 w-full rounded-3xl border shadow-lg border-none"
              />
              <div className="absolute top-3 left-2 pl-2">
                <FaSearch />
              </div>
            </div>
            <div className="relative lg:w-[20%]">
              <button
                type="button"
                className="w-full flex items-center justify-between border rounded-3xl shadow-lg px-3 py-2"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <div className="flex items-center">
                  <MdTune className="text-2xl mr-2" />
                  {selectedFilter ? selectedFilter : 'Default'}
                </div>
                <FaChevronDown />
              </button>
              {showDropdown && (
                <ul className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg">
                  {filterOptions.map((filter, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleFilterSelect(filter)}
                    >
                      {filter}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
          <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[1rem] lg:grid-cols-3 mt-2 gap-[20px] md:gap-[1rem] lg:gap-[1.5rem] xl:gap-[3rem] mb-10">
            {product.map((products) => {
              const { id, image, title, price } = products;
              return (
                <div key={id} className="bg-white rounded-3xl border border-b-2">
                  <div>
                    <img src={image} alt={title} className="h-[400px] w-full rounded-3xl" />
                  </div>
                  <h2 className="text-[16px] text-semibold text-gray-400 text-start p-2 mt-2">
                    {title}
                  </h2>
                  <div className="flex gap-1 pl-2 text-gray-600"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>
                  <p className="text-[16px] font-bold text-start p-2 flex">
                  <TbCurrencyNaira className="text-2xl "/>{price}
                  </p>
                  <button 
                    className='btn bg-slate-200 shadow-lg w-[50%] flex p-2 text-black rounded-3xl mx-[19px] mb-[18px] mt-2' 
                    onClick={() => openModal(products)}
                  >
                    <MdAdd className="text-2xl text-[#df0c12]"/> Add to cart
                  </button>
                </div>
              );
            })}
          </section>
        </div>
        <Footer />
        
        {/* Modal for selecting size and color */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-5 w-96">
              <h2 className="text-xl mb-4">Select Options for {selectedProduct.title}</h2>
              <div className="mb-4">
                <label className="block mb-2">Size:</label>
                <select 
                  value={size} 
                  onChange={(e) => setSize(e.target.value)} 
                  className="border rounded w-full p-2"
                >
                  <option value="">Select Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Color:</label>
                <select 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)} 
                  className="border rounded w-full p-2"
                >
                  <option value="">Select Color</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="black">Black</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button 
                  onClick={handleAddToCart} 
                  className="bg-red-700 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={closeModal} 
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
    
    </>
  );
}

export default Product;
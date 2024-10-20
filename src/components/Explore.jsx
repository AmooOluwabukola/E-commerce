import React, { useState } from "react";
import { homeproduct } from "../db"; // assuming this contains filter options
import { MdTune } from 'react-icons/md';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';

const Explore = () => {

  const [selectedFilter, setSelectedFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // filter options array
  const filterOptions = ['Default','Category 1', 'Category 2', 'Category 3', ];

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-11 ">
      <form action="" className="w-[100%] flex gap-5 mb-5">
        <div className="relative lg:w-[80%]">
          <input 
            type="text" 
            placeholder="Search your preference" 
            className=" pl-10 w-full rounded-lg border " 
          />
          <div className="absolute top-3 left-2 pl-2">
            <FaSearch />
          </div>
        </div>
      
        <div className="relative lg:w-[20%]">
          <button 
            type="button" 
            className="w-full flex items-center justify-between border rounded-lg px-3 py-2"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex items-center">
              <MdTune className="text-2xl mr-2" />
              {selectedFilter ? selectedFilter : 'Default'}
            </div>
            <FaChevronDown />
          </button>

          {/* Dropdown for filter options */}
          {showDropdown && (
            <ul className="absolute  w-full bg-white border rounded-lg mt-1 shadow-lg">
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

      <h1 className="lg:text-3xl font-bold">Recommended Just for You</h1>
     {/*featured products  */}
     <section className="grid grid-cols-1 lg:ml-5 xl:ml-0  sm:grid-cols-2 sm:gap-[1rem] lg:grid-cols-3 mt-2 gap-[20px] md:gap-[1rem] lg:gap-[1.5rem] xl:gap-[3rem] ">
     
            {homeproduct.map((product) => {
              const { id, image, title, price,category } = product;
              return (
                <div
                  key={id}
                  className="bg-white rounded-3xl border border-b-2  "
                >
                  <img src={image} alt={title} className="h-[400px] w-full rounded-3xl" />
                  <h2 className="text-[16px] font-bold text-start ml-5 mt-2">
                    {title}
                  </h2>
                 
                  <div className="flex gap-3 ml-5">
                    
                    <p className="text-[16px] font-bold text-start p-2">
                      {price}
                    </p>
                  </div>
        
                              <button className='btn bg-slate-200 shadow-lg w-[50%] flex  p-2 text-black rounded-2xl mx-[19px] mb-[18px]  mt-2'> <MdAdd className="text-2xl text-[#df0c12]"/>Add to cart</button>

                </div>
              );
            })}
          </section>
    </div>
  );
};

export default Explore;

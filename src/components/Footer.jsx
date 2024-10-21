import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='bg-black text-white hidden lg:block'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
       
            <div className="grid grid-cols-1 lg:ml-5 xl:ml-0  sm:grid-cols-2 sm:gap-[1rem] lg:grid-cols-4 mt-2 gap-[20px] md:gap-[1rem] lg:gap-[3rem] xl:gap-[5rem] ">
                <div className="py-4 mb-11 ">
                    <h5 className="text-2xl font-bold mb-4">Harbikesfootwear</h5>
                    <p>Crafted with the finest materials,  we combine style and comfort to provide premium footwear for every occasion and ensure that every step you take is one of confidence and ease.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, commodi?</p>
                 
                </div>
                <div className="py-4 ">
                    <h5 className="text-lg font-bold mb-4">Quick Links</h5>
                 <ul className='space-y-2'>
                    <li><Link to="/product">Shop Men's</Link></li>
                    <li><Link to="/about">Shop Women's</Link></li>
                    <li><Link to="/about">Help & Support</Link></li>
                    <li><Link to="/about">Size Guide</Link></li>

                 </ul>


                </div> 
                <div className="py-4 ">
                    <h5 className="text-lg font-bold mb-4">Harbikesfootwear</h5>
                 
                </div>
                <div className="py-4 ">
                    <h5 className="text-lg font-bold mb-4">Harbikesfootwear</h5>
                 
                </div>

                
            </div>
      
        </div>


    </div>
    
    </>
  )
}

export default Footer
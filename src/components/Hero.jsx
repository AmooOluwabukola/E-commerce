import React from 'react'
import Heroimg from '../assets/birken.jpeg'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center  items-center font-roboto text-black ">
      <div className="md:flex justify-between items-center md:mt-[10rem] lg:mt-[7rem] mt-[8rem] ">
        <img src={Heroimg} alt="" className='rounded-lg md:w-[45%] lg:w-[45%] ' />
        <div className='text-center md:w-[45%] lg:w-[50%]'>
        <h1 className='lg:text-[5rem] text-[2rem] text-center font-bold'>
      Step into Style. Walk with Class.
      </h1>
      <p className=' mb-4'>Discover the perfect blend of comfort and style with Harbikes Footwear. <br />
       From casual sneakers to elegant loafers, we've got something for every step you take.</p>
       <Link to='/product'>
       <button className='bg-[#df0c12] p-2 w-100 rounded-lg text-white mb-4'>Find Your Fit!</button>
       </Link>
        </div>
      </div>
      
 
    </div>
  )
}

export default Hero

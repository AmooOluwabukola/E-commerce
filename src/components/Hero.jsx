import React from 'react'
import Heroimg from '../assets/hero.svg'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center  items-center font-roboto text-white">
      <h1 className='lg:text-[5rem] text-[2rem] lg:mt-[15rem] mt-[5rem] text-center'>
      Step into Style. Walk with Class.
      </h1>
      <p className='text-center mb-4'>Discover the perfect blend of comfort and style with Harbikes Footwear. <br />
       From casual sneakers to elegant loafers, we've got something for every step you take.</p>
       <Link to='/product'>
       <button className='bg-[#df0c12] p-2 w-100 rounded-3xl mb-4'>Find Your Fit!</button>
       </Link>
 
    </div>
  )
}

export default Hero

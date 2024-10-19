import React from 'react'
import Heroimg from '../assets/hero.svg'
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center  items-center font-roboto text-white">
      <h1 className='lg:text-[5rem] text-[2rem] mt-[15rem] text-center'>
        Walk with Class
      </h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, explicabo.</p>
      <button className='bg-black p-2 lg:w-[10%] rounded-md'>Shop Now!</button>
    </div>
  )
}

export default Hero

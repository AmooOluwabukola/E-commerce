import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../assets/hero.svg'
const Home = () => {
  return (
    <>
    <div>
      <div className='h-[600px]'  style={{ backgroundImage: `url(${Heroimg}) ` }}>
      <Navbar/>

      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, sunt. Velit placeat explicabo molestiae quasi, aspernatur illo quos. Soluta, quo!</h1>
      </div>
    </div>
   
    </>
  )
}

export default Home
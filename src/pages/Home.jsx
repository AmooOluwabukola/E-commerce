import React from 'react'
import Navbar from '../components/Navbar'
import Explore from '../components/Explore'
import Heroimg from '../assets/shoe.jpeg'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <div className=''>
    <div  className=' ' style={{ backgroundImage: `url(${Heroimg}) `, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:"center" }}>
    
               <Navbar className="absolute top-0 left-0 w-full " /> 
                 <Hero/>
</div>
     
   <Explore/>
   <Footer/>
  
    </div>
   
    </>
  )
}

export default Home
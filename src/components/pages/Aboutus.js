import React from 'react'
import banner from "../Images/Aboutusu.jpg"
import About from './About'

const Aboutus = () => {
  return (
    <div className='relative h-[75vh]' >
   <img loading='lazy' src={banner} className='w-full h-full object-cover' alt="" />
   <div className="w-full h-full bg-blue-600/40 absolute flex top-0 justify-center  items-center">
    <h2 className='text-[26px] text-white font-montserratBold'>About Us</h2>
   </div>

   < About/>
    </div>
  )
}

export default Aboutus
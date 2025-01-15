import React from 'react'
import team from "../Images/team.jpg"
import Aboutteamf from './Aboutteamf'
const Aboutteam = () => {

  

  return (
    <div className="">
    <div className=' h-[80vh] relative'>
        <img loading='lazy' src={team} className='h-full object-cover w-full' alt="" />
        <div className="flex   bg-blue-600/40 top-0 absolute h-full w-full justify-center items-center flex-col gap-2 px-[100px] text-center">
            <h2 className='text-[26px] text-white font-montserratBold '>Our Team</h2>
            <p className='text-[18px] font-montserrat text-white'>At  TechRevive, our dedicated team of skilled professionals is passionate about technology and innovation. From expert technicians to support staff, we work together to deliver exceptional products and services, ensuring customer satisfaction and staying ahead in the evolving tech world.</p>
        </div>
    </div>

< Aboutteamf/>    
    </div>
  )
}




export default Aboutteam
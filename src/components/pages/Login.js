import React from 'react'
import login from "../Images/Loginimg.jpg"
const Login = () => {
  return (
    <div className='flex w-full justify-between h-[100vh]'>
        <div className="w-full md:w-1/2 px-[100px] pt-[150px] flex flex-col justify-between h-full">
        <form className="">
          <h3 className='font-montserratBold  text-[18px]  mb-7'>Login</h3>

          <div className=" flex flex-col gap-1">
          <label className='font-montserratBold text-sm'>Email</label>
          <input className='p-2 border border-buttons rounded-none font-montserrat text-buttons mb-4 outline-none text-[16px] '  type="email" placeholder='Email' />
          </div>
          
          <div className="flex flex-col gap-1">
          <label className='font-montserratBold text-sm'>Password</label>
          <input className='p-2 border border-buttons rounded-none font-montserrat text-buttons mb-4 outline-none text-[16px]' type="password" placeholder='Password' />
          </div>

          <div className=" flex justify-between items-center mt-[20px]">
        <p className='font-montserratBold text-buttons text-sm md:text-[16px]'>create an account</p>  
          <button className='font-montserratBold text-white w-[220px] flex justify-center items-center bg-buttons py-3'>Login</button>
          </div>

          
          </form>
          <div className="flex justify-between mb-3">
            <p className='font-montserratBold text-buttons text-sm text-[16x] cursor-pointer'>Pricing & Payments</p>
            <p className='font-montserratBold text-buttons text-sm text-[16x] cursor-pointer'>Privacy & Policy</p>
            <p className='font-montserratBold text-buttons text-sm text-[16x] cursor-pointer'>Forget Paword</p>
          </div>

        </div>

        <div className="hidden md:block  w-1/2 h-full">
        <img src={login} className='h-full w-full object-cover' alt="" />
        </div>

    </div>
  )
}

export default Login
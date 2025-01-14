import React from 'react'
import online from "../Images/collection-summer.jpg"
import newspring from "../Images/newspring things.jpg"
import springsell from "../Images/collection summer.jpg"
import summercollecton from "../Images/summer-collection.jpg"
import selle from "../Images/sell-product.jpg"


const Topsellingproducts = () => {
  return (
    <div className='flex justify-center items-center flex-col py-[80px] px-[100px]'>

        <h2 className='font-montserratBold text-[26px] pb-[12px]  '>Top Selling Smartphones</h2>
        <p className='text-center text-[18px] text-gray-500'>Explore the latest smartphones that are redefining mobile technology. 
            These devices will seamlessly integrate into your daily life, offering advanced features, sleek designs, and powerful performance
             to keep you connected and productive.</p>

             <div className="flex justify-between">
                <div className="w-[49%] h-[440px] relative overflow-hidden group ">
                    <img src={newspring} className='w-full h-full object-cover  group-hover:scale-110 transform transition-all duration-500 ' alt="" />

                    <div className="absolute top-0 pt-12 pl-10 left-0 flex flex-col w-full gap-2 h-full">
                        <h4 className='font-montserratBold text-white text-[16px]'>Fresh Finds for Tech Enthusiasts!</h4>
                        <h2 className='flex text-[26px] font-montserratBold text-white group-hover:text-buttons duration-500'>Upgrade with top gadgets.</h2>
                        <p className='text-white text-[14px] font-montserrat'>Save and stay ahead!</p>
                      </div>
                </div>

                <div className="w-[49%] h-[440px] gap-4  flex  justify-between flex-wrap">


                      <div className="w-[48%] h-[48%] overflow-hidden relative group">
                      <img src={online} className='w-full  h-full object-cover group-hover:scale-110 duration-500  ' alt="" />

                     <div className="absolute top-0 right-0 pr-2 pt-6 h-full w-full flex flex-col gap-2 items-end"> 
                        <h4 className='text-white text-[16px] font-montserratBold'>Online Exclusive</h4>
                        <p className='text-white font-montserrat text-[14px] group-hover:text-buttons duration-500 underline'>Shop now!</p>
                     </div>
                      </div>

                      <div className="w-[48%] h-[48%] overflow-hidden relative group">
                      <img src={springsell} className='w-full h-full object-cover group-hover:scale-110 duration-500' alt="" />
                        <div className=" absolute top-0 w-full h-full">
                            <h4 className=" text-[16px] text-buttons bg-white px-2 py-3 right-0 bottom-0 mb-6 absolute font-montserratBold group-hover:bg-buttons duration-500 group-hover:text-white ">  SPRING SALE </h4>
                        </div>
                      </div>
                      
                      <div className="w-[48%] h-[48%] overflow-hidden relative group">
                      <img src={selle}  className='w-full h-full object-cover group-hover:scale-110 duration-500' alt="" />
                      <h4 className=" text-[16px] bg-white px-2 py-3 text-buttons right-0 bottom-0 mb-6 absolute font-montserratBold group-hover:bg-buttons duration-500 group-hover:text-white">70% SALE</h4>

                      </div>

                      
                      <div className="w-[48%] h-[48%] overflow-hidden relative">
                      <img src={summercollecton} className='w-full h-full object-cover' alt="" />
                      </div>

                      
                     
                       
                </div>
             </div>

    </div>
  )
}

export default Topsellingproducts
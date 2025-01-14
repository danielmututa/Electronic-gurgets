import { Headphones, RefreshCw, Truck } from 'lucide-react'
import React from 'react'

const Fastdelivary = () => {
  return (
    <div className=''>
 <div className=" w-full border bg-buttons "><span></span></div>

<div className="flex relative px-[100px] justify-evenly py-8 ">
 <div className="flex gap-2 items-center"> 
    <Truck size={50}/> 
    <div className="flex flex-col gap-1">
        <h3 className="text-buttons font-montserratBold text-[20px]"> Fast & Free Delivery</h3>
        <p>On orders over $150</p>

        </div>
        </div>

        <div className="border h-[200px]   bg-buttons"><span></span></div>

 <div className="flex gap-2 items-center"> 
 <Headphones size={50}/>
    <div className="flex flex-col gap-1">
        <h3 className="text-buttons font-montserratBold text-[20px]"> Expert Support, Anytime</h3>
        <p>24/7 assistance for all your queries</p>

        </div>
        </div>


        <div className="border h-[200px]    bg-buttons"><span></span></div>

 <div className="flex gap-2 items-center"> 
 <RefreshCw size={50} className=''/>
    <div className="flex flex-col gap-1">
        <h3 className="text-buttons font-montserratBold text-[20px]"> Hassle-Free Returns</h3>
        <p>30-day money-back guarantee </p>

        </div>
        </div>

        </div>





  
 <div className=" w-full border bg-buttons "><span></span></div>
    </div>
  )
}

export default Fastdelivary
import React from 'react'

import brn from "./Images/Iphonebanner3.jpg"
import brn2 from "./Images/Samsuag.jpg"
import brn3 from "./Images/Nokiabanner.jpg"

const Home = () => {


    const Bannercards = [
        {img:brn, title:"IPHONE", all:"view all", des:"QUALITY YOU CAN TRUST"},
        {img:brn2, title:"SAMSUNG", all:"view all", des:"QUALITY YOU CAN TRUST"},
        {img:brn3, title:"NOKIA", all:"view all", des:"QUALITY YOU CAN TRUST"}
    ];
     





  return (
    <div>
        {
           Bannercards.map((card,index) => (
            <div key={index} className="flex relative items-start">

              <img src={card.img} className='w-full h-[100vh] object-cover' alt="" />
               <div className="absolute w-full top-0  h-full flex items-start justify-center  flex-col px-[100px] gap-3">
                <p className='text-white font-bold '>{card.title}</p>
                <p>{card.all}</p>
                <h1>{card.des}</h1>
               </div>

            </div>
           ))
        }


    </div>
  )
}

export default Home
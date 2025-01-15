import React from 'react'

const Aboutteamf = () => {

      const cardteam = [
    
           {img:"CEO.jpg" , name:"Olivia Smith" , position:"CEO", des:"Drives the company's vision, strategy, and innovation, ensuring growth and excellence in customer service for phone and electronic gadget solutions."},
           {img:"COM.jpg" , name:"Liam Davis" , position:"COM", des:"Oversees daily operations, enhancing service delivery and ensuring seamless processes for repair, sales, and customer support."},
           {img:"CTO.jpg" , name:"Ethan Johnson" , position:"CEO", des:" Leads repair services for phones and electronic gadgets, ensuring top-notch quality and efficient solutions to keep devices running smoothly."},
    
        ]

  return (
    <div className='px-[100px] py-[80px]'>
        <div className="flex justify-between">
            {
                cardteam.map((card,index) => (
                    <div key={index} className="w-[30%] flex flex-col  items-center text-center justify-center">
                      <img loading='lazy' className=' object-cover w-full h-[280px]'  src={require("../Images/" + card.img)} alt="" />
                      <p className='font-montserratBold text-[16px]] pt-[14px]'>{card.name}</p>
                      <p className='font-montserrat text-buttons text-[16px]]'>{card.position}</p>
                      <p className='font-montserrat text-gray-500 text-[16px]]'>{card.des}</p>

                    </div>
                ))
            }
        </div>
       
        </div>
  )
}

export default Aboutteamf
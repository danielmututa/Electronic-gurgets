import React from 'react'
import contactone from "../Images/contactpage.jpg"
import {  PhoneIcon } from 'lucide-react'
import map from "../Images/map.jpg"

const Contactpage = () => {

const contact = [
    {
      icon: PhoneIcon, type:"Phone", content:"+263-775306263"
   },
    {
      icon: PhoneIcon, type:"Email", content:"type@gmail.com"
   },
    {
      icon: PhoneIcon, type:"Address", content:"Lucky Street 126"
   },
    {
      icon: PhoneIcon, type:"Instagram", content:"TechRevive.com"
   },
];

const media =[
    {media:PhoneIcon},
    {media:PhoneIcon},
    {media:PhoneIcon},
]

  return (
    <div className=''>
         <div className=' h-[80vh] relative'>
                <img loading='lazy' src={contactone} className='h-full object-cover w-full' alt="" />
                <div className="flex   bg-blue-600/40 top-0 absolute h-full w-full justify-center items-center flex-col gap-2 px-[100px] text-center">
                    <h2 className='text-[26px] text-white font-montserratBold '>Contact us</h2>
                    <p className='text-[18px] font-montserrat text-white'>At  TechRevive, our dedicated team of skilled professionals is passionate about technology and innovation. From expert technicians to support staff, we work together to deliver exceptional products and services, ensuring customer satisfaction and staying ahead in the evolving tech world.</p>
                </div>
            </div>

            <div className="px-[100px] flex justify-between py-[80px]">
                {/* Get In Touch */}
                    <div className="flex w-[46%] flex-col gap-10">
                              <div className="flex  flex-col">
                               <h2 className='text-[26px] font-montserratBold pb-1'>Get In Touch</h2>
                               <p className='text-[18px] font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum, tempora quasi doloremque</p>
                              </div>

                              <div className="flex w-full  flex-wrap gap-12">
                               {
                                contact.map((card,index)=>(
                                    <div className=" flex gap-3">
                                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                                    < card.icon size={25} className='text-buttons'/>
                                  </div>

                                  <div className="flex flex-col">
                                    <h4 className='font-montserratBold text-[16px] '> {card.type}</h4>
                                    <p className='font-montserrat'>{card.content}</p>
                                    </div> 
                                   
                                    
                                    </div>
                                ))
                               }

                                {/* line */}
                                <div className="w-1/2 bg-buttons p-[1px]"><span></span></div>

                              </div>

                              {/* Social media */}
                              <div className="flex gap-12 ">
                                <h2 className='font-montserratBold text-[16px] '>Social Medai</h2>

                                {/* media icons */}
                                 <div className="flex gap-4">
                                   {
                                    media.map((card,index) =>(
                                        <div key={index} className="">
                                        <card.media size={20} />
                                    </div>
                                    ))
                                    
                                   }
                                 </div>
                                 </div>
                   </div>

                   {/* Form */}

                   <div className="w-[46%] p-4 ">
                            <form  className='w-full flex flex-col gap-5' action="">
                                {/* Email Nmae */}
                                <div className="flex w-full  justify-between">

                                    <div className="flex w-[48%] flex-col gap-1">
                                        <label htmlFor="" className='font-montserratBold text-[14px]'>Email</label>
                                        <input type="text" placeholder='Email' className='border w-full p-2 border-buttons font-montserrat outline-none text-body' />
                                    </div>

                                    <div className="flex w-[48%] flex-col gap-1">
                                        <label htmlFor="" className='font-montserratBold text-[14px]'>Name</label>
                                        <input type="text" placeholder='Name' className='border border-buttons p-2 w-full font-montserrat outline-none text-body' />
                                    </div>
                                </div>
                                    
                                    {/* Phone */}
                                    <div className="flex w-full flex-col gap-1">
                                        <label htmlFor="" className='font-montserratBold text-[14px]'>Phone</label>
                                        <input type="text" placeholder='Phone' className='border border-buttons p-2 w-full font-montserrat outline-none text-body' />
                                    </div>

                                    {/* Email */}
                                    <div className="flex w-full flex-col gap-1">
                                        <label htmlFor="" className='font-montserratBold text-[14px]'>Email</label>
                                        <textarea placeholder='Message' className='border border-buttons p-2 h-[100px] w-full font-montserrat outline-none text-body'  name="" id=""> 
                                    </textarea>
                                    </div>

                                    {/* buttons */}
                                    <div className="flex  flex-start">
                                    <button className='border text-buttons border-buttons p-3 font-montserratBold hover:bg-buttons transition duration-500 hover:text-white'  type="button">
                                   SUBMIT BUTTON
                                    </button>
                                    </div>
                                    

                            </form>
                   </div>
            </div>

            <div className="px-[100px] flex justify-between pb-[80px]">
                <img src={map} alt="" />
            </div>
         
    </div>
  )
}

export default Contactpage
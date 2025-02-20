import React, { useState } from 'react'
import aimg from "../Images/IphoneSiv.jpg"
import aimg2 from "../Images/SamsumgW.jpg"
import user from "../Images/Sophia Lee.jpg"
import { PencilIcon, Save } from 'lucide-react'

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);

  // State to hold the delivery address
  const [address, setAddress] = useState({
    name: 'Mr. Robbie Williams',
    street: '94 Kings Road, London',
    postcode: 'SW39 6AZ',
  });

  // Handle editing form visibility
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle form submit to update the address
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would normally update the address in your database or backend
    setIsEditing(false);
    console.log('Address has been updated!');
  };

  return (
    <div className='px-5  md:px-10 lg:px-20 pt-[100px] flex justify-between  '>
        <div className=" w-[62%]">
        <h2 className='font-montserratBold text-xl md:text-[23px] lg:text-[26px] mb-4'>My Account</h2>

        <div className="w-full flex justify-between ">

            <div className="relative w-[47%]">
                <img src={ aimg } className='w-full h-[200px] object-cover' alt="" />
                <div className="absolute top-0 flex items-center w-full h-full" ><p>S</p></div>
                
            </div>
            <div className="relative w-[47%]">
                <img src={ aimg2  } className='w-full h-[200px] object-cover' alt="" />
                
            </div>

           

        </div>
        </div>

        <div className="w-[34%] flex flex-col items-center justify-center bg-body">
          <div className=" flex flex-col pt-8 items-center justify-center">
            <img src={user} className='h-[80px] w-[80px]  object-cover rounded-full mb-3' alt="" />
            <p className='text-sm md:text-[16px] lg:text-[18px] text-white font-montserratBold'>Natasha Parker</p>
            <p className='text-sm  text-white  font-montserrat'>parkernatasha@gmail.com</p>
          </div>

          <div className="flex w-[80%] pt-8 justify-between">
            <div className="flex flex-col items-center">
              <p className='font-montserratBold text-white'> Balance</p>
              <p className='font-montserrat text-white'> 75</p>
            </div>
            <div className="flex flex-col items-center">
              <p className='font-montserratBold text-white'>Status</p>
              <p className='font-montserrat text-white'>0</p>
            </div>
            <div className="flex flex-col items-center">
              <p className='font-montserratBold text-white'>Activity</p>
              <p className='font-montserrat text-white'>200</p>
            </div>
          </div>

          <div className=" mt-4 border w-[80%]"></div>

           <div className="w-[80%]">
            <div className="flex w-full pt-8 justify-between">

            <p className='font-montserratBold text-white'>Delivary Address</p>
             <button onClick={toggleEdit}>
             <PencilIcon size={20} className=' text-white'/>
             </button>
            </div>
            

            {/* lllllllllllllllllllllllllllll */}

       
            <div>
      {/* Pencil icon to toggle the form */}
     
      {/* If editing, show the form */}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label  className='font-montserratBold text-white '>
              Name
              <input
                type="text"
                className='outline-none mt-3 ml-3 font-montserrat  text-sm text-body p-1'
                value={address.name}
                onChange={(e) => setAddress({ ...address, name: e.target.value })}
                required
              />
            </label>
          </div>
          <div>
            <label  className='font-montserratBold text-white '>
              Street Address
              <input
                type="text"
                  className='outline-none mt-3 ml-3 font-montserrat text-sm text-body p-1'
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                required
              />
            </label>
          </div>
          <div>
            <label className='font-montserratBold text-white '>
              Postcode
              <input
                type="text"
                  className='outline-none mt-3 ml-3 font-montserrat  text-sm text-body p-1'
                value={address.postcode}
                onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
                required
              />
            </label>
          </div>
          <button className='pt-3 text-white font-montserratBold' type="submit"><Save size={20}/></button>
        </form>
      ) : (
        // Display the address when not editing
        <div className='mt-5 flex flex-col gap-2'>
          
          <p className='font-montserrat text-white'>{address.name}</p>
          <p className='font-montserrat text-white'>{address.street}</p>
          <p className='font-montserrat text-white'>{address.postcode}</p>
          
        </div>
      )}
    </div>


            {/* lllllllllllllllllllllllllllll */}
           </div>


          <form className="mt-4 flex flex-col w-[80%]">
          <p className='font-montserratBold text-white'>Payment method</p>

<div className="flex justify-between mt-3 ">
<div className="p-2 bg-white text-buttons  "><p className='text-[10px] font-montserratBold'>paypal</p> </div>
          <input type="email" placeholder='Email ' className='w-[80%] pl-[8px] text-sm font-montserrat outline-none text-body' />
        
</div>
<button className='text-sm font-montserratBold w-full mt-2 py-1 bg-white text-body hover:bg-buttons hover:text-white hover:duration-300 hover:transition-all'>Continue</button>
           </form>
        </div>

    </div>
  )
}

export default Account
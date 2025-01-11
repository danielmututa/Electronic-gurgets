import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    



    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = () => {
    setOpenMenu(null);
  };

  return (
    <div className=" hidden lg:flex fixed w-full z-10 justify-between items-center bg-navbar  shadow-md py-[18px] px-[100px] ">
      <p className="text-white text-xl">Dimbo P</p>
      <div className="flex justify-between gap-9" ref={dropdownRef}>

        <NavLink to="/"  className="text-white hover:font-bold">Home</NavLink>

        <div 
          className="relative"
          onMouseEnter={() => setOpenMenu('pages')}
        >
          <button className="flex gap-1 items-center text-white hover:font-bold">
            Pages
            <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openMenu === 'pages' ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute left-0 mt-[18px] w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 origin-top ${
              openMenu === 'pages' ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
            }`}
          >
            <ul>
              <li 
                className="px-4 py-4 hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >About us</li>
              <li 
                className="px-4 py-4 hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >About Team</li>
              <li 
                className="px-4 py-4 hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Contact us</li>
              <li 
                className="px-4 py-4 hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >FAQ</li>

              <li 
                className="px-4 py-4 hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Wishlist</li>

              <li 
                className="px-4 py-4 hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Login</li>
            </ul>
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setOpenMenu('shop')}
        >
          <button className="flex gap-1 items-center text-white hover:font-bold">
            Shop
            <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openMenu === 'shop' ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute left-0 mt-[18px] w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 origin-top ${
              openMenu === 'shop' ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
            }`}
          >
            <ul>
              <li 
                className="px-4 py-4 hover:hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Product Listings</li>
              <li 
                className="px-4 py-4 hover:hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Categories</li>
              <li 
                className="px-4 py-4 hover:hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Account</li>
            </ul>
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setOpenMenu('blogs')}
        >
          <button className="flex gap-1 items-center text-white hover:font-bold">
            Blogs
            <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openMenu === 'blogs' ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute left-0 mt-[18px] w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 origin-top ${
              openMenu === 'blogs' ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
            }`}
          >
            <ul>
              <li 
                className="px-4 py-4 hover:hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Blog</li>
              <li 
                className="px-4 py-4 hover:hover:bg-buttons cursor-pointer"
                onClick={handleMenuItemClick}
              >Blog Article</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8">
        <Search size={18} className='text-white  hover:text-buttons font-extrabold'/>
        <User size={18} className='text-white  hover:text-buttons font-extrabold'/>
      <ShoppingCart size={18} className="text-white  hover:text-buttons font-extrabold"/>
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        {/* HERO LEFT SIDE */}  
        <div>
            <NavLink to="/automobile">Automobiles</NavLink>
            <NavLink to="/automobile">Clothes and wear</NavLink>
            <NavLink to="/automobile">Home interiors</NavLink>
            <NavLink to="/automobile">Computer and tech</NavLink>
            <NavLink to="/automobile">Tools, equipments</NavLink>
            <NavLink to="/automobile">Sports and outdoor</NavLink>
            <NavLink to="/automobile">Animal and pets</NavLink>
            <NavLink to="/automobile">Machinery tools</NavLink>
            <NavLink to="/automobile">More category</NavLink>
        </div>
        {/* HERO MIDDLE  */}
        <div>
            <h3>Latest Trending <br /> Electronic items</h3>
            <button>Learn more</button>
        </div>
        {/* HERO RIGHT SIDE */}
    </div>
  )
}

export default Hero


import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/Brand/logo-colored.svg';

// const Header = () => {
//   return (
//     <>
//     {/* HEADER TOP NAVBAR  */}
//       <div className='flex justify-between items-center gap-3 px-5 py-3'>
//         <div>
//           <img src={logo} alt="" className='w-30' />
//         </div>

//         <div className='border'>
//           <input type="search" placeholder='Search' className='border-r p-2 pr-24'/>

//           <select name="" id="" className='p-2'>
//             <option value="All category">All Category</option>
//             <option value="">New </option>
//             <option value="">Past</option>
//           </select>

//           <button className='border-l px-4 py-2 bg-[#0D6EFD]'>Search</button>
//         </div>

//         <div className='flex justify-between gap-3'>
//           <div className='flex flex-col items-center'>
//             <FaUser />
//             <p>Profile</p>
//           </div>
//           <div className='flex flex-col items-center'>
//             <MdMessage />
//             <p>Message</p>
//           </div>
//           <div className='flex flex-col items-center'>
//             <FaHeart />
//             <p>Order</p>
//           </div>
//           <div className='flex flex-col items-center'>
//             <IoMdCart />
//             <p>My Cart</p>
//           </div>
//         </div>
//       </div>

//       <hr />

//       {/* HEADER  BOTTOM NAVBAR*/}

//       <div className='flex justify-between items-center gap-3 px-5 py-3'>
//         <div className='flex justify-between item-center gap-5'>
//           <div className='flex justify-between items-center gap-3'>
//             <IoMenu />
//             <p>All Category</p>
//           </div>

//           <p>Hot Offers</p>
//           <p>Gift Boxes</p>
//           <p>Projects</p>
//           <p>Menu item</p>

//           <select name="" id="">
//             <option value="Help">Help</option>
//           </select>
//         </div>

//         <div>
//           <select name="" id="">
//             <option value="">English, USD</option>
//           </select>
//           <select name="" id="">
//             <option value="">Ship to, <img src="" alt="" /></option>
//           </select>
//         </div>
//       </div>

//       <hr />
      
//     </>
//   )
// }

// export default Header
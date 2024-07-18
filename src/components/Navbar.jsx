import React, { useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const Navbar = () => {
    const [profileVisibility, setProfileVisibility] = useState(false)

  return (
    <>
        <nav className=' bg-[#f4f4f4] flex justify-around items-center p-3 text-lg font-medium sticky top-0'>
            <div className=' text-3xl font-bold text-[#00a264] cursor-pointer'>JobPro</div>
            <div className=' flex items-center gap-x-4'>
                <NavLink className={(e)=> {return e.isActive?"border-b-4 border-b-[#00a264] text-[#00a264]":""}} to="/">Home</NavLink>
                <NavLink className={(e)=> {return e.isActive?"border-b-4 border-b-[#00a264] text-[#00a264]":""}} to="/jobs">Jobs</NavLink>
                <NavLink className={(e)=> {return e.isActive?"border-b-4 border-b-[#00a264] text-[#00a264]":""}} to="/about">About Us</NavLink>
                <NavLink className={(e)=> {return e.isActive?"border-b-4 border-b-[#00a264] text-[#00a264]":""}} to="/contact">Contact Us</NavLink>
            </div>
            <div className= {profileVisibility?"visible cursor-pointer":"invisible"}>Profile</div>
        </nav>
        <Outlet />  {/* This will render the child routes */}
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  const [login, setLogin] = useState(true)

  return (
    <>
      <nav className=' bg-[#f4f4f4] flex justify-around items-center p-3 text-lg font-medium sticky top-0'>
        <div className=' text-3xl font-bold text-[#00a264] cursor-pointer'>JobPro</div>
        <div className=' flex items-center gap-x-4'>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/">Home</NavLink>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/jobs">Jobs</NavLink>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/about">About Us</NavLink>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/contact">Contact Us</NavLink>
        </div>
        {login?<Link to="/myprofile">Profile</Link>
        :
        <Link className=' bg-[#4cd681] px-4 py-1 rounded-md font-medium hover:bg-[#4cd681d1] hover:text-[#000000b0] ' to="/signup">Sign Up</Link>
        }
      </nav>
      <Outlet />  {/* This will render the child routes */}
    </>
  )
}

export default Navbar
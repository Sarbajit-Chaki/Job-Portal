import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate();

  return (
    <>
      <nav className=' bg-[#f4f4f4] flex justify-around items-center p-3 text-lg font-medium sticky top-0 border-b border-gray-400'>
        <div className=' text-3xl font-bold text-[#00a264] cursor-pointer'>JobPro</div>
        <div className=' flex items-center gap-x-4'>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/">Home</NavLink>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/jobs">Jobs</NavLink>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/about">About Us</NavLink>
          <NavLink className={(e) => { return e.isActive ? "border-b-4 border-b-[#00a264] text-[#00a264]" : "" }} to="/contact">Contact Us</NavLink>
        </div>
        {login?<img onClick={()=>{navigate("/myprofile")}} className=' w-9 rounded-full cursor-pointer' src="https://api.dicebear.com/5.x/initials/svg?seed=Dibakar Ghosh" alt="profile" />
        :
        <Link className=' bg-[#4cd681] px-4 py-1 rounded-md font-medium hover:bg-[#4cd681d1] hover:text-[#000000b0] ' to="/signup">Sign Up</Link>
        }
      </nav>
      <Outlet />  {/* This will render the child routes */}
    </>
  )
}

export default Navbar
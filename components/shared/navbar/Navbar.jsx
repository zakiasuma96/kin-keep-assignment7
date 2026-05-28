import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { MdOutlineHome } from 'react-icons/md';
import { RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links =<>
    <li><NavLink
    className={({isActive})=> `mr-1 ${isActive ? "bg-[#244d3f] text-white" : ""}`}
     to={"/"}><MdOutlineHome/> Home</NavLink></li>
    <li><NavLink
     className={({isActive})=> `mr-1 ${isActive ? "bg-[#244d3f] text-white" : ""}`}   
     to={"/timeline"}><RiTimeLine/> Timeline</NavLink></li>
    <li><NavLink
     className={({isActive})=> `mr-1 ${isActive ? "bg-[#244d3f] text-white" : ""}`}   
     to={"/stats"}><ImStatsDots/> Stats</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow text-[24px] font-medium text-[#64748B]">
        {links}
      </ul>
    </div>
    <h2 className="text-2xl font-extrabold text-[#244D3F]">keen<span className="text-black">Keeper</span></h2>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px] font-medium text-[#64748B]">
    {links}
    </ul>
  </div>
 
</div>
    );
};

export default Navbar;

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Firebase/Provider/AuthProvider';
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import UseCart from '../../Hooks/UseCart';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogout = () => {
    logout().catch(error => console.error("Logout Error:", error));
  };

  // মোবাইল ড্রপডাউন থেকে লিঙ্কে ক্লিক করলে মেনু অটো বন্ধ করার ফাংশন
  const handleNavItemClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink 
          to='/' 
          onClick={handleNavItemClick}
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/menu' 
          onClick={handleNavItemClick}
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"}
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/orderFood' 
          onClick={handleNavItemClick}
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"}
        >
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/contact' 
          onClick={handleNavItemClick}
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"}
        >
          Contact Us
        </NavLink>
      </li>
    
      <li>
        <NavLink 
          to='/dashboard' 
          onClick={handleNavItemClick}
          className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "hover:text-blue-500"}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-8">
      {/* Navbar Start: Logo & Mobile Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden p-2" 
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul 
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg z-50 gap-1 border"
          >
            {navLinks}
          </ul>
        </div>
        
        <Link to='/' className="text-xl md:text-2xl font-extrabold text-blue-600 tracking-wide flex items-center gap-2">
          <span>🍽️</span> Bistro Boss
        </Link>
      </div>

      {/* Navbar Center: Desktop Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1 text-base font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End: Cart Icon with Total Amount & User Profile */}
      <div className="navbar-end gap-3">
        {/* Shopping Cart Button */}
        <Link  className="btn btn-ghost btn-circle relative" aria-label="Shopping Cart">
          <FaShoppingCart className="text-xl text-gray-700" />
          <span className="badge badge-secondary badge-sm absolute -top-1 -right-1 font-bold">
            {cart?.length || 0}
          </span>
        </Link>

        {/* User Profile / Auth Action */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-1">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User profile"}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaUserCircle className="w-full h-full text-gray-400" />
                )}
              </div>
            </div>
            
            {/* User Profile Dropdown Menu */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow-lg border z-50">
              <li className="px-2 py-1 font-semibold text-gray-700 border-b mb-2 truncate">
                {user.displayName || "User"}
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-600 hover:bg-red-50 mt-1">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to='/login' className="btn btn-primary btn-sm px-5 text-white font-medium">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
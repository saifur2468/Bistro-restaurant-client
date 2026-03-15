import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Firebase/Provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import UseCart from '../../Hooks/UseCart';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
 const [cart] = UseCart();
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error));
  };

  const navLinks = (
    <>
      <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Home</NavLink></li>
      <li><NavLink to='/menu' className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Menu</NavLink></li>
      <li><NavLink to='/orderFood' className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Order</NavLink></li>
      <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : ""}>Contact</NavLink></li>
      <li>
       <Link to="/dashboard/cart"> 
    <button className="btn">
        <h1>DashBord</h1>
        <div className="badge badge-secondary">+{cart.length}</div>
    </button>
</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2  shadow">
            {navLinks}
            <div className="mt-2 border-t pt-2">
              {
                user ? (
                  <>
                    <div className="flex items-center gap-2">
                      <FaUserCircle className="text-2xl" />
                      <span className="text-sm">{user.displayName || "User"}</span>
                    </div>
                    <button onClick={handleLogout} className="btn btn-sm btn-error text-white mt-2 w-full">Logout</button>
                  </>
                ) : (
                  <Link to='/login' className="btn btn-sm btn-primary w-full mt-2">Login</Link>
                )
              }
            </div>
          </ul>
        </div>
        <Link to='/' className="text-2xl font-bold text-blue-600 font-serif">🍽️ Bistro Boss</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-2xl font-serif">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {
          user ? (
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-xl" />
              <span className="hidden sm:block font-medium">{user.displayName || "User"}</span>
              <button onClick={handleLogout} className="btn btn-sm btn-error text-white">Logout</button>
            </div>
          ) : (
            <Link to='/login' className="btn btn-sm btn-primary text-xl text-center m-auto">Login</Link>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;

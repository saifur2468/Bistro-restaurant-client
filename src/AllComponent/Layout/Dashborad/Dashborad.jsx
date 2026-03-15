import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import  useAuth  from "../../Hooks/useAuth";
import {
    FaCartArrowDown,
    FaHome,
    FaBook,
    FaStar,
    FaCalendarAlt,
    FaUtensils,
    FaList,
    FaUser,
    FaWallet
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi2";

const Dashboard = () => {
    const { user } = useAuth();

  
    const isAdmin = user?.email === 'mdislamshakib218@gmail.com';

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-[#D1A054] text-white p-5">
                <div className="mb-10 text-center uppercase">
                    <h2 className="text-2xl font-bold leading-tight">Bistro Boss</h2>
                    <p className="text-lg font-semibold tracking-[4px]">Restaurant</p>
                </div>

                <ul className="menu space-y-2">
                    {
                        isAdmin ? (
                            // --- ADMIN MENU ---
                            <>
                                <li>
                                    <NavLink to="/dashboard/AdminHome" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaHome className="text-xl" /> Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/Additem" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaUtensils className="text-xl" /> Add Items
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/manageItems" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaList className="text-xl" /> Manage Items
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/ManageBooking" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaBook className="text-xl" /> Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/AllUser" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaUser className="text-xl" /> All Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            // --- NORMAL USER MENU ---
                            <>
                                <li>
                                    <NavLink to="userHome" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaHome className="text-xl" /> User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/Reservation" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaCalendarAlt className="text-xl" /> Reservation
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink to="/dashboard/Payment" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaWallet className="text-xl" /> Payment 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/PaymentHistory" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaWallet className="text-xl" /> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaCartArrowDown className="text-xl" /> My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addReview" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaStar className="text-xl" /> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/MyBooking" className={({ isActive }) => `flex items-center gap-3 p-2 font-medium uppercase ${isActive ? 'text-white bg-black/20 rounded' : 'text-black'}`}>
                                        <FaCalendarAlt className="text-xl" /> My Booking
                                    </NavLink>
                                </li>
                            </>
                        )
                    }

                    {/* Shared Links */}
                    <div className="divider border-t border-white/40 my-4"></div>
                    
                    <li>
                        <NavLink to="/" className="flex items-center gap-3 p-2 font-medium uppercase text-black hover:text-white">
                            <GoHomeFill className="text-xl" /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className="flex items-center gap-3 p-2 font-medium uppercase text-black hover:text-white">
                            <TiThMenu className="text-xl" /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="flex items-center gap-3 p-2 font-medium uppercase text-black hover:text-white">
                            <MdContactMail className="text-xl" /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-gray-50 p-10 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
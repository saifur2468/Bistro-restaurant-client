import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import {
  FaCartArrowDown,
  FaHome,
  FaBook,
  FaStar,
  FaCalendarAlt,
  FaUtensils,
  FaUser,
  FaWallet,
} from "react-icons/fa";

import { MdContactMail } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { HiX } from "react-icons/hi";

const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = user?.email === "admin@bistroboss.com";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // স্টাইল রিইউজ করার জন্য
  const activeStyle = "flex items-center gap-3 p-2.5 rounded bg-black/20 text-white font-medium uppercase text-sm md:text-base";
  const normalStyle = "flex items-center gap-3 p-2.5 rounded text-black font-medium uppercase text-sm md:text-base hover:text-white hover:bg-black/10 transition-colors";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative bg-base-100">

      {/* ================= Mobile & Tablet Topbar ================= */}
      <div className="sticky top-0 z-40 flex items-center justify-between bg-[#D1A054] px-4 py-3 shadow-md lg:hidden">
        <div className="text-white">
          <h2 className="text-lg font-bold uppercase tracking-wide">Bistro Boss</h2>
          <p className="text-xs font-semibold tracking-[2px]">Dashboard</p>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-md bg-black/20 p-2 text-2xl text-white focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <HiX /> : <TiThMenu />}
        </button>
      </div>

      {/* ================= Mobile Backdrop Overlay ================= */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
        ></div>
      )}

      {/* ================= Sidebar ================= */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-full lg:h-auto w-64 shrink-0
          bg-[#D1A054] p-5 text-white
          overflow-y-auto transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo / Brand (Desktop view) */}
        <div className="hidden lg:block mb-8 text-center uppercase">
          <h2 className="text-2xl font-bold leading-tight tracking-wide">
            Bistro Boss
          </h2>
          <p className="text-sm font-semibold tracking-[4px] mt-1">
            Restaurant
          </p>
        </div>

        {/* Mobile Header inside Sidebar for neat appearance */}
        <div className="flex lg:hidden items-center justify-between mb-6 border-b border-white/20 pb-4">
          <h2 className="text-xl font-bold uppercase">Menu</h2>
          <button 
            onClick={closeSidebar}
            className="p-1 rounded-md bg-black/20 text-white text-xl"
          >
            <HiX />
          </button>
        </div>

        <ul className="menu space-y-1 p-0">
          {isAdmin ? (
            // ================= ADMIN MENU =================
            <>
              <li>
                <NavLink to="/dashboard/AdminHome" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaHome className="text-lg shrink-0" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Additem" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaUtensils className="text-lg shrink-0" /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/ManageBooking" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaBook className="text-lg shrink-0" /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AllUser" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaUser className="text-lg shrink-0" /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            // ================= USER MENU =================
            <>
              <li>
                <NavLink to="/dashboard/userHome" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaHome className="text-lg shrink-0" /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Reservation" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaCalendarAlt className="text-lg shrink-0" /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Payment" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaWallet className="text-lg shrink-0" /> Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/PaymentHistory" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaWallet className="text-lg shrink-0" /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaCartArrowDown className="text-lg shrink-0" /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaStar className="text-lg shrink-0" /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/MyBooking" onClick={closeSidebar} className={({ isActive }) => isActive ? activeStyle : normalStyle}>
                  <FaCalendarAlt className="text-lg shrink-0" /> My Booking
                </NavLink>
              </li>
            </>
          )}

          {/* Divider */}
          <div className="my-4 border-t border-white/40"></div>

          {/* Shared Links */}
          <li>
            <NavLink to="/" onClick={closeSidebar} className="flex items-center gap-3 p-2.5 rounded text-black font-medium uppercase text-sm md:text-base hover:text-white hover:bg-black/10 transition-colors">
              <GoHomeFill className="text-lg shrink-0" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={closeSidebar} className="flex items-center gap-3 p-2.5 rounded text-black font-medium uppercase text-sm md:text-base hover:text-white hover:bg-black/10 transition-colors">
              <TiThMenu className="text-lg shrink-0" /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeSidebar} className="flex items-center gap-3 p-2.5 rounded text-black font-medium uppercase text-sm md:text-base hover:text-white hover:bg-black/10 transition-colors">
              <MdContactMail className="text-lg shrink-0" /> Contact
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* ================= Main Content Area ================= */}
      <main className="flex-1 overflow-x-hidden min-w-0 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="w-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default Dashboard;
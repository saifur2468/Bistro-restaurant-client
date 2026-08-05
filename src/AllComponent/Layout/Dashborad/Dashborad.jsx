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

  return (
    <div className="flex min-h-screen">

      {/* Mobile & Tablet Topbar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-[#D1A054] px-4 py-3 lg:hidden">
        <div className="text-white">
          <h2 className="text-xl font-bold uppercase">Bistro Boss</h2>
          <p className="text-sm font-semibold tracking-[3px]">
            Restaurant
          </p>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-md bg-black/20 p-2 text-2xl text-white"
        >
          {sidebarOpen ? <HiX /> : <TiThMenu />}
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-0 z-50
          h-screen w-64
          overflow-y-auto
          bg-[#D1A054] p-5 text-white
          transition-transform duration-300

          lg:static
          lg:z-auto
          lg:translate-x-0

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo */}
        <div className="mb-10 text-center uppercase">
          <h2 className="text-2xl font-bold leading-tight">
            Bistro Boss
          </h2>

          <p className="text-lg font-semibold tracking-[4px]">
            Restaurant
          </p>
        </div>

        <ul className="menu space-y-2">

          {isAdmin ? (
            // ================= ADMIN MENU =================
            <>
              <li>
                <NavLink
                  to="/dashboard/AdminHome"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaHome className="text-xl" />
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/Additem"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaUtensils className="text-xl" />
                  Add Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/ManageBooking"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaBook className="text-xl" />
                  Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/AllUser"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaUser className="text-xl" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            // ================= USER MENU =================
            <>
              <li>
                <NavLink
                  to="userHome"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaHome className="text-xl" />
                  User Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/Reservation"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaCalendarAlt className="text-xl" />
                  Reservation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/Payment"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaWallet className="text-xl" />
                  Payment
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/PaymentHistory"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaWallet className="text-xl" />
                  Payment History
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/cart"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaCartArrowDown className="text-xl" />
                  My Cart
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addReview"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaStar className="text-xl" />
                  Add Review
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/MyBooking"
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 font-medium uppercase ${
                      isActive
                        ? "rounded bg-black/20 text-white"
                        : "text-black"
                    }`
                  }
                >
                  <FaCalendarAlt className="text-xl" />
                  My Booking
                </NavLink>
              </li>
            </>
          )}

          {/* Divider */}
          <div className="my-4 border-t border-white/40"></div>

          {/* Shared Links */}
          <li>
            <NavLink
              to="/"
              onClick={closeSidebar}
              className="flex items-center gap-3 p-2 font-medium uppercase text-black hover:text-white"
            >
              <GoHomeFill className="text-xl" />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              onClick={closeSidebar}
              className="flex items-center gap-3 p-2 font-medium uppercase text-black hover:text-white"
            >
              <TiThMenu className="text-xl" />
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={closeSidebar}
              className="flex items-center gap-3 p-2 font-medium uppercase text-black hover:text-white"
            >
              <MdContactMail className="text-xl" />
              Contact
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Content Area */}
      <div className="min-w-0 flex-1 overflow-y-auto pt-20 lg:pt-0">
        <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
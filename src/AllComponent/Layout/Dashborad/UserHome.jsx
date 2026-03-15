import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaWallet, FaStore, FaPhoneAlt, FaCar, FaStar, FaBookmark, FaCoins } from 'react-icons/fa';

const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // ব্যাকেন্ডের /user-stats/:email এন্ডপয়েন্ট থেকে ডেটা ফেচ করা
    const { data: stats = {} } = useQuery({
        queryKey: ['user-stats', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-stats/${user?.email}`);
            return res.data;
        }
    });

    return (
        <div className="w-full px-4">
            <h2 className="text-3xl font-serif uppercase mb-8">
                Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!
            </h2>
            
            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white">
                <div className="bg-gradient-to-r from-purple-500 to-purple-200 p-8 rounded-lg flex justify-center items-center gap-4">
                    <FaWallet className="text-4xl" />
                    <div><p className="text-3xl font-bold">{stats.orderCount || 0}</p><p className="text-xl">Orders</p></div>
                </div>
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-200 p-8 rounded-lg flex justify-center items-center gap-4">
                    <FaStore className="text-4xl" />
                    <div><p className="text-3xl font-bold">{stats.totalSpent || 0}$</p><p className="text-xl">Spent</p></div>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-pink-200 p-8 rounded-lg flex justify-center items-center gap-4">
                    <FaPhoneAlt className="text-4xl" />
                    <div><p className="text-3xl font-bold">{stats.bookingCount || 0}</p><p className="text-xl">Bookings</p></div>
                </div>
            </div>

            {/* Profile and Activities */}
            <div className="flex flex-col md:flex-row shadow-sm border">
                <div className="flex-1 bg-[#FFEDD5] p-20 flex flex-col items-center justify-center border-r-4 border-yellow-500">
                    <div className="w-40 h-40 rounded-full border-4 border-yellow-600 mb-4 bg-white overflow-hidden">
                        <img src={user?.photoURL || 'https://i.ibb.co/PNG-image.png'} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-3xl font-serif uppercase">{user?.displayName}</h3>
                </div>
                <div className="flex-1 bg-[#FEF9C3] p-20">
                    <h3 className="text-3xl font-serif uppercase mb-6">Your Activities</h3>
                    <ul className="space-y-3 text-xl font-semibold uppercase">
                        <li className="text-blue-500"> <FaCar></FaCar> Orders: {stats.orderCount || 0}</li>
                        <li className="text-teal-500"> <FaStar></FaStar> Reviews: {stats.reviewCount || 0}</li>
                        <li className="text-yellow-600"> <FaBookmark></FaBookmark> Bookings: {stats.bookingCount || 0}</li>
                        <li className="text-orange-500"> <FaCoins></FaCoins> Total Spent: ${stats.totalSpent || 0}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
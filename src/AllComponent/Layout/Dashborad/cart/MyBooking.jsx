import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyBooking = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
            return res.data;
        }
    });

    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this booking?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                
                const res = await axiosSecure.delete(`/bookings/${id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire("Cancelled!", "Your booking has been removed.", "success");
                }
            }
        });
    };

    if (isLoading) return <div className="text-center mt-20 text-xl font-bold">Loading Bookings...</div>;

    return (
        <div className="p-5 md:p-10 bg-white min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-10">
                <p className="text-yellow-600 italic text-xl">---My Bookings---</p>
                <h2 className="text-4xl font-bold border-y-4 py-4 inline-block px-10 uppercase">Excellent Service</h2>
            </div>

            <div className="max-w-6xl mx-auto bg-white p-8 shadow-xl rounded-lg">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold uppercase">Total Bookings: {bookings.length}</h3>
                </div>

                <div className="overflow-x-auto rounded-t-2xl border">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr className="uppercase text-sm">
                                <th className="py-5 px-6">#</th>
                                <th>Guest Number</th>
                                <th>Category</th>
                                <th>Booking Date</th>
                                <th>Booking Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={booking._id} className="border-b hover:bg-gray-50">
                                    <td className="font-bold">{index + 1}</td>
                                    <td className="font-semibold">{booking.guest || "1 Person"}</td>
                                    <td>Food Order/Table</td>
                                    <td className="text-gray-600">{booking.date}</td>
                                    <td className="text-gray-600">{booking.time}</td>
                                    <td>
                                        <span className={`badge border-none p-3 text-white ${
                                            booking.status === 'pending' ? 'bg-orange-400' : 'bg-green-500'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(booking._id)}
                                            className="btn btn-ghost bg-red-600 text-white hover:bg-red-800 btn-md"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {bookings.length === 0 && (
                        <p className="text-center py-10 text-gray-500 font-serif text-xl">You have no bookings yet!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBooking;
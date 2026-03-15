import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageBooking = () => {
    const axiosSecure = useAxiosSecure();

    
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['admin-bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/bookings');
            return res.data;
        }
    });


    const handleAcceptBooking = (id) => {
        axiosSecure.patch(`/bookings/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Booking has been accepted!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

  
    const handleDeleteBooking = (id) => {
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
                    Swal.fire("Cancelled!", "The booking has been deleted.", "success");
                }
            }
        });
    }

    return (
        <div className="p-10 w-full">
            <div className="text-center mb-10">
                <p className="text-yellow-600 italic text-xl">---At a Glance!---</p>
                <h2 className="text-4xl font-bold border-y-4 py-4 inline-block px-10 uppercase">Manage All Bookings</h2>
            </div>

            <div className="bg-white p-10 shadow-xl rounded-lg">
                <h3 className="text-3xl font-bold mb-6 uppercase">Total Bookings: {bookings.length}</h3>
                
                <div className="overflow-x-auto rounded-t-2xl border">
                    <table className="table w-full">
                        <thead className="bg-[#D1A054] text-white">
                            <tr className="uppercase">
                                <th className="p-5">#</th>
                                <th>User Email</th>
                                <th>Phone</th>
                                <th>Booking Date</th>
                                <th>Booking Time</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={booking._id} className="border-b hover:bg-gray-50 text-gray-700">
                                    <th>{index + 1}</th>
                                    <td>{booking.email}</td>
                                    <td>{booking.phone || 'N/A'}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>
                                        <span className={`font-bold ${booking.status === 'Done' ? 'text-green-600' : 'text-orange-500'}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="flex gap-3">
                                        {/* Accept Button */}
                                        <button 
                                            disabled={booking.status === 'Done'}
                                            onClick={() => handleAcceptBooking(booking._id)}
                                            className={`btn btn-circle btn-md text-white ${booking.status === 'Done' ? 'btn-disabled bg-gray-300' : 'bg-green-500 hover:bg-green-700'}`}
                                        >
                                            <FaCheck />
                                        </button>
                                        
                                        {/* Delete Button */}
                                        <button 
                                            onClick={() => handleDeleteBooking(booking._id)}
                                            className="btn btn-circle btn-md bg-red-600 text-white hover:bg-red-800"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;
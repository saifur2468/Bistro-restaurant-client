import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
// import useCart from '../../../';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    // মোট দাম হিসাব করার জন্য
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch(); // ডাটা ডিলিট হওয়ার পর টেবিল আপডেট করবে
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been removed from cart.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            {/* Section Header */}
            <div className="text-center mb-10">
                <p className="text-yellow-600 italic text-xl">---My Cart---</p>
                <h2 className="text-4xl font-bold border-y-4 py-4 inline-block px-10 uppercase">Wanna Add More?</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-white p-10 shadow-xl rounded-lg">
                {/* Stats Row */}
                <div className="flex justify-between items-center mb-8 font-serif">
                    <h3 className="text-3xl font-bold uppercase">Total Orders: {cart.length}</h3>
                    <h3 className="text-3xl font-bold uppercase">Total Price: ${totalPrice.toFixed(2)}</h3>
                    <button className="btn bg-[#D1A054] text-white px-6 hover:bg-[#b88a42] border-none">Pay</button>
                </div>

                {/* Table Container */}
                <div className="overflow-x-auto rounded-t-2xl">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr className="uppercase">
                                <th className="py-5 px-6">#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id} className="border-b">
                                    <td className="font-bold">{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-gray-600 font-medium">{item.name}</td>
                                    <td className="font-bold">${item.price}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost bg-red-600 text-white hover:bg-red-800 btn-md"
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

export default MyCart;
import React from 'react';
import useCart from '../../../Hooks/UseCart';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleProcessPayment = () => {
        if (cart.length === 0) {
            return Swal.fire("Error", "Your cart is empty!", "error");
        }

        Swal.fire({
            title: "Confirm Payment?",
            text: `Total Amount: $${totalPrice.toFixed(2)}`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#570DF8",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Pay Now!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const paymentInfo = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: `TXN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, // ডামি ট্রানজেকশন আইডি
                    date: new Date(), // ব্যাকএন্ডে সেভ করার জন্য
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId || item._id),
                    status: 'service pending'
                };

                // আপনার ব্যাকএন্ডের app.post('/payments') এ ডাটা পাঠানো হচ্ছে
                const res = await axiosSecure.post('/payments', paymentInfo);
                
                if (res.data.result.insertedId) {
                    refetch(); // কার্ট ক্লিয়ার করার জন্য
                    Swal.fire({
                        title: "Payment Successful!",
                        text: "Your order has been placed.",
                        icon: "success"
                    });
                    navigate('/dashboard/paymentHistory'); // হিস্ট্রি পেজে পাঠিয়ে দেওয়া
                }
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto mt-20 text-center px-4">
            <h2 className="text-4xl uppercase mb-20 tracking-widest">Payment</h2>
            
            <div className="bg-gray-50 p-10 rounded-xl shadow-sm border">
                <p className="mb-6 text-xl font-semibold">Amount to Pay: <span className="text-purple-600">${totalPrice.toFixed(2)}</span></p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <input type="text" placeholder="Card number" className="input input-bordered w-full max-w-xs h-14" />
                    <input type="text" placeholder="MM/YY/CVC" className="input input-bordered w-full max-w-xs h-14" />
                </div>

                <button 
                    onClick={handleProcessPayment}
                    className="btn bg-[#570DF8] hover:bg-[#4506cb] text-white px-20 border-none h-14 text-lg"
                >
                    Pay
                </button>
            </div>
        </div>
    );
};

export default Payment;
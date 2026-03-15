import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    });

    if (isLoading) return <div className="text-center mt-20 text-2xl">Loading History...</div>;

    return (
        <div className="p-10">
            <div className="text-center mb-10">
                <p className="text-yellow-600 italic text-xl">---At a Glance!---</p>
                <h2 className="text-4xl font-bold border-y-4 py-4 inline-block px-10 uppercase">Payment History</h2>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg">
                <h3 className="text-3xl font-bold mb-6">Total Payments: {payments.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-[#D1A054] text-white">
                            <tr className="uppercase">
                                <th className="p-5">#</th>
                                <th>Email</th>
                                <th>Transaction ID</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={payment._id} className="hover:bg-gray-50 border-b">
                                    <td className="font-bold">{index + 1}</td>
                                    <td>{payment.email}</td>
                                    <td className="text-blue-600 font-medium">{payment.transactionId}</td>
                                    <td className="font-bold text-orange-600">${payment.price}</td>
                                    <td>{new Date(payment.date).toLocaleDateString()}</td>
                                    <td>
                                        <span className="badge bg-orange-400 border-none text-white p-3">
                                            {payment.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {payments.length === 0 && <p className="text-center py-10 text-gray-500">No payment history found.</p>}
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
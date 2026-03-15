import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Reservation = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleBooking = async (e) => {
        e.preventDefault();
        const form = e.target;
        const bookingInfo = {
            date: form.date.value,
            time: form.time.value,
            guest: form.guest.value,
            name: form.name.value,
            email: user?.email,
            phone: form.phone.value,
            status: 'pending'
        };

        const res = await axiosSecure.post('/bookings', bookingInfo);
        if (res.data.insertedId) {
            Swal.fire("Success", "Booking Request Sent!", "success");
            form.reset();
        }
    };

    return (
        <div className="p-10">
            <h2 className="text-4xl text-center uppercase mb-10 font-bold border-y-4 py-4">Book A Table</h2>
            <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input type="date" name="date" className="input input-bordered" required />
                <input type="time" name="time" className="input input-bordered" required />
                <select name="guest" className="select select-bordered">
                    <option>1 Person</option><option>2 Person</option><option>4 Person</option>
                </select>
                <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                <input type="email" defaultValue={user?.email} readOnly className="input input-bordered" />
                <div className="md:col-span-3 text-center">
                    <button className="btn bg-[#A52A2A] text-white">Book A Table</button>
                </div>
            </form>
        </div>
    );
};

export default Reservation;
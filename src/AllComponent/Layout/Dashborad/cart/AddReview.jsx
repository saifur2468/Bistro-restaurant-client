import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaRocket } from 'react-icons/fa';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddReview = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [rating, setRating] = useState(0);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        if (rating === 0) {
            return Swal.fire("Error", "Please provide a star rating!", "error");
        }

        const reviewInfo = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            recipeName: data.recipeName,
            suggestion: data.suggestion,
            details: data.details,
            rating: rating,
            date: new Date()
        };

        try {
            // আপনার ব্যাকএন্ডের app.post('/reviews') এন্ডপয়েন্টে ডাটা পাঠানো হচ্ছে
            const res = await axiosSecure.post('/reviews', reviewInfo);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for the review!",
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                setRating(0);
            }
        } catch (error) {
            console.error("Review Error:", error);
            Swal.fire("Error", "Something went wrong!", "error");
        }
    };

    return (
        <div className="p-5 md:p-10 bg-white min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-10">
                <p className="text-yellow-600 italic text-xl">---Sharing is Caring!!!---</p>
                <h2 className="text-4xl font-bold border-y-4 py-4 inline-block px-10 uppercase">Give A Review...</h2>
            </div>

            <div className="max-w-5xl mx-auto bg-gray-100 p-8 md:p-16 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-3xl font-serif text-center mb-6 uppercase">Rate Us!</h3>
                    
                    {/* Star Rating Section */}
                    <div className="flex justify-center mb-10">
                        <Rating
                            style={{ maxWidth: 250 }}
                            value={rating}
                            onChange={setRating}
                            isRequired
                        />
                    </div>

                    <div className="space-y-6">
                        {/* Recipe Name */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Which recipe you liked most?</label>
                            <input 
                                {...register("recipeName", { required: true })}
                                type="text" 
                                placeholder="Recipe you liked most" 
                                className="input input-bordered w-full h-14" 
                            />
                        </div>
                        
                        {/* Suggestion */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Do you have any suggestion for us?</label>
                            <input 
                                {...register("suggestion")}
                                type="text" 
                                placeholder="Suggestion" 
                                className="input input-bordered w-full h-14" 
                            />
                        </div>

                        {/* Review Details */}
                        <div className="form-control">
                            <label className="label font-bold text-gray-700">Kindly express your care in a short way.*</label>
                            <textarea 
                                {...register("details", { required: true })}
                                className="textarea textarea-bordered h-40 text-base" 
                                placeholder="Review in detail"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button 
                                type="submit"
                                className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-10 border-none rounded-none flex items-center gap-2 hover:opacity-90 transition-all"
                            >
                                Send Review <FaRocket />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;